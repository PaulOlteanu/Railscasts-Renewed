const colors = require('../colors.json')

module.exports = [
    {
        name: 'ts primitive/builtin types',
        scope:
            'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: 'js func parameter',
        scope: ['variable.parameter.function.js'],
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: 'CoffeeScript Function Argument',
        scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
        settings: {
            foreground: colors['red']
        }
    }
]
