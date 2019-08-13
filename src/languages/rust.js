const colors = require('../colors.json')

module.exports = [
    {
        name: 'variable.language.rust',
        scope: 'variable.language.rust',
        settings: {
            foreground: colors['purple']
        }
    },
    {
        name: "storage.type.core.rust",
        scope: "storage.type.core.rust",
        settings: {
            foreground: colors["orange"]
        }
    },
    {
        name: "keyword.operator.sigil.rust",
        scope: "keyword.operator.sigil.rust",
        settings: {
            foreground: colors["purple"]
        }
    },
    {
        name: "keyword.operator.misc.rust",
        scope: "keyword.operator.misc.rust",
        settings: {
            foreground: colors["dark-green"]
        }
    },
    {
        name: 'support.function.std.rust',
        scope: 'support.function.std.rust',
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: 'entity.name.lifetime.rust',
        scope: 'entity.name.lifetime.rust',
        settings: {
            foreground: colors['yellow']
        }
    }
]
