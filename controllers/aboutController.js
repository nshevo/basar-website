// render about page
var aboutGet = (req, res, next) => {
    res.render('about', { title: res.__("about.title"), response: res });
}

module.exports = {
    aboutGet
}