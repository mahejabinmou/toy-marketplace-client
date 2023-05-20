import React from 'react';

const Shop = ({ toy }) => {
    console.log(toy);
    const { img, toy_name,
        price, Rating, } = toy;
    return (
        
        <div className="card card-compact  w-80 h-[450px] m-12 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>{price}</p>
                <p>{Rating}</p>
                <div >
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;