import EslintTs from 'typescript-eslint';

type InferredConfigType = ReturnType<typeof EslintTs.config>;
declare const eslintConfig: InferredConfigType;

declare const legacyConfig: InferredConfigType;

export { eslintConfig as default, legacyConfig };
export type { InferredConfigType };
