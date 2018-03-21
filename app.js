const   fs = require('fs'),
        yargs = require('yargs');

const   translator = require("./translate");

const argv = yargs
        .option("lang", {
            description: "Select the langauge",
            alias: "l",
            demand: true
        }).option('text', {
            description: "The text to be translated",
            alias: "t",
            demand: true
        })
        .help()
        .argv;

translator.translate(argv.t, argv.l, (errorMessage, result)=> {
    if(errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(result.translatedText);
    }
})
