"use strict"; 

module.exports = {
    entry: {
        //"classwork/1/build/bundle": "./classwork/1/jsx/main.jsx"
        //"classwork/2/build/bundle": "./classwork/2/jsx/main.jsx"
        //"classwork/3/build/bundle": "./classwork/3/jsx/main.jsx"
        //"homework/1/build/bundle": "./homework/1/jsx/main.jsx"
        "homework/2/build/bundle": "./homework/2/jsx/main.jsx"
        //"homework/3/build/bundle": "./homework/3/jsx/main.jsx"
    } ,
           
    output: {
        filename: '[name].js'
    }, 

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader", 
                exclude: /node_modules/, 
                query: {
                    
                    presets: ["es2015","react"]

                }
            }
        ]
    }
};