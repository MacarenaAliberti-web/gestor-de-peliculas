const dbCon = require("./src/config/dbCon");
const { db } = require("./src/models/Movie");
const app = require("./src/server");

dbCon().then((_res) => {
app.listen(3000, () => {
    console.info("El servidor esta corriendo en http://Localhost:3000");
});  
});   