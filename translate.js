const   request = require('request'),
        keys = require('./API-KEYS');

var translate = (text, lang, callback)=> {
    request({
        url: `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${keys.yandexKey}&text=${encodeURIComponent(text)}&lang=${encodeURIComponent(lang)}`,
        json:true
    }, (error, response, body) => {
        if(error) {
            callback("Language not found.")
        } else {
            callback(undefined, {
                translatedText: body.text[0]
            })
        }
    })
}

module.exports = {
    translate
}