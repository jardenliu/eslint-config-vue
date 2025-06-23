
# jardenliu/eslint-config-vue

该配置支持 ESLint 9 版本，以下是适配此版本的安装和使用方法。
Personal preferences for eslint configuration.

## Installation

```bash
$ pnpm install @jardenliu/eslint-config # 推荐使用 pnpm 安装
```

## Usage

在 ESLint 9 中，推荐使用 `eslint.config.js` 作为配置文件。你可以按以下步骤使用本配置：

### 使用 `eslint.config.js` 配置文件

在项目根目录创建或修改 `eslint.config.js` 文件，添加以下内容：

```javascript
import config from '@jardenliu/eslint-config-vue'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([...config, globalIgnores(['**/dist/*'])])
```
