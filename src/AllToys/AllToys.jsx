import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";
import useTitle from "../hooks/useTitle";


const AllToys = () => {
    useTitle(AllToys)
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetch(`https://assignment-11-server-side-blush.vercel.app/alltoys`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const handleSearch = () => {
        fetch(`https://assignment-11-server-side-blush.vercel.app/alltoys/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setToys(data);
            });
    };

    return (
        <div>
            <h2 className="text-5xl text-center text-secondary mb-8">All toys</h2>
            <div className="form-control mx-auto grid md:grid-cols-2 gap-4  w-1/3">

                <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="search by toy name"
                    className="input input-bordered" />
                <button 
                onClick={handleSearch} 
                className=" btn btn-secondary w-[90px] ">Search</button>

            </div>
            <div className="overflow-x-auto w-full mt-8 mb-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="text-secondary">seller_name</th>
                            <th className="text-secondary">toy_name</th>
                            <th className="text-secondary">sub_category</th>
                            <th className="text-secondary">price</th>
                            <th className="text-secondary">available_Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );



};

export default AllToys;