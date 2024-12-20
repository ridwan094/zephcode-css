import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from '@rollup-plugin-postcss';

export default {
    input: 'src/js/index.js',
    output: [
        {
            file: 'dist/zephcode.bundle.js',
            format: 'umd',
            name: 'ZephCode',
            sourcemap: true
        },
        {
            file: 'dist/zephcode.esm.js',
            format: 'es',
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**'
        }),
        postcss({
            extract: 'dist/zephcode.css',
            minimize: true,
            sourcemap: true
        }),
        terser()
    ]
};