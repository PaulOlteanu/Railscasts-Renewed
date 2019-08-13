const colors = require('./colors.json')

module.exports = {
  tokenColors: [
    {
      name: 'generic string',
      scope: 'string',
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'generic comment',
      scope: 'comment',
      settings: {
        foreground: colors['comment']
      }
    },
    {
      name: "String interpolation",
      scope: [
        "constant.character.escaped",
        "constant.character.escape",
        "string source",
        "string source.ruby",
      ],
      settings: {
        foreground: colors["dark-green"]
      }
    },
    {
      name: 'haskell variable generic-type',
      scope: 'variable.other.generic-type.haskell',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'haskell storage type',
      scope: 'storage.type.haskell',
      settings: {
        foreground: colors['yellow']
      }
    },
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
      name: 'variable.parameter.function.language.special.self.python',
      scope: 'variable.parameter.function.language.special.self.python',
      settings: {
        foreground: colors['yellow']
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
      name: "keyword.operator.misc.rust",
      scope: "keyword.operator.misc.rust",
      settings: {
        foreground: colors["dark-green"]
      }
    },
    {
      name: "keyword.operator.sigil.rust",
      scope: "keyword.operator.sigil.rust",
      settings: {
        foreground: colors["purple"]
      }
    },
    // {
    //   name: 'storage.modifier.lifetime.rust',
    //   scope: 'storage.modifier.lifetime.rust',
    //   settings: {
    //     foreground: colors['light-white']
    //   }
    // },
    {
      name: 'storage.modifier',
      scope: 'storage.modifier',
      settings: {
        foreground: colors['orange']
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
    },
    {
      name: 'variable.language.rust',
      scope: 'variable.language.rust',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'elixir module variable',
      scope: 'variable.other.readwrite.module.elixir',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: "support.constant.core",
      scope: "support.constant.core",
      settings: {
        foreground: colors["light-green"]
      }
    },
    {
      name: 'support.constant.edge',
      scope: 'support.constant.edge',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'regexp constant character-class',
      scope: 'constant.other.character-class.regexp',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'regexp operator.quantifier',
      scope: 'keyword.operator.quantifier.regexp',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'punctuation.definition',
      scope:
        'punctuation.definition.string.begin,punctuation.definition.string.end',
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'Text',
      scope: 'variable.parameter.function',
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'markup diff',
      scope: 'markup.changed.diff',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'diff',
      scope: 'meta.diff.header.from-file,punctuation.definition.from-file.diff',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'inserted.diff',
      scope: 'markup.inserted.diff',
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'deleted.diff',
      scope: 'markup.deleted.diff',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'c++ function',
      scope: 'meta.function.c,meta.function.cpp',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'c++ block',
      scope:
        'punctuation.section.block.begin.bracket.curly.cpp,punctuation.section.block.end.bracket.curly.cpp,punctuation.terminator.statement.c,punctuation.section.block.begin.bracket.curly.c,punctuation.section.block.end.bracket.curly.c,punctuation.section.parens.begin.bracket.round.c,punctuation.section.parens.end.bracket.round.c,punctuation.section.parameters.begin.bracket.round.c,punctuation.section.parameters.end.bracket.round.c',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'js/ts punctuation separator key-value',
      scope: 'punctuation.separator.key-value',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'js/ts import keyword',
      scope: 'keyword.operator.expression.import',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'math js/ts',
      scope: 'support.constant.math',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'math property js/ts',
      scope: 'support.constant.property.math',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'js/ts variable.other.constant',
      scope: 'variable.other.constant',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'java type',
      scope: ['storage.type.annotation.java','storage.type.object.array.java'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'java source',
      scope: 'source.java',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'java modifier.import',
      scope:
        'punctuation.section.block.begin.java,punctuation.section.block.end.java,punctuation.definition.method-parameters.begin.java,punctuation.definition.method-parameters.end.java,meta.method.identifier.java,punctuation.section.method.begin.java,punctuation.section.method.end.java,punctuation.terminator.java,punctuation.section.class.begin.java,punctuation.section.class.end.java,punctuation.section.inner-class.begin.java,punctuation.section.inner-class.end.java,meta.method-call.java,punctuation.section.class.begin.bracket.curly.java,punctuation.section.class.end.bracket.curly.java,punctuation.section.method.begin.bracket.curly.java,punctuation.section.method.end.bracket.curly.java,punctuation.separator.period.java,punctuation.bracket.angle.java,punctuation.definition.annotation.java,meta.method.body.java',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'java modifier.import',
      scope: 'meta.method.java',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'java modifier.import',
      scope: 'storage.modifier.import.java,storage.type.java,storage.type.generic.java',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: "java instanceof",
      scope: "keyword.operator.instanceof.java",
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'java variable.name',
      scope: 'meta.definition.variable.name.java',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'operator logical',
      scope: 'keyword.operator.logical',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'operator bitwise',
      scope: 'keyword.operator.bitwise',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'operator channel',
      scope: 'keyword.operator.channel',
      settings: {
        foreground: colors['blue']
      }
    },
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
      name: 'css property-name',
      scope: 'support.type.vendored.property-name.css',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'js/ts template-expression',
      scope:
        'punctuation.definition.template-expression.begin,punctuation.definition.template-expression.end',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'js/ts module',
      scope:
        'support.module.node,support.type.object.module,support.module.node',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'entity.name.type.module',
      scope: 'entity.name.type.module',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'js variable readwrite',
      scope:
        'variable.other.readwrite,meta.object-literal.key,support.variable.property,support.variable.object.process,support.variable.object.node',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'js/ts json',
      scope: 'support.constant.json',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'js/ts Keyword',
      scope: [
        'keyword.operator.expression.instanceof',
        'keyword.operator.new',
        'keyword.operator.ternary',
        'keyword.operator.optional',
        'keyword.operator.expression.keyof'
      ],
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'js/ts console',
      scope: 'support.type.object.console',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'js/ts support.variable.property.process',
      scope: 'support.variable.property.process',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'js console function',
      scope: 'entity.name.function,support.function.console',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'operator',
      scope: 'keyword.operator',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'operator',
      scope: 'keyword.operator.delete',
      settings: {
        foreground: colors['purple']
      }
    },

    {
      name: 'js dom',
      scope: 'support.type.object.dom',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'js dom variable',
      scope: 'support.variable.dom,support.variable.property.dom',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'keyword.operator',
      scope:
        'keyword.operator.arithmetic,keyword.operator.comparison,keyword.operator.decrement,keyword.operator.increment',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'C operator assignment',
      scope:
        'keyword.operator.assignment.c,keyword.operator.comparison.c,keyword.operator.c,keyword.operator.increment.c,keyword.operator.decrement.c,keyword.operator.bitwise.shift.c,keyword.operator.assignment.cpp,keyword.operator.comparison.cpp,keyword.operator.cpp,keyword.operator.increment.cpp,keyword.operator.decrement.cpp,keyword.operator.bitwise.shift.cpp',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Punctuation',
      scope: 'punctuation.separator.delimiter',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'Other punctuation .c',
      scope: 'punctuation.separator.c,punctuation.separator.cpp',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'C type posix-reserved',
      scope: 'support.type.posix-reserved.c,support.type.posix-reserved.cpp',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'keyword.operator.sizeof.c',
      scope: 'keyword.operator.sizeof.c,keyword.operator.sizeof.cpp',
      settings: {
        foreground: colors['purple']
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
      name: 'Delimiters',
      scope: 'none',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'Operators',
      scope: 'keyword.operator',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'Compound Assignment Operators',
      scope: 'keyword.operator.assignment.compound',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Keywords',
      scope: 'keyword',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Variables',
      scope: 'variable',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Language variables',
      scope: 'variable.language',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Java Variables',
      scope: 'token.variable.parameter.java',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'Java Imports',
      scope: 'import.storage.java',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Packages',
      scope: 'token.package.keyword',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Packages',
      scope: 'token.package',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'Functions',
      scope: [
        'entity.name.function',
        'meta.require',
        'support.function.any-method',
        'variable.function'
      ],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Classes',
      scope: 'entity.name.type.namespace',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Classes',
      scope: 'support.class, entity.name.type.class',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Class name',
      scope: 'entity.name.class.identifier.namespace.type',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Class name',
      scope: [
        'entity.name.class',
        'variable.other.class.js',
        'variable.other.class.ts'
      ],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Class name php',
      scope: 'variable.other.class.php',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Type Name',
      scope: 'entity.name.type',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Keyword Control',
      scope: 'keyword.control',
      settings: {
        foreground: colors['orange']
      }
    },
    {
      name: 'Control Elements',
      scope: 'control.elements, keyword.operator.less',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Methods',
      scope: 'keyword.other.special-method',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Storage',
      scope: 'storage',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Storage JS TS',
      scope: 'token.storage',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name:
        'Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void',
      scope:
        'keyword.operator.expression.delete,keyword.operator.expression.in,keyword.operator.expression.of,keyword.operator.expression.instanceof,keyword.operator.new,keyword.operator.expression.typeof,keyword.operator.expression.void',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Java Storage',
      scope: 'token.storage.type.java',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Support',
      scope: 'support.function',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Support type',
      scope: 'support.type.property-name',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'Support type',
      scope: 'support.constant.property-value',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'Support type',
      scope: 'support.constant.font-name',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Meta tag',
      scope: 'meta.tag',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
        name: 'Inherited Class',
        scope: 'entity.other.inherited-class',
        settings: {
          foreground: colors['yellow']
        }
      },
  
    {
      name: 'Constant other symbol',
      scope: 'constant.other.symbol',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Integers',
      scope: 'constant.numeric',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Floats',
      scope: 'none',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Boolean',
      scope: 'none',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Constants',
      scope: 'constant',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Constants',
      scope: 'punctuation.definition.constant',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Tags',
      scope: 'entity.name.tag',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Attributes',
      scope: 'entity.other.attribute-name',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Attribute IDs',
      scope: 'entity.other.attribute-name.id',
      settings: {
        foreground: colors['blue'],
        fontStyle: 'normal'
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
      name: 'Selector',
      scope: 'meta.selector',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Values',
      scope: 'none',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Headings',
      scope: 'markup.heading',
      settings: {
        fontStyle: 'bold',
        foreground: colors['red']
      }
    },
    {
      name: 'Headings',
      scope:
        'markup.heading punctuation.definition.heading, entity.name.section',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: "Other Default",
      scope: 'keyword.other',
      settings: {
        foreground: colors['orange']
      }
    },
    {
      name: 'Units',
      scope: 'keyword.other.unit',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Bold',
      scope: 'markup.bold,todo.bold',
      settings: {
        fontStyle: 'bold',
        foreground: colors['yellow']
      }
    },
    {
      name: 'Bold',
      scope: 'punctuation.definition.bold',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Italic',
      scope: 'markup.italic, punctuation.definition.italic,todo.emphasis',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Italic',
      scope: 'emphasis md',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: '[VSCODE-CUSTOM] Markdown headings',
      scope: 'entity.name.section.markdown',
      settings: {
        foreground: colors['red']
      }
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
    {
      name: 'Regular Expressions',
      scope: 'string.regexp',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Escape Characters',
      scope: 'constant.character.escape',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Embedded',
      scope: 'punctuation.section.embedded, variable.interpolation',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Illegal',
      scope: 'red.illegal',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Broken',
      scope: 'red.broken',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Deprecated',
      scope: 'red.deprecated',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Unimplemented',
      scope: 'red.unimplemented',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Source Json Meta Structure Dictionary Json > String Quoted Json',
      scope: 'source.json meta.structure.dictionary.json > string.quoted.json',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > String Quoted Json > Punctuation String',
      scope:
        'source.json meta.structure.dictionary.json > string.quoted.json > punctuation.string',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > Value Json > String Quoted Json,source Json Meta Structure Array Json > Value Json > String Quoted Json,source Json Meta Structure Dictionary Json > Value Json > String Quoted Json > Punctuation,source Json Meta Structure Array Json > Value Json > String Quoted Json > Punctuation',
      scope:
        'source.json meta.structure.dictionary.json > value.json > string.quoted.json,source.json meta.structure.array.json > value.json > string.quoted.json,source.json meta.structure.dictionary.json > value.json > string.quoted.json > punctuation,source.json meta.structure.array.json > value.json > string.quoted.json > punctuation',
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name:
        'Source Json Meta Structure Dictionary Json > Constant Language Json,source Json Meta Structure Array Json > Constant Language Json',
      scope:
        'source.json meta.structure.dictionary.json > constant.language.json,source.json meta.structure.array.json > constant.language.json',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: '[VSCODE-CUSTOM] JSON Property Name',
      scope: 'support.type.property-name.json',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: '[VSCODE-CUSTOM] JSON Punctuation for Property Name',
      scope: 'support.type.property-name.json punctuation',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'laravel blade tag',
      scope:
        'text.html.laravel-blade source.php.embedded.line.html entity.name.tag.laravel-blade',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'laravel blade @',
      scope:
        'text.html.laravel-blade source.php.embedded.line.html support.constant.laravel-blade',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'use statement for other classes',
      scope:
        'support.other.namespace.use.php,support.other.namespace.use-as.php,support.other.namespace.php,entity.other.alias.php,meta.interface.php',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'error suppression',
      scope: 'keyword.operator.error-control.php',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'php instanceof',
      scope: 'keyword.operator.type.php',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'style double quoted array index normal begin',
      scope: 'punctuation.section.array.begin.php',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'style double quoted array index normal end',
      scope: 'punctuation.section.array.end.php',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'php illegal.non-null-typehinted',
      scope: 'red.illegal.non-null-typehinted.php',
      settings: {
        foreground: colors['error']
      }
    },
    {
      name: 'php types',
      scope:
        'storage.type.php,meta.other.type.phpdoc.php,keyword.other.type.php,keyword.other.array.phpdoc.php',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'php call-function',
      scope:
        'meta.function-call.php,meta.function-call.object.php,meta.function-call.static.php',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'php function-resets',
      scope:
        'punctuation.definition.parameters.begin.bracket.round.php,punctuation.definition.parameters.end.bracket.round.php,punctuation.separator.delimiter.php,punctuation.section.scope.begin.php,punctuation.section.scope.end.php,punctuation.terminator.expression.php,punctuation.definition.arguments.begin.bracket.round.php,punctuation.definition.arguments.end.bracket.round.php,punctuation.definition.storage-type.begin.bracket.round.php,punctuation.definition.storage-type.end.bracket.round.php,punctuation.definition.array.begin.bracket.round.php,punctuation.definition.array.end.bracket.round.php,punctuation.definition.begin.bracket.round.php,punctuation.definition.end.bracket.round.php,punctuation.definition.begin.bracket.curly.php,punctuation.definition.end.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php,punctuation.definition.section.switch-block.start.bracket.curly.php,punctuation.definition.section.switch-block.begin.bracket.curly.php,punctuation.definition.section.switch-block.end.bracket.curly.php',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'support php constants',
      scope:
        'support.constant.ext.php,support.constant.std.php,support.constant.core.php,support.constant.parser-token.php',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'php goto',
      scope: 'entity.name.goto-label.php,support.other.php',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'php logical/bitwise operator',
      scope:
        'keyword.operator.logical.php,keyword.operator.bitwise.php,keyword.operator.arithmetic.php',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'php regexp operator',
      scope: 'keyword.operator.regexp.php',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'php comparison',
      scope: 'keyword.operator.comparison.php',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'php heredoc/nowdoc',
      scope: 'keyword.operator.heredoc.php,keyword.operator.nowdoc.php',
      settings: {
        foreground: colors['purple']
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
      name: 'parameter function',
      scope: 'function.parameter',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'parameter function js/ts',
      scope: 'function.parameter',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'brace function',
      scope: 'function.brace',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'parameter function ruby cs',
      scope: 'function.parameter.ruby, function.parameter.cs',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'constant.language.symbol.ruby',
      scope: 'constant.language.symbol.ruby',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'rgb-value',
      scope: 'rgb-value',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'rgb value',
      scope: 'inline-color-decoration rgb-value',
      settings: {
        foreground: colors['yellow']
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
      name: 'ts primitive/builtin types',
      scope:
        'support.type.primitive.ts,support.type.builtin.ts,support.type.primitive.tsx,support.type.builtin.tsx',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'block scope',
      scope: 'block.scope.end,block.scope.begin',
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'cs storage type',
      scope: 'storage.type.cs',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'cs local variable',
      scope: 'entity.name.variable.local.cs',
      settings: {
        foreground: colors['red']
      }
    },
    {
      scope: 'token.info-token',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      scope: 'token.warn-token',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      scope: 'token.error-token',
      settings: {
        foreground: colors['error']
      }
    },
    {
      scope: 'token.debug-token',
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'String interpolation',
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded'
      ],
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'Reset JavaScript string interpolation expression',
      scope: ['meta.template.expression'],
      settings: {
        foreground: colors['light-white']
      }
    },
    {
      name: 'Import module JS',
      scope: ['keyword.operator.module'],
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'js Flowtype',
      scope: ['support.type.type.flowtype'],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'js Flow',
      scope: ['support.type.primitive'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'js class prop',
      scope: ['meta.property.object'],
      settings: {
        foreground: colors['red']
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
      name: 'js template literals begin',
      scope: ['keyword.other.template.begin'],
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'js template literals end',
      scope: ['keyword.other.template.end'],
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'js template literals variable braces begin',
      scope: ['keyword.other.substitution.begin'],
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'js template literals variable braces end',
      scope: ['keyword.other.substitution.end'],
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'js operator.assignment',
      scope: ['keyword.operator.assignment'],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'go operator',
      scope: ['keyword.operator.assignment.go', 'keyword.operator.address.go'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Go package name',
      scope: ['entity.name.package.go'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'elm prelude',
      scope: ['support.type.prelude.elm'],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'elm constant',
      scope: ['support.constant.elm'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'template literal',
      scope: ['punctuation.quasi.element'],
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'html/pug (jade) escaped characters and entities',
      scope: ['constant.character.entity'],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name:
        'styling css pseudo-elements/classes to be able to differentiate from classes which are the same colour',
      scope: [
        'entity.other.attribute-name.pseudo-element',
        'entity.other.attribute-name.pseudo-class'
      ],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Clojure globals',
      scope: ['entity.global.clojure'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Clojure symbols',
      scope: ['meta.symbol.clojure'],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Clojure constants',
      scope: ['constant.keyword.clojure'],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'CoffeeScript Function Argument',
      scope: ['meta.arguments.coffee', 'variable.parameter.function.coffee'],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Ini Default Text',
      scope: ['source.ini'],
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'Makefile prerequisities',
      scope: ['meta.scope.prerequisites.makefile'],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Makefile text colour',
      scope: ['source.makefile'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Groovy import names',
      scope: ['storage.modifier.import.groovy'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Groovy Methods',
      scope: ['meta.method.groovy'],
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'Groovy Variables',
      scope: ['meta.definition.variable.name.groovy'],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'Groovy Inheritance',
      scope: ['meta.definition.class.inherited.classes.groovy'],
      settings: { foreground: colors['light-green'] }
    },
    {
      name: 'HLSL Semantic',
      scope: ['support.variable.semantic.hlsl'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'HLSL Types',
      scope: [
        'support.type.texture.hlsl',
        'support.type.sampler.hlsl',
        'support.type.object.hlsl',
        'support.type.object.rw.hlsl',
        'support.type.fx.hlsl',
        'support.type.object.hlsl'
      ],
      settings: {
        foreground: colors['purple']
      }
    },
    {
      name: 'SQL Variables',
      scope: ['text.variable', 'text.bracketed'],
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'types',
      scope: ['support.type.swift', 'support.type.vb.asp'],
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'heading 1, keyword',
      settings: {
        foreground: colors['yellow']
      },
      scope: ['entity.name.function.xi']
    },
    {
      name: 'heading 2, callable',
      settings: {
        foreground: colors['blue']
      },
      scope: ['entity.name.class.xi']
    },
    {
      name: 'heading 3, property',
      settings: {
        foreground: colors['red']
      },
      scope: ['constant.character.character-class.regexp.xi']
    },
    {
      name: 'heading 4, type, class, interface',
      settings: {
        foreground: colors['purple']
      },
      scope: ['constant.regexp.xi']
    },
    {
      name: 'heading 5, enums, preprocessor, constant, decorator',
      settings: {
        foreground: colors['blue']
      },
      scope: ['keyword.control.xi']
    },
    {
      name: 'heading 6, number',
      settings: {
        foreground: colors['light-white']
      },
      scope: ['red.xi']
    },
    {
      name: 'string',
      settings: {
        foreground: colors['light-green']
      },
      scope: ['beginning.punctuation.definition.quote.markdown.xi']
    },
    {
      name: 'link',
      settings: {
        foreground: colors['blue']
      },
      scope: ['constant.character.xi']
    },
    {
      name: 'accent',
      settings: {
        foreground: colors['blue']
      },
      scope: ['accent.xi']
    },
    {
      name: 'wikiword',
      settings: {
        foreground: colors['yellow']
      },
      scope: ['wikiword.xi']
    },
    {
      name: "language operators like '+', '-' etc",
      settings: {
        foreground: colors['red']
      },
      scope: ['constant.other.color.rgb-value.xi']
    },
    {
      name: 'elements to dim',
      settings: {
        foreground: colors['dark']
      },
      scope: ['punctuation.definition.tag.xi']
    },
    {
      name: 'C++/C#',
      settings: {
        foreground: colors['yellow']
      },
      scope: ['entity.name.label.cs','entity.name.scope-resolution.function.call','entity.name.scope-resolution.function.definition']
    },
    {
      name: 'Markdown underscore-style headers',
      settings: {
        foreground: colors['red']
      },
      scope: ['entity.name.label.cs','markup.heading.setext.1.markdown','markup.heading.setext.2.markdown']
    }
  ]
}
