//Detalle del produtcto con nombre y precio
import React from 'react';
import {useContext} from 'react';
import '@styles/ProductItem.scss';
import addCarImage from '@icons/bt_add_to_cart.svg';
import AppContext from '../context/AppContext.js';

const ProductItem = ({product}) => { 
    //Estado para manejar el carrito de compras
    //const [car, setCar] = React.useState([]);
    const {addToCart} = useContext(AppContext);
    //Función que decalra la acción al dar click en el carrito
    const handleClick = item => {
        addToCart(item);
    }
    return(
        <div className="ProductItem">
            <img src={product.images[0]} alt={product.title} />
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick(product)}>
                    <img src={addCarImage} alt="" />
                </figure>
            </div>
        </div>

    )
 }

 export default ProductItem;