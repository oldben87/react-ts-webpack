const path = require('path')
const rules = [
    {
        include: /\.tsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
    }
]

module.exports = {
    target: 'web',
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve("../newfolder", 'build'),
        filename: 'bundle.js'
    },
    module: { rules },
    resolve: {extensions: ['.ts', '.tsx','.js']},
    devServer : {
        contentBase: './',
        port: 5000
    }
}