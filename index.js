module.exports = {
    parserOptions: {
        sourceType: 'module',
        parser: {
            '<template>': 'espree', // vue template
            ts: '@typescript-eslint/parser',
            js: '@typescript-eslint/parser',
        },
        ecmaVersion: 2023,
        ecmaFeatures: {
            jsx: true,
        },
    },
    parser: 'vue-eslint-parser', // parse
    extends: ['@jardenliu', 'plugin:vue/recommended'],
    rules: {
        'vue/comment-directive': 'off',
        'vue/attributes-order': 'warn',
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'never',
            }
        ],
        'vue/no-unused-vars': 'off',
        'vue/html-self-closing': 'off',
        'vue/attribute-hyphenation': 'off',
        'vue/component-definition-name-casing': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'array-element-newline': 0,
        'vue/no-multiple-template-root': 0,
        'vue/no-v-for-template-key': 0,
        'vue/no-v-model-argument': 0,
    },
}