import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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
    useEffect(() => {
        const storeCard = getShoppingCart();
        let saveCard = [];
        for( const id in storeCard){
            const addedProduct = products.find(product => product.id === id)
            if(addedProduct){
                const quantity =storeCard[id];
                addedProduct.quantity=quantity;
                saveCard.push(addedProduct);


            }
            console.log("addedproduct",addedProduct);
        }
        setcard(saveCard);
    },[products])
    const hendaletoCard = (products) =>{
        // const newCard = [...card,products];
        let newCard = [];
        const exists = card.find(pd => pd.id === products.id);
        if(!exists){
            products.quantity=1;
            newCard= [...card,products]
        }
        else{
            exists.quantity=exists.quantity + 1;
            const remaining = card.filter(pd => pd.id !== products.id);
            newCard = [...remaining, exists]
        }
        setcard(newCard);
        addToDb(products.id)
    };

    return (
        <div className='shop-container'>
            <div className='grid grid-cols-1  md:grid-cols-3  mx-7 my-7 gap-11'>
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