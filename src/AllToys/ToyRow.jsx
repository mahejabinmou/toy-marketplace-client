import React from 'react';
import { Link } from 'react-router-dom';

const ToyRow = ({ toy }) => {
    const { seller_name, toy_name, sub_category, price, available_Quantity,_id} = toy;
    return (
        <tr>
            <td>
                {seller_name}
            </td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{available_Quantity}</td>
            <th>
                     <Link to={`/singletoydetails/${_id}`}>
                     <button  className="btn btn-ghost btn-xs">View Details</button>
                   </Link>
            </th>
        </tr>
    );
};

export default ToyRow;