const   fs = require('fs'),
        yargs = require('yargs'),
        request = require('request');

const keys = require('./API-KEYS');

const argv = yargs
        .option("lang", {
            description: "Select the langauge",
            alias: "l",
            demand: true
        })
        .help()
        .argv;



