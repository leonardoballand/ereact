const webpack = require('webpack')

module.exports = {
    // App entry file
    entry: {
        app: ['webpack/hot/dev-server', __dirname + '/js/app.js']
    },

    output: {
        path: __dirname + '/public/build',
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build/'
    },

    devServer: {
        contentBase: __dirname + '/public',
        publicPath: 'http://localhost:8080/build/'
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015', 'react'] } },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
    ]

}

