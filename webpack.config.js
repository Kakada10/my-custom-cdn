const path = require('path');

module.exports = {
  mode: 'production', // Use 'development' for debugging
  entry: './src/index.js', // Entry point of your library
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-app-cdn.js', // The bundled file name
    library: 'MyKBPrasacLibrary', // The global variable name to access your library
    libraryTarget: 'umd', // Make the library compatible with different environments (CommonJS, AMD, script tag)
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // To handle CSS files
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ['file-loader'], // To handle image files
      },
    ],
  },
  externals: {
    react: 'React', // Exclude React from the bundle (assume React will be provided by the host)
    'react-dom': 'ReactDOM',
  },
};
