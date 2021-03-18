var i18n = require('i18n');

i18n.configure({

//define how many languages we would support in our application
locales:['en', 'de'],

//define the path to language json files, default is /locales
directory: './locales',

//define the default language
defaultLocale: 'en',

//for accessing nested objects from json file
objectNotation: true,

// define a custom cookie name to parse locale settings from 
cookie: 'i18n'
});
module.exports = i18n;