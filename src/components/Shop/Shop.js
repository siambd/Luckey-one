import React, { useEffect, useState } from 'react';
import Order from '../Order/Order';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    const [count, setCount] =useState(0);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    const handleAddToCart=(product)=>{
        console.log(product);

        const newCart =[...cart,product];
        if(cart.length>=5){
            window.alert("You can't hire more than 5 developers");
        }
        else{
            setCart(newCart);
        }
    }
    return (
        <div className='container'>
            <h1>Hire Developer</h1>
            <div className='shop-container'>
            
            <div className="product-container">
               {
                    products.map(product=><Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
               }
            </div>

            <div className="cart-container">
                <Order cart={cart} setCart={setCart}></Order>
            </div>
            
        </div>
        </div>
    );
};

export default Shop;