const colors = require('./colors.json')

module.exports = {
  tokenColors: [
    {
      name: 'string',
      scope: 'string',
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'comment',
      scope: 'comment',
      settings: {
        foreground: colors['comment']
      }
    },
    {
      name: 'storage.modifier',
      scope: 'storage.modifier',
      settings: {
        foreground: colors['orange']
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
      name: 'constant.other.character-class.regexp',
      scope: 'constant.other.character-class.regexp',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'keyword.operator.quantifier.regexp',
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
      name: 'variable.parameter.function',
      scope: 'variable.parameter.function',
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'markup.changed.diff',
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
      name: 'markup.inserted.diff',
      scope: 'markup.inserted.diff',
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'markup.deleted.diff',
      scope: 'markup.deleted.diff',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'variable.other.constant',
      scope: 'variable.other.constant',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'keyword.operator.logical',
      scope: 'keyword.operator.logical',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'keyword.operator.bitwise',
      scope: 'keyword.operator.bitwise',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'keyword.operator.channel',
      scope: 'keyword.operator.channel',
      settings: {
        foreground: colors['blue']
      }
    },
    {
      name: 'template-expression',
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
      name: 'json',
      scope: 'support.constant.json',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'Keyword',
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
      name: 'support.type.object.console',
      scope: 'support.type.object.console',
      settings: {
        foreground: colors['red']
      }
    },
    {
      name: 'support.variable.property.process',
      scope: 'support.variable.property.process',
      settings: {
        foreground: colors['yellow']
      }
    },
    {
      name: 'entity.name.function,support.function.console',
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
      name: 'keyword.operator.delete',
      scope: 'keyword.operator.delete',
      settings: {
        foreground: colors['purple']
      }
    },

    {
      name: 'support.type.object.dom',
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
      name: 'Punctuation',
      scope: 'punctuation.separator.delimiter',
      settings: {
        foreground: colors['light-white']
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
        'punctuation.section.embedded',
        "constant.character.escaped",
        "constant.character.escape",
        "string source",
      ],
      settings: {
        foreground: colors['dark-green']
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
      name: 'Ini Default Text',
      scope: ['source.ini'],
      settings: {
        foreground: colors['light-green']
      }
    },
    {
      name: 'C++/C#',
      settings: {
        foreground: colors['yellow']
      },
      scope: ['entity.name.label.cs','entity.name.scope-resolution.function.call','entity.name.scope-resolution.function.definition']
    }
  ]
}
