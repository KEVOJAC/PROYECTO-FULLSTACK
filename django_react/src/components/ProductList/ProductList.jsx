import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [productos, setProductos] = useState([]);

useEffect(() => {
    axios.get('http://127.0.0.1:8000/productos/')
    .then(response => {
        setProductos(response.data);
    })
    .catch(error => {
        console.error("Hubo un error al obtener los productos.", error);
    });
}, []);

return (
    <div>
    <h1> Listado de Productos </h1>
    <u1>
        {productos.map(productos => {
        console.log("Key:", productos.id);
        return (
            <li key={productos.id}>
            <Link to={`/actualizar/${productos.id}`}>
                <div>
                <strong>{productos.nombre}</strong> - ${productos.precio} - Cantidad: {productos.cantidad}
                </div>
            </Link>
            </li>
           );
        })}
    </u1>
    </div>
);
};

export default ProductList;