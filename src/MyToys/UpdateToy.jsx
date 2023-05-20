import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {

    const mytoy=useLoaderData();
    const { available_Quantity,price,description}=mytoy;
    const {id} = useParams()
    console.log(id);

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const available_Quantity = form.available_Quantity.value;
        const price = form.price.value;
        const description = form.description.value;

        const updatedToy = {available_Quantity,price,description }
         console.log(updatedToy);

        // send data to server
        fetch(`https://assignment-11-server-side-blush.vercel.app/toy/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })



    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold text-secondary">Update toy:{price}</h1>
            <form onSubmit={handleUpdateToy}>
                {/* name and quantity row */}
                <div className="md:flex">

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="available_Quantity" defaultValue={available_Quantity} placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>

                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" defaultValue={price} placeholder="Price" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                    {/* category & details row */}

                    <div className="form-control md:w-1/2 ml-4 mb-8">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" defaultValue={description} placeholder="Detail description" className="input input-bordered w-full" />
                        </label>

                    </div>



               

                <input type="submit" value="Update Toy" className="btn btn-block btn-secondary" />
                
            </form>
        </div>
    );
};

export default UpdateToy;