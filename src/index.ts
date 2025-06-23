import _config from '@jardenliu/eslint-config'
import EslintPluginVue from 'eslint-plugin-vue'
import EslintTs, { InfiniteDepthConfigWithExtends } from 'typescript-eslint'
import VuePaser from 'vue-eslint-parser'

const baseConfig : InfiniteDepthConfigWithExtends[] = [
    ..._config,
    {
        files: ['**/*.{ts,tsx,js,jsx,mjs,cjs,vue}'],
        ignores: ['node_models'],
        languageOptions: {
            parser: VuePaser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
            },
        },
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
        },
    }
]

// 添加类型注释以解决推断类型不可移植的问题，需根据实际情况替换 `InferredConfigType` 为正确类型
export type InferredConfigType = ReturnType<typeof EslintTs.config>;
const eslintConfig: InferredConfigType = EslintTs.config(...baseConfig, ...EslintPluginVue.configs['flat/recommended'])
export default eslintConfig

export const legacyConfig : InferredConfigType = EslintTs.config(..._config, ...EslintPluginVue.configs['flat/vue2-recommended'])
