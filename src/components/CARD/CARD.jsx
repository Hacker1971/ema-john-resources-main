import React from 'react';

const CARD = ({card}) => {
    console.log(card);
    let total = 0;
    let totalshipping = 0;
    for (const product of card){
        total = total + (product.price);
        totalshipping = totalshipping + (product.shipping)
    }
    let tex = Math.ceil(total *7/100) ;
    let GrandTotal = total + totalshipping + tex;


    return (
        <div className='my-6 bg-[#FF9900] p-6 h-full fixed'>
            <h4 className='text-center text-3xl font-semibold'>Order Summary</h4>
                <p>Selected Items : {card.length} </p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping Charge: ${totalshipping}</p>
                <p>Tax: ${tex}</p>
                <p>Grand Total: ${GrandTotal}</p>
        </div>
    );
};

export default CARD;