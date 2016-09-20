/// <binding ProjectOpened='Watch - Development' /> 
"use strict";

module.exports = {
    entry: {
        "classwork/1/build/bundle": "./classwork/1/src/main.jsx",
        "classwork/2/build/bundle": "./classwork/2/src/main.jsx",
        "classwork/3/build/bundle": "./classwork/3/src/main.jsx"

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
                       presets: ['es2015', 'react']
                }
            }
        ]
    }
};