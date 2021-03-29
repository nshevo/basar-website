/**
 * @author Nikita Shevchenko
 * @description Controller for the Report Problem Page
 */

const passport = require("passport");
const nodeMailer = require("nodemailer");


exports.isUserLoggedIn = (req, res) => {
    passport.authenticate('jwt', { session: false, failureFlash: false },
        (err, user) => {
            if (!user) {
                res.render("reportProblem", { title: res.__("reportProblem.title"), response: res, messages: { error: req.flash('error'), success: req.flash('success') } });
            }
            if (user) {
                res.render("reportProblem", { title: res.__("reportProblem.title"), response: res, userEmail: user.email, messages: { error: req.flash('error'), success: req.flash('success') } });
            }
        })(req, res)
}

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    auth: {
        user: process.env.REPORT_RECEIVER_EMAIL,
        pass: process.env.REPORT_RECEIVER_PASS,
    },
});

function reportError(req, res) {
    req.flash("error", res.__("reportProblem.reportError"));
    res.status(500).render('reportProblem', {
        title: res.__("reportProblem.title"), response: res, messages: {
            error: req.flash('error'),
            success: req.flash('success')
        }
    });
}

exports.reportProblem = (req, res) => {
    let { email, subject, description } = req.body;

    let isAnyFieldEmpty = !email || !subject || !description;

    if (isAnyFieldEmpty) {
        req.flash("error", res.__("reportProblem.pleaseEnterAllFields"));
        return res.status(422).render('reportProblem', {
            title: res.__("reportProblem.title"), response: res, messages: {
                error: req.flash('error'),
                success: req.flash('success')
            }
        });
    }

    if (subject.length < 6 || description.length < 6) {
        req.flash("error", res.__("reportProblem.describeMoreSubjectOrDescription"));
        return res.status(422).render('reportProblem', {
            title: res.__("reportProblem.title"), response: res, messages: {
                error: req.flash('error'),
                success: req.flash('success')
            }
        });
    }

    transporter.verify(function (error, success) {
        if (error) {
            reportError(req, res);
        }
    });

    const mail = {
        from: email,
        to: process.env.REPORT_RECEIVER_EMAIL,
        subject: subject,
        text: `<${email}> \n${description}`,
    };

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            reportError(req, res);
        } else {
            req.flash("success", res.__("reportProblem.thankYouForReporting"));
            return res.status(200).render('reportProblem', {
                title: res.__("reportProblem.title"), response: res, messages: {
                    error: req.flash('error'),
                    success: req.flash('success')
                }
            });
        }
    });
}
