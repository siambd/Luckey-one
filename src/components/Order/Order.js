import React from 'react';
import DisplayOrder from '../DisplayOrder/DisplayOrder';
import './Order.css';

const Order = (props) => {
    const {cart, setCart} =props;
    
    const randomProduct = cart[Math.floor(Math.random() * cart.length)];

    const chooseOne = ()=>{
        setCart([randomProduct])
    }
    const chooseAgain=()=>{
        setCart([]);
    }
    return (
        <div>
            <h2 className='title'>Order Summary</h2>
                <p className='leftMargin'>Selected Items:{cart.length}</p>
                {
                   cart.map(order =><DisplayOrder
                    order={order}
    
                    ></DisplayOrder>) 
                }

                <button onClick={chooseOne} className='Choose-one leftMargin'>Choose one</button>
                <button onClick={chooseAgain} className='choose-again leftMargin'>Choose Again</button>
                
        </div>
    );
};

export default Order;