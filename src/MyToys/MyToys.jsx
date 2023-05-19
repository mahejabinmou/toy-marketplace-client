import { useContext, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";
import MYToysRow from "./MYToysRow";


const MyToys = () => {
    useTitle(MyToys)

    const [mytoys, setMytoys] = useState([])

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/toy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [])

    return (

        <div>
            <h2>MyBooking: {mytoys.length}</h2>
            <div className="overflow-x-auto w-full mt-8 mb-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>img</th>
                            <th>toy_id</th>
                            <th>seller_name</th>
                            <th>email</th>
                            <th>toy_name</th>
                            <th>sub_category</th>
                            <th>price</th>
                            <th>Rating</th>
                            <th>available_Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(mytoy => <MYToysRow
                                key={mytoy._id}
                                toy={mytoy}>

                            </MYToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;