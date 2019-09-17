const options = {
    base: {
        demand: true,
        alias: 'b'

    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', options)
    .command('crear', 'Genera un archivo tabla de multiplicar', options)
    .help() //Imprime el texto de ayuda del comenado "listar"
    .argv;

module.exports = {
    argv
}