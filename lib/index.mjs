import _config from '@jardenliu/eslint-config';
import EslintTs from 'typescript-eslint';
import EslintPluginVue from 'eslint-plugin-vue';
import VuePaser from 'vue-eslint-parser';

const baseConfig = [
    ..._config,
    {
        files: ["**/*.{ts,tsx,js,jsx,mjs,cjs,vue}"],
        ignores: ["node_models"],
        languageOptions: {
            parser: VuePaser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            }
        }
    }, {
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
        }
    }
];
const eslintConfig = EslintTs.config(...baseConfig, ...EslintPluginVue.configs['flat/recommended']);
const legacyConfig = EslintTs.config(..._config, ...EslintPluginVue.configs['flat/vue2-recommended']);

export { eslintConfig as default, legacyConfig };
