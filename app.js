const { options } = require("yargs");
const { crearTabla } = require("./helpers/multiplicar");
const colors = require('colors');
const argv = require('./config/yargs')


console.clear()

crearTabla(argv.b, argv.listar,argv.h)
  .then((resultado) => console.log(colors.rainbow(`${resultado}, lista capo`)))
  .catch((error) => console.log(error));
