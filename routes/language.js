var express = require('express');
var router = express.Router();




router.get('/:lang', (req,res)=>{

    //get the user selected lang from dropdown
    var lang=req.params.lang

    //setting cookies based on selected language
    if(lang == "de"){
        res.cookie('language', 'de');
        res.redirect("/")
    }
    else if(lang == "en"){
        res.cookie('language', 'en');
        res.redirect("/")
    }
});


module.exports=router;