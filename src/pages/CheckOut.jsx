//Detalle del consolidade de articulos seleccionados para comprar

import React from 'react';
import '../Styles/CheckOut.scss';
import OrderItem from '../components/OrderItem';
import Menu from '../components/Menu';

const CheckOut = () => { 
    return(
    <div className="Checkout">
        <div className="Checkout-container">
            <h1 className="title">My order</h1>
            <div className="Checkout-content">
                <div className="order">
                    <p>
                        <span>03.25.21</span>
                        <span>6 articles</span>
                    </p>
                    <p>$560.00</p>
                </div>
            </div>
            {/*Implementación del item seleccionado para comprar*/}
            <OrderItem/>
        </div>
    </div>
    );
 }

 export default CheckOut;