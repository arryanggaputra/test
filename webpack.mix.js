const mix = require('laravel-mix')
require('laravel-mix-tailwind')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .js('resources/js/app.js', 'public/js')
  .react()
  .babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
  })
  .alias({
    '@components': path.resolve('resources/js/src/components'),
    '@lib': path.resolve('resources/js/src/lib'),
  })
  .postCss('resources/css/app.css', 'public/css', [require('tailwindcss')])
  .webpackConfig({
    output: {
      chunkFilename: 'js/[name].js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    },
  })
  .version()
  .sourceMaps()
