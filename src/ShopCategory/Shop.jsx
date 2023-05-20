import React from 'react';

const Shop = ({ toy }) => {
    const { img, toy_name,
        price, Rating, } = { toy };
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{toy_name}</h2>
                <p>{price}</p>
                <p>{Rating}</p>
                <div className="card-actions">
                    <button className="btn btn-primary">View details</button>
                </div>
            </div>
        </div>
    );
};

export default Shop;