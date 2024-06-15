import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8000/productos/${id}/`)
        .then(response => {
        console.log('Producto eliminado:', response.data);
        navigate('/');
        })
        .catch(error => {
        console.error("Hubo un error al eliminar el producto.", error);
        });
    };

return (
<div>
    <h2>Eliminar Producto</h2>
    <p>Estas seguro que deseas eliminar este producto?</p>
    <button onClick={handleDelete}>Eliminar</button>
</div>
);
};

export default DeleteProduct;