import React from 'react';
import { Link } from 'react-router-dom';

const Shop = ({ toy }) => {
    console.log(toy);
    const { img, toy_name,_id,
        price, Rating, } = toy;
    return (

        <div className="card card-compact p-2 w-80 h-[450px] m-12 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toy_name}</h2>
                <p>{price}</p>
                <p>{Rating}</p>
                <div >
                <Link to={`/singletoydetails/${_id}`}>
                     <button  className="btn btn-ghost btn-xs bg-secondary">View Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Shop;