const argv = require('./config/yargs').argv;

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

const comando = argv._[0];

switch (comando) {

    case 'listar':

        listar(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${archivo}`))
            .catch(err => console.log(err))
        break;
    default:
        console.log('No se reconoce el comando');
        break;
}