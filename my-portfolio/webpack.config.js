const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3000,
    hot: true,
    disableHostCheck: true,
    writeToDisk: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new (require('webpack')).DefinePlugin({
      __webpack_relative_entrypoint_to_root__: JSON.stringify(
        path.posix.relative(path.posix.dirname('/bundle.js'), '/')
      ),
      scriptUrl: 'import.meta.url',
    }),
  ],
};