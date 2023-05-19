import { useEffect, useState } from "react";
import ToyRow from "./ToyRow";
import useTitle from "../hooks/useTitle";


const AllToys = () => {
    useTitle(AllToys)
    const [toys,setToys]=useState([]);
    

    useEffect(()=>{
        fetch(`http://localhost:5000/alltoys`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])

    return (
        <div>
            <h2 className="text-5xl">All toys: {toys.length}</h2>
            <div className="overflow-x-auto w-full mt-8 mb-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>seller_name</th>
                            <th>toy_name</th>
                            <th>sub_category</th>
                            <th>price</th>
                            <th>available_Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                   toys.map(toy=><ToyRow
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