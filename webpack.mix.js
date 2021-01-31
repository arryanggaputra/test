const mix = require('laravel-mix')
require('laravel-mix-tailwind')

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
  .ts('resources/js/app.tsx', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [require('tailwindcss')])
  .webpackConfig({
    output: {
      chunkFilename: 'js/[name].js?id=[chunkhash]',
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
      alias: {
        components: path.resolve(__dirname, 'resources/js/src/components'),
        lib: path.resolve(__dirname, 'resources/js/src/lib'),
      },
      extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    },
  })
