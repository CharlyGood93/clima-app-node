const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=450d582e62a616400c44c6ac97f3fba2&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}