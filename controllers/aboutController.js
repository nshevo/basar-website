// render about page
var aboutGet = (req, res, next) => {
    res.render('about', { title: 'Express' });
}

module.exports = {
    aboutGet
}