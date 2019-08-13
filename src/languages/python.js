const colors = require('../colors.json')

module.exports = [
    {
        name: 'support.variable.magic.python',
        scope: 'support.variable.magic.python',
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: 'punctuation.separator.parameters.python',
        scope:
            'punctuation.separator.period.python,punctuation.separator.element.python,punctuation.parenthesis.begin.python,punctuation.parenthesis.end.python,',
        settings: {
            foreground: colors['light-white']
        }
    },
    {
        name: 'python parameter',
        scope: 'variable.parameter.function.language.python',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: 'python type',
        scope: 'support.type.python',
        settings: {
            foreground: colors['blue']
        }
    },
    {
        name: 'python logical',
        scope: 'keyword.operator.logical.python',
        settings: {
            foreground: colors['purple']
        }
    },
    {
        name: 'pyCs',
        scope: 'variable.parameter.function.python',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: 'python block',
        scope:
            'punctuation.definition.arguments.begin.python,punctuation.definition.arguments.end.python,punctuation.separator.arguments.python,punctuation.definition.list.begin.python,punctuation.definition.list.end.python',
        settings: {
            foreground: colors['light-white']
        }
    },
    {
        name: 'python function-call.generic',
        scope: 'meta.function-call.generic.python',
        settings: {
            foreground: colors['blue']
        }
    },
    {
        name: 'python placeholder reset to normal string',
        scope: 'constant.character.format.placeholder.other.python',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: 'python function decorator @',
        scope: 'meta.function.decorator.python',
        settings: {
            foreground: colors['blue']
        }
    },
    {
        name: 'python function support',
        scope:
            'support.token.decorator.python,meta.function.decorator.identifier.python',
        settings: {
            foreground: colors['blue']
        }
    },
    {
        name: 'variable.parameter.function.language.special.self.python',
        scope: 'variable.parameter.function.language.special.self.python',
        settings: {
            foreground: colors['yellow']
        }
    }
]
