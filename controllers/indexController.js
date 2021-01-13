
// renders a homepage
const homepageGet = (req, res, next) =>  {
    res.render('index', { title: 'Shopping as it should be' }
    );
  }

 module.exports = {
     homepageGet
 }