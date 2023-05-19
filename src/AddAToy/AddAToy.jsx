

const AddAToy = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h1 className="text-3xl font-extrabold">Add Toy</h1>
            <form
             >
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
                           
                            <input type="text" name="Seller Name" placeholder="Seller Name" className="input input-bordered w-full" />
                         </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                         </label>
                         <label className="input-group">
                           
                            <input type="email" name="Seller Email" placeholder="Seller Email" className="input input-bordered w-full" />
                         </label>

                    </div>
                </div>

                <div className="md:flex">
                    {/* category & details row */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                         </label>
                         <label className="input-group">
                           
                            <input type="text" name="Sub Category" placeholder="Category Name" className="input input-bordered w-full" />
                         </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                         </label>
                         <label className="input-group">
                           
                            <input type="text" name="Price" placeholder="Price" className="input input-bordered w-full" />
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
                           
                            <input type="text" name="Rating" placeholder="Rating" className="input input-bordered w-full" />
                         </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                         </label>
                         <label className="input-group">
                           
                            <input type="text" name="Detail description" placeholder="Detail description" className="input input-bordered w-full" />
                         </label>

                    </div>
                    
                  

                </div>
                <div className="  mb-8 w-full">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                         </label>
                         <label className="input-group">
                           
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                         </label>

                    </div>
                    </div>
                    
                  <input type="submit" value="Add Toy" className="btn btn-block"/>
            </form>
        </div>
    );
};

export default AddAToy;