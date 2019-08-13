const fs = require('fs')
const editor = require('./src/editor.json')
const syntax = require('./src/syntax')

fs.writeFileSync('./themes/Railscasts-Renewed.json', JSON.stringify({...editor, ...syntax}, '', 2))
