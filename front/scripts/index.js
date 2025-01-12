const addToHTML = require("./renderCards");
const axios = require("axios");

//const getDataMovie = () => {
  //  $.get("https://students-api.up.railway.app/movies", (data, status) => {
    //addToHTML(data);
   // });
//};

// THEN Y CATCH
//axios
//.get("https://students-api.up.railway.app/movies")
//.then((res) => {
 //   addToHTML(res.data);
//})
//.catch((err) => {
 //   console.error(err);
//})
//.finally(() =>{
// console.log("Finalizo la llamada a la api");
//});

//ASYNC AWAIT
const getDataMovie = async () => {
    try{
    const res = await axios.get("https://students-api.up.railway.app/movies");
    addToHTML(res.data);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log("Finalizo la llamada a la api");
    } 
};


getDataMovie();

//fetch("https://students-api.up.railway.app/movies").then((res) => {
  //  res.json().then((data) => {
    //    console.log(data);
    //});
//});

const getDataWithFetch = async () => {
    const res = await fetch("https://students-api.up.railway.app/movies");
    const data = await res.json();
    console.log(data);
};

getDataWithFetch();