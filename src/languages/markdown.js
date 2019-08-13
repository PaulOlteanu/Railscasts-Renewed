const colors = require('../colors.json')

module.exports = [
    {
        name: '[VSCODE-CUSTOM] Markdown headings',
        scope: 'entity.name.section.markdown',
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: 'Markdown underscore-style headers',
        settings: {
            foreground: colors['red']
        },
        scope: ['entity.name.label.cs', 'markup.heading.setext.1.markdown', 'markup.heading.setext.2.markdown']
    },
    {
        name: '[VSCODE-CUSTOM] Markdown heading Punctuation Definition',
        scope: 'punctuation.definition.heading.markdown',
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: 'punctuation.definition.list.begin.markdown',
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown heading setext',
        scope: 'markup.heading.setext',
        settings: {
            foreground: colors['light-white']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Bold',
        scope: 'punctuation.definition.bold.markdown',
        settings: {
            foreground: colors['yellow']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw',
        scope: 'markup.inline.raw.markdown',
        settings: {
            foreground: colors['light-green']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown Inline Raw',
        scope: 'markup.inline.raw.string.markdown',
        settings: {
            foreground: colors['light-green']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown List Punctuation Definition',
        scope: 'punctuation.definition.list.markdown',
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition String',
        scope: [
            'punctuation.definition.string.begin.markdown',
            'punctuation.definition.string.end.markdown',
            'punctuation.definition.metadata.markdown'
        ],
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: 'beginning.punctuation.definition.list.markdown',
        scope: ['beginning.punctuation.definition.list.markdown'],
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown Punctuation Definition Link',
        scope: 'punctuation.definition.metadata.markdown',
        settings: {
            foreground: colors['red']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown Underline Link/Image',
        scope:
            'markup.underline.link.markdown,markup.underline.link.image.markdown',
        settings: {
            foreground: colors['purple']
        }
    },
    {
        name: '[VSCODE-CUSTOM] Markdown Link Title/Description',
        scope:
            'string.other.link.title.markdown,string.other.link.description.markdown',
        settings: {
            foreground: colors['blue']
        }
    },
    {
        name: 'markup.bold.markdown',
        scope: 'markup.bold.markdown',
        settings: {
            fontStyle: 'bold'
        }
    },
]
