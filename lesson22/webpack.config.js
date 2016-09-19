"use strict";

module.exports = {
    entry: {
        "classwork/1/build/bundle": "./classwork/1/src/main.js",
        "classwork/2/build/bundle": "./classwork/2/src/main.js",
        "classwork/3/build/bundle": "./classwork/3/src/main.jsx",
        "homework/1/build/bundle": "./homework/1/src/main.js",
        "homework/2/build/bundle": "./homework/2/src/main.js",
        "homework/3/build/bundle": "./homework/3/src/main.jsx"

    } ,
           
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                query:
                {
                       presets: ['es2015','react']
                }
            }
        ]
    }
};