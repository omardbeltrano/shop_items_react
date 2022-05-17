//Detalle de la orden de items seleccionados con la sumatoria del total de productos y opción para ir al checkout
import React, {useContext} from 'react';
import '../styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext.js';


const MyOrder = () => { 
    const {state} = useContext(AppContext);

    const sumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }
    return(
        <aside className="MyOrder">
            <div className="title-container">
                <img src={arrow} alt="arrow"/>
                <p className="title">My order</p>
            </div>
            <div className="my-order-content">
                {state.cart.map((product, index) => (
                    <OrderItem indexValue={index} product={product} key={index} />
                ))}
            </div>
            <div className="price-container">
                <div className="order">
                    <p>
                    <span>Total</span>
                    </p>
                    <p>${sumTotal()}</p>
                </div>
                <button className="primary-button">
                    Checkout
                </button>
            </div>
        </aside>
    );
 }

 export default MyOrder;