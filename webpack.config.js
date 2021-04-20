const path = require('path')
const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,               // USE THE babel-loader FOR THESE FILE EXTENSIONS
        include: path.resolve(__dirname, "src"),
        use: ['babel-loader']
      }
    ]
  },
  
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: '9999',
    hot: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
}

module.exports = config;