
// renders a homepage
const homepageGet = (req, res, next) =>  {

    //var r=res;
    res.render('index',
     { 
        title: res.__("index.title"),
        response: res
     }
    );
  }

 module.exports = {
     homepageGet
 }