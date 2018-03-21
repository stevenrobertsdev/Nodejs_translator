# Nodejs_translator
A Node.js app that takes text, translates it into a chosen language and then saves it into a file.

### Installation
Firstly run `npm install` to install the dependencies for the app.

### API keys
Yandex Translation API is being ued for this app, to run the translator you will need to generate a new API key. Go to [the Yandex Translation webiste](https://tech.yandex.com/translate/) and sign up and generate a new API key. 

Once done, create a new folder in the root directory titled `API-KEYS.js`. Inside this folder include the code
```
module.exports = {
    yandexKey: "YOUR API KEY HERE"
}
```
This will allow the rest of the application to inject your API key into the request.


### Using the app
To use the app run the code
```
node app.js -t "A cool translation application built in node" -l fr
```
using the `-t` tag to specify the text you want translated and the `-l` tag to select the initials of the languge you want to translate into.

For a full list of supprted langugaes and their initials vist [the Yandex Translation supported language list](https://tech.yandex.com/translate/doc/dg/reference/getLangs-docpage/).