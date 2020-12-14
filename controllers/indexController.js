
// renders a homepage
const homepage_get = (req, res, next) =>  {
    res.render('index', { title: 'Shopping as it should be' }
    );
  }

 module.exports = {
     homepage_get
 }