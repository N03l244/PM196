/*b.
Con el siguiente arreglo de productos, realiza lo siguiente:
1. Filtra los productos cuyo precio sea mayor a 1000.
2. Usa .map() para convertir el resultado en un nuevo arreglo con solo los nombres de
esos productos.*/

const productos = [
    { nombre: "Laptop", precio: 15000 },
    { nombre: "Mouse", precio: 3000 },
    { nombre: "Teclado", precio: 950 },
    { nombre: "Monitor", precio: 5000 },
];
// 1. Filtrar productos con precio mayor a 1000
const productosFiltrados = productos.filter(producto => producto.precio > 1000);
// 2. Obtener solo los nombres de los productos filtrados
const nombresProductosFiltrados = productosFiltrados.map(producto => producto.nombre);
console.log(nombresProductosFiltrados); 
