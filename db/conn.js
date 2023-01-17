const { Sequelize, Model } = require('sequelize');

const sequelize = new Sequelize('thoughts', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conexão com BD realizada com Sucesso!')
}catch(err){
    console.log(`Não foi possível conectar ao BD: ${err}`)
}

module.exports = sequelize