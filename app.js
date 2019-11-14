// key    a72a4831e57155f1ac039b0ed2454262
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad para buscar su clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);

const getClima = async(direccion) => {


    try {
        const coord = await lugar.getLugarLatLog(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de ${coord.direc} es de ${ temp}°`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }

    // console.log(coord);
    // console.log(temp);

}


getClima(argv.direccion)
    .then(console.log)
    .catch(console.log);