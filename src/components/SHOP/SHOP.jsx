import React, { useEffect, useState } from 'react';
import CARD from '../CARD/CARD';
import PRODUCT from '../PRODUCT/PRODUCT';
import './SHOP.css'

const SHOP = () => {
    const [products, setProducts] = useState([]);
    const [card, setcard] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const hendaletoCard = (products) =>{
        const newCard = [...card,products];
        setcard(newCard)
       


    }
    return (
        <div className='shop-container'>
            <div className='grid grid-cols-1 md:grid-cols-3  mx-7 my-7 gap-11'>
               {
                products.map(product => <PRODUCT
                key= {product.id}
                product = {product}
                hendaletoCard={hendaletoCard}
                ></PRODUCT>)
               }
            </div>
            <div>
                
                <CARD card= {card}></CARD>
            </div>
        </div>
    );
};

export default SHOP;