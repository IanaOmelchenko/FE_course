import styles from 'rollup-plugin-styles';
import image from 'rollup-plugin-img';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve'

export default {
    input: 'index.js',
    output: {
      file: './build/bundle.js',
      format: 'cjs'
    },
    plugins: [
        styles(),
        image({
            limit: 200000
          }),
        babel({ babelHelpers: 'bundled' }),
        serve({
            open: true,
            contentBase: './',
        }),
    ],
  };