const argv = require('yargs')
            .option('b',{
                alias: 'base',
                type:'number',
                demandOption: true,
                describe:'Es la base de la tabla de multiplicar, intentalo'
            })
            .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
            .option('l',{
                alias: 'listar',
                type: 'boolean',
                default: false,
                describe:'Para listar o no la tabla con múltiplos'            
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                default: '10',
                describe: 'El número n que multiplica a la base'
            })
            .argv;

module.exports= argv;