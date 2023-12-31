import { useContext, useEffect, useState } from "react";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/AuthProvider";
import MyToysRow from "./MYToysRow";



const MyToys = () => {
    useTitle('MyToys')

    const [mytoys, setMytoys] = useState([])
    const { user } = useContext(AuthContext)
    const [selected, setSelected] = useState("")

    const url = `https://assignment-11-server-side-mahejabinmou.vercel.app/toy?email=${user?.email}&selected=${selected}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMytoys(data))
    }, [user,selected]);

    const handleDelete = id => {
        const proceed = confirm('Are you u sure u want to delete');
        if (proceed) {

            fetch(`https://assignment-11-server-side-blush.vercel.app/toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = mytoys.filter(mytoy => mytoy._id !== id);
                        setMytoys(remaining);


                    }
                })
        }
    }





    return (

        <div>
            <h2 className="text-3xl text-secondary text-center ">My Toys</h2>

            <select onChange={(e)=>setSelected(e.target.value)} className="select w-full  max-w-xs">
                <option selected value="ascending" >Ascending</option>
                <option value="descending">Descending</option>
            </select>

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
                            <th className="text-secondary">details</th>

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