// const fs = require('fs');

const fs = require("fs");

const crearTabla = (base = 5, listar = false, hasta = 10) => {
  return new Promise((resolve, reject) => {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} =  ${base * i}\n`;
    }

    fs.writeFileSync(`./tablasCreadas/tabla del ${base}.txt`, salida);

    if (listar){
        console.log("==============");
        console.log("TABLA DEL", base);
        console.log("==============");
        console.log(salida);
    }

    resolve(`tabla del ${base}`);
    reject(error);
  });
};

module.exports = { crearTabla };

// module.exports= {
//     crearTabla
// }
