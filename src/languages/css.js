const colors = require('../colors.json')

module.exports = [
    {
        name: 'support.constant.property-value.scss',
        scope:
            'support.constant.property-value.scss,support.constant.property-value.css',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: 'CSS/SCSS/LESS Operators',
        scope: 'keyword.operator.css,keyword.operator.scss,keyword.operator.less',
        settings: {
            foreground: colors['blue']
        }
    },
    {
        name: 'css color standard name',
        scope:
            'support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: 'css comma',
        scope: 'punctuation.separator.list.comma.css',
        settings: {
            foreground: colors['light-white']
        }
    },
    {
        name: 'css attribute-name.id',
        scope: 'support.constant.color.w3c-standard-color-name.css',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: 'Attribute class',
        scope: 'entity.other.attribute-name.class.css',
        settings: {
            foreground: colors['yellow'],
            fontStyle: 'normal'
        }
    },
    {
        name: 'rgb value less',
        scope: 'less rgb-value',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: 'sass selector',
        scope: 'selector.sass',
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: 'css property-name',
        scope: 'support.type.vendored.property-name.css',
        settings: {
            foreground: colors['blue']
        }
    }
]
