import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './Product.css';

const Product = ({handleAddToCart,product}) => {
    // const {handleAddToCart} = props;
    const {name,img, salary, gender, phone}= product;
    // console.log(props);
    return (
        <div className='product'>
            <img className='image' src={img} alt=""></img>
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>salary: ${salary}</p>
                <p>gender: {gender}</p>
                <p>phone: {phone}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p className='btn-name'>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;