// eslint.config.mjs
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      '.astro/**',
      '.netlify/**',
      'node_modules/**',
      'dist/**',
      'public/**',
    ],
  },
  {
    rules: {
      'indent': ['error', 2, {
        SwitchCase: 1,
      }],
      'comma-dangle': ['error', {
        objects: 'always-multiline',
        arrays: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      }],
      'max-len': ['warn', {
        code: 120, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreComments: true,
      }],
      'no-param-reassign': 'off',
      'no-undef': 'off',
      'no-underscore-dangle': 'off',
      'object-curly-newline': ['error', { consistent: true, minProperties: 4 }],
      'import/extensions': 'off',
      'no-shadow': 'off',
      'jsx-quotes': ['error', 'prefer-double'],
      'quotes': [2, 'single', {
        avoidEscape: true,
        allowTemplateLiterals: true,
      }],
      'space-before-function-paren': 0,
      'class-methods-use-this': 0,
      'import/prefer-default-export': 0,
      'import/no-extraneous-dependencies': 0,
      'import/no-cycle': 0,
      'import/no-unresolved': 0,
      'no-unused-vars': 0,
      'no-multi-spaces': 'error',
      'import/export': 0,
      'func-names': 0,
      'semi': [1, 'always'],
    },
    settings: {
      tailwindcss: {
        callees: ['classnames', 'clsx', 'ctl', 'cva', 'tv', 'cn', 'dcnb', 'cnb'],
      },
    },
  },
];
