module.exports = {
    mode: "development",
    context: __dirname,
    entry: "./src/App.js",
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js'
    },
watch: true,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                 use: {
                  loader: "babel-loader",
                }
            }
        ]
    }
};