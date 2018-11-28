const path = require('path');

module.exports = {
	mode: 'development',  //habilita algunas fucionalidades de desarrollo
	entry: [ // define como cadena, arreglo u objeto la o las entradas a ser procesadas por webpack
		'./src/index.js',
	],
	output:{
		filename: 'bundle.js',
		path: path.resolve( __dirname, 'dist' ),
	}, 

}