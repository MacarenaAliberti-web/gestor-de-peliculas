module.exports = {
    entry: {
        index: "./scripts/index.js",
        movieForm: "./scripts/movieForm.js",
    },
    output: {
        filename:"[name].bundle.js",
        path: __dirname + "/public",
    },
};