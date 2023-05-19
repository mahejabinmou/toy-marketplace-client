import { useContext, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";
import MyToysRow from "./MYToysRow";



const MyToys = () => {
    useTitle(MyToys)

    const [mytoys, setMytoys] = useState([])

    const { user } = useContext(AuthContext)

    const url = `http://localhost:5000/toy?email=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, []);

    const handleDelete = id =>{
        const proceed = confirm('Are you u sure u want to delete');
        if (proceed) {
          
            fetch(`http://localhost:5000/toy/${id}`,{
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('deleted successful');
                    const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                    setMytoys(remaining);
                    

                }
            })
        }
    }


    const handleBookingConfirm = id => {
        fetch(`http://localhost:5000/toy/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update State
                    const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                    const updated = mytoys.find(mytoy => mytoy._id === id);
                    updated.status = 'confirm';
                    const newToys = [updated, ...remaining];
                    setMytoys(newToys);
                }

            })
    }

    return (

        <div>
            <h2>MyBooking: {mytoys.length}</h2>
            <div className="overflow-x-auto w-full mt-8 mb-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th className="text-secondary">img</th>
                            <th className="text-secondary">sevice_id</th>
                            <th className="text-secondary">seller_name</th>
                            <th className="text-secondary">email</th>
                            <th className="text-secondary">toy_name</th>
                            <th className="text-secondary">sub_category</th>
                            <th className="text-secondary">price</th>
                            <th className="text-secondary">Rating</th>
                            <th className="text-secondary">available_Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mytoys.map(mytoy => <MyToysRow
                                key={mytoy._id}
                                mytoy={mytoy}
                                handleDelete={handleDelete}
                                >

                            </MyToysRow>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;