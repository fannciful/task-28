const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Додано правило для обробки CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/, // Додаємо правило для SCSS
        use: [
          'style-loader', // Вставляє CSS в DOM
          'css-loader',   // Обробляє CSS імпорти
          'sass-loader',  // Компілює SCSS в CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
    historyApiFallback: true,
  },
};
