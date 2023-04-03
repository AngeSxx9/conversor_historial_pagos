const fs = require('fs');
const table = require('cli-table3');

const contenidoArchivo = fs.readFileSync('archivo.txt', 'utf-8');
const lineas = contenidoArchivo.split('\n');
const datosTabla = [];

for (let i = 0; i < lineas.length; i++) {
  const fila = lineas[i].trim().split(/\s+/);
  datosTabla.push(fila);
}

const tabla = new table();

tabla.push(['Número', 'Tipo', 'Doc', 'Fecha', 'Original', 'Saldo', 'Fecha', 'Número', 'Doc', 'Importe', 'Ajustado', 'Aplicado', 'Importe', 'Div']);

for (let i = 5; i < datosTabla.length; i++) {
  tabla.push(datosTabla[i]);
}

console.log(tabla.toString());

// const fs = require('fs');

// // Lee el archivo txt como una cadena
// const data = fs.readFileSync('archivo.txt', 'utf-8');

// // Separa las líneas del archivo en un array
// const lines = data.split('\n');

// // Obtiene los nombres de las columnas
// const headers = lines[3].trim().split(/\s+/);

// // Inicializa un array vacío para los objetos JSON
// const json = [];

// // Itera sobre las líneas del archivo desde la fila 5
// for (let i = 5; i < lines.length; i++) {
//   // Separa los valores de cada fila
//   const values = lines[i].trim().split(/\s+/);
  
//   // Si no hay valores, continúa con la siguiente fila
//   if (values.length === 0) {
//     continue;
//   }
  
//   // Crea un objeto JSON para cada fila
//   const row = {};
  
//   // Itera sobre las columnas y agrega los valores al objeto JSON
//   for (let j = 0; j < headers.length; j++) {
//     row[headers[j]] = values[j];
//   }
  
//   // Agrega el objeto JSON al array de resultados
//   json.push(row);
// }

// // Convierte el array de objetos JSON a una cadena JSON formateada
// const jsonString = JSON.stringify(json, null, 2);

// // Guarda la cadena JSON en un archivo
// fs.writeFileSync('archivo.json', jsonString);

// console.log('Archivo JSON guardado correctamente');

