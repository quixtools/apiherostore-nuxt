// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    files: ['**/*.{js,mjs,cjs,vue,ts}'],
    rules: {
      'quote-props': ['error', 'consistent'],
      'semi': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-return-assign': ['error', 'always'],
      'vue/comment-directive': 0,
      'vue/max-attributes-per-line': ['error',
        {
          'singleline': { max: 3 },
          'multiline': { max: 1 },
        },
      ],
      'vue/html-self-closing': ['error',
        {
          'html': {
            'void': 'any',
            'normal': 'any',
            'component': 'any',
          },
          'svg': 'any',
          'math': 'any',
        },
      ],
      'vue/multi-word-component-names': ['error', {
        'ignores': ['index', 'default', '[id]', 'empty', 'user', 'Item', 'Content', 'Header'],
      }],
      'vue/no-multiple-template-root': 0,
      'no-undef': 0,
    },
  },
);

