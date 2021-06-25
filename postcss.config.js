/* eslint-disable no-unused-vars */
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins:[
        tailwindcss('./tailwind.js'),
        require('autoprefixer')
    ]
}