import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default [
  {
    input: 'src/main.mjs',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },
      {
        file: pkg.unpkg,
        format: 'umd',
        name: 'arrosoir',
      },
    ],
    plugins: [terser()],
  },
]
