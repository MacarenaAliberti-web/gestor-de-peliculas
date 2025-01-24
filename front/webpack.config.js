//module.exports = {
//    entry: "./scripts/index.js", //por donde queremos que empiece a escanear el webpack
//    output: {    //Archivo de salida
//        path: __dirname + "/public",
//        filename: "bundle.js",
//    },
//};

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