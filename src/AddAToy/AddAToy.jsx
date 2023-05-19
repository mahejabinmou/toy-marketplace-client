
import useTitle from "../hooks/useTitle";
import { Link } from "react-router-dom";


const AddAToy = () => {
    useTitle(AddAToy)

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const toy_name = form.name.value;
        const available_Quantity = form.quantity.value;
        const seller_name = form.seller.value;
        const email = form.email.value;
        const price = form.price.value;
        const Rating = form.rating.value;
        const description = form.detail.value;
        const img = form.img.value;
        const sub_category=form.subCategory.value;
        

        const newToy = { toy_name, available_Quantity, seller_name, email, price, Rating, description,sub_category,img }
         console.log(newToy);

        // send data to server
        fetch('http://localhost:5000/toy',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newToy)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }

    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold text-secondary">Add Toy</h1>
            <form onSubmit={handleAddToy}>
                {/* name and quantity row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Toy-Name" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="seller" placeholder="Seller Name" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">

                            <input type="email" name="email" placeholder="Seller Email" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <select name="subCategory" className="select select-primary  w-full max-w-xs">
                            <option disabled selected>choose the sub category</option>
                            <option value="Disney princes">Disney princes</option>
                            <option value="frozen dolls">frozen dolls</option>
                            <option value="animation characters">animation characters</option>
                        </select>



                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                <div className="md:flex">
                    {/* category & details row */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="detail" placeholder="Detail description" className="input input-bordered w-full" />
                        </label>

                    </div>



                </div>
                <div className="  mb-8 w-full">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="img" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>

                    </div>
                </div>

                <input type="submit" value="Add Toy" className="btn btn-block btn-secondary" />
                {/* <Link >
                <input type="submit" value="Add Toy" className="btn btn-block btn-secondary" />
                   </Link> */}
            </form>
        </div>
    );
};

export default AddAToy;