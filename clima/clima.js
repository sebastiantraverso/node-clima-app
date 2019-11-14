// api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=a72a4831e57155f1ac039b0ed2454262&units=metric

const axios = require('axios');


const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a72a4831e57155f1ac039b0ed2454262&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}