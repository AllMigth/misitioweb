//CREAR PAGINAS CON CODIGO USANDO ARCHIVOS JSON COMO DATOS PARA GENERARLAS
const path = require('path');
exports.createPages = async({graphql, actions}) =>{
    actions.createPage({
        path: 'dummy',
        component: path.resolve('./src/components/template.js')
    })
}