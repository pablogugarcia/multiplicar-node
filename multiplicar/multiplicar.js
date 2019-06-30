const fs = require('fs');
const colors = require('colors');

let operacion = (base, limite) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} es = ${i * base}\n`;
    }
    return data;
}

let listar = (base, limite = 10) => {
    console.log("===================".green);
    console.log(`==== En base ${base}=====`.green);
    console.log("===================".green);
    console.log(operacion(base, limite));
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${limite} no es un numero`);
            return;
        }



        let data = operacion(base, limite);


        fs.writeFile(`tablas/table-${base}`, data, (err) => {
            if (err) reject(err);
            resolve(`table-${base}.txt`.green);
        });

    })



}


module.exports = { crearArchivo, listar };