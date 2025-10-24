const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/i, // <- поддержка .scss и .sass
        use: [
          'style-loader', // вставляет CSS в DOM
          'css-loader', // разбирает CSS-импорты
          'sass-loader' // компилирует SCSS → CSS
        ]
      },
      {
        test: /\.css$/i, // <- отдельное правило для обычного CSS (например swiper/css)
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    static: './dist',
    port: 3000,
    open: true
  },
  mode: 'development'
};
