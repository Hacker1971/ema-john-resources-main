import React from 'react';

const PRODUCT = (props) => {
    const {img,name,seller,price,ratings,i} = props.product;
    const hendaletoCard = props.hendaletoCard;
    const rendom =  "https://source.unsplash.com/user/c_v_r"

   
    
    return (
        <>
            <div className="card w-72 bg-zinc-50 shadow-xl hover:border-slate-900">
            <figure className='bg-slate-400 '><img className='w-72 h-64'  src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h2 className="card-title">Price:{price}</h2>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {ratings} start</p>
                <div className="card-actions justify-end">
                <button onClick={()=>hendaletoCard(props.product)} className="btn bg-[#FFE0B3] w-full hover:bg-[#fff] text-black">Add to Cart <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg>
</span></button>
                </div>
            </div>
            </div>
        </>
    );
};

export default PRODUCT;