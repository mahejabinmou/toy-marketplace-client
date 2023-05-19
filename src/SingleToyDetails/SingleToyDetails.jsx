import { useLoaderData } from "react-router-dom";


const SingleToyDetails = () => {
    const toy = useLoaderData();

    const { toy_name, price, service_id, Rating, img, seller_name,
        description, available_Quantity, _id } = toy;

    return (
        <div className="card w-96 bg-base-100 mt-8 shadow-xl mx-auto mb-12">
            <figure><img src={img} className="w-[200px] h-[200px] mt-8" alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="card-title text-secondary text-2xl ">
                Toy Name: {toy_name}
                </h2>
                <h2 className="font-bold">Seller Name: {seller_name}</h2>
                <h2 className="font-bold">Price: {price}</h2>
                <h2 className="font-bold">Rating: {Rating}</h2>
                <h2 className="font-bold">Available_Quantity: {available_Quantity}</h2>
                <p className="font-bold"><small>Description: {description}</small></p>

            </div>
        </div>
    );
};

export default SingleToyDetails;