import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ mytoy,handleDelete }) => {
    const { _id,img, service_id, seller_name, email, toy_name, sub_category,
        price, Rating, available_Quantity } = mytoy;

        

    return (
        <tr>
            <th>
                <button onClick={()=>handleDelete(_id)} className="btn btn-circle btn-outline bg-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <img src={img} className='w-[80px] h-[80px]' alt="" />
            </td>

            <td>{service_id}</td>
            <td>{seller_name}</td>
            <td>${email}</td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>${Rating}</td>
            <td>{available_Quantity}</td>
            <td>
                     {/* <Link to="">
                     <button  className="btn btn-ghost btn-xs bg-secondary">Update</button>
                   </Link> */}
                   <input type="submit" value="Update Coffee" className="btn btn-ghost btn-xs bg-secondary"/>
           
            </td>
        </tr>
    );
};

export default MyToysRow;