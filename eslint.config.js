import { defineConfig, globalIgnores } from 'eslint/config'

import std from './lib/index.js'

export default defineConfig([...std, globalIgnores(['**/lib/'])])
