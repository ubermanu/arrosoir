import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

export default {
  input: 'src/main.mjs',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [terser()]
}
