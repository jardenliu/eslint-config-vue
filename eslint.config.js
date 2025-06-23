import std from '@jardenliu/eslint-config-vue3'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([...std, globalIgnores(['**/lib/'])])
