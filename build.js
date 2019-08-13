const fs = require('fs')
const editor = require('./src/editor.json')
const general = require('./src/general')
const langs = require("./src/languages")

syntax = general

for (language in langs) {
    console.log("Adding lang: " + language)
    syntax.tokenColors = syntax.tokenColors.concat(langs[language])
}

fs.writeFileSync('./themes/Railscasts-Renewed.json', JSON.stringify({...editor, ...syntax}, '', 2))
