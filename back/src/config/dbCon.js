const mongoose = require("mongoose");

const dbCon = async () => {
 await mongoose.connect(
    "mongodb+srv://alibertimacarena:J9rVjL8FCAIQvqj8@prueba.48srz.mongodb.net/prueba?retryWrites=true&w=majority&appName=Prueba"
 ); 
 console.info("Conexión a la base de datos exitosa");
};

module.exports = dbCon;



