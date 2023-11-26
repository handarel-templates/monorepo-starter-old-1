/** @type {import('prettier').Config} */
const config = {
  overrides: [
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      options: {
        arrowParens: 'always',
        bracketSameLine: true,
        bracketSpacing: true,
        embeddedLanguageFormatting: 'off',
        endOfLine: 'auto',
        htmlWhitespaceSensitivity: 'strict',
        jsxSingleQuote: true,
        printWidth: 100,
        proseWrap: 'preserve',
        quoteProps: 'consistent',
        semi: true,
        singleAttributePerLine: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        vueIndentScriptAndStyle: true,
      },
    },
    {
      files: ['*.js', '*.jsx'],
      options: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      options: {},
    },
    {
      files: ['*.js', '*.ts'],
      options: {},
    },
    {
      files: ['*.jsx', '*.tsx'],
      options: {},
    },
    {
      files: ['*.css', '*.scss'],
      options: {},
    },
    {
      files: ['*.html'],
      options: {
        plugins: ['prettier-plugin-organize-attributes', 'prettier-plugin-tailwindcss'],
        attributeGroups: [
          '#',
          '^\\*',
          '^\\(',
          '^\\[',
          '^app',
          '^(id|name)$',
          '^class$',
          '$DEFAULT',
          '^aria-',
          '^data-',
        ],
        attributeSort: 'ASC',
      },
    },
  ],
};

module.exports = config;
