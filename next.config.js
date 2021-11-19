const path = require('path');

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')],
    prependData: `@import "_conf.scss";`
  }
}