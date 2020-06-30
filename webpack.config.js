//now working in node.js

// eslint-disable-next-line no-undef
const path = require('path');

// eslint-disable-next-line no-undef
module.exports = {
    mode: 'development',
    entry: './src/scripts/app.js',
    output: {
        filename: 'app.js', //this will be the bundled code which contains the merged files
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname, 'assets', 'scripts'), //gives us access to the current path where file lives in
        publicPath: 'assets/scripts'
    }
};