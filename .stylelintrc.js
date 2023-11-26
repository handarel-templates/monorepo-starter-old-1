/** @type {import('stylelint').Config} */
const config = {
  overrides: [
    {
      files: ['*.css', '*.scss'],
      plugins: ['stylelint-order'],
      extends: ['stylelint-config-hudochenkov/full'],
      rules: {
        'no-empty-source': null,
        'selector-max-type': 4,
      },
    },
    {
      files: ['*.css'],
      extends: ['stylelint-config-standard'],
    },
    {
      files: ['*.scss'],
      extends: ['stylelint-config-standard-scss'],
      rules: {
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['tailwind'],
          },
        ],
      },
    },
  ],
};

module.exports = config;
