import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'

const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'lib/index.cjs',
                format: 'cjs',
            },
            {
                file: 'lib/index.js',
                format: 'esm',
            }
        ],
        plugins: [typescript()],
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'lib/index.d.ts',
            format: 'esm',
        },
        plugins: [dts()],
    }
]

export default config