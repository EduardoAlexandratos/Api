const fetch = require("node-fetch");


async function getTime(){
    const response= await fetch(api_url); //se pide info de la API 
    const data = await response.json(); //la transformo en json
    console.log("Location: "+data.timezone) //quiero mostrar en consola el timezone
    console.log("Date and time: "+data.datetime) //muestro el tiempo actual en la consola
};

    const api_url ='http://worldtimeapi.org/api/timezone/America/Argentina/Buenos_Aires'; //url api

getTime();
