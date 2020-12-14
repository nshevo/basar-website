// render about page
var about_get = (req, res, next) => {
    res.render('about', { title: 'Express' });
}

module.exports = {
    about_get
}