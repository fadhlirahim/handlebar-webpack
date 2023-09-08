const path = require('path');
const HandlebarsWebpackPlugin = require('handlebars-webpack-plugin');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HandlebarsWebpackPlugin({
      // entry: path.join(process.cwd(), 'src', 'templates', '*.hbs'),
      entry: path.join(process.cwd(), 'app', 'src', '*.hbs'),
      output: path.join(process.cwd(), 'dist', '[name].html'),
      partials: [
        path.join(process.cwd(), 'app', 'src', 'partials', '*.hbs'),
      ],
      data: {
        title: 'My Title',
        message: 'Hello World'
      },
      // data: path.join(__dirname, "app/data/project.json"),
      // helpers: {
      //   nameOfHbsHelper: Function.prototype,
      //   projectHelpers: path.join(process.cwd(), "src", "helpers", "*.helper.js")
      // },
    })
  ]
};
