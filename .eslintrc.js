/** @type {import('eslint').Linter.Config} */
const config = {
  root: true,
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', '**/*.cjs', '**/*.mjs'],
      env: {
        node: true,
        es2022: true,
      },
      plugins: ['@nx'],
      rules: {
        '@nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
              },
            ],
          },
        ],
      },
    },
    {
      files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
      extends: ['plugin:@nx/javascript'],
      rules: {},
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@nx/typescript'],
      rules: {},
    },
    {
      files: ['**/*.js', '**/*.ts'],
      rules: {},
    },
    {
      files: ['**/*.jsx', '**/*.tsx'],
      rules: {},
    },
    {
      files: ['**/*.cjs'],
      rules: {},
    },
    {
      files: ['**/*.mjs'],
      rules: {},
    },
    {
      files: [
        '**/*.spec.js',
        '**/*.spec.ts',
        '**/*.test.js',
        '**/*.test.ts',
        '**/*.spec.jsx',
        '**/*.spec.tsx',
        '**/*.test.jsx',
        '**/*.test.tsx',
        '**/*.spec.cjs',
        '**/*.test.cjs',
        '**/*.spec.mjs',
        '**/*.test.mjs',
      ],
      env: {
        jest: true,
      },
      rules: {},
    },
    {
      files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', '**/*.cjs', '**/*.mjs'],
      extends: ['plugin:prettier/recommended'],
      rules: {},
    },
  ],
};

module.exports = config;
