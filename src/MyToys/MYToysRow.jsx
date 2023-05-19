import React from 'react';

const MyToysRow = ({mytoy}) => {
    const {img,toy_id,seller_name,email,toy_name,sub_category,
        price,Rating,available_Quantity } = mytoy;
   
    return (
        <tr>
            {/* <td>{img}</td> */}
            <td>
                <img src={img} className='w-[50px] h-[50px]' alt="" />
            </td>
            
            <td>{toy_id}</td>
            <td>{seller_name}</td>
            <td>${email}</td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>${Rating}</td>
            <td>{available_Quantity}</td>
            {/* <th>
                     <Link to={`/singletoydetails/${_id}`}>
                     <button  className="btn btn-ghost btn-xs">View Details</button>
                   </Link>
            </th> */}
        </tr>
    );
};

export default MyToysRow;