import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 h-28 text-secondary mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li ><Link to="/alltoys" className="justify-between"> All Toys</Link></li>
                        <li><Link to="/mytoys">My Toys</Link></li>
                        <li><Link to="/addtoy">Add A Toy</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        

                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">
                    <img src="https://i.ibb.co/891fTVw/download.png" className="w-[100px] h-[100px] " alt="" />
                
                     <p className="text-secondary">Kingdom Of Disney</p>
                </Link>
            </div>
            <div className="navbar-center hidden text-secondary lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li tabIndex={0}>
                        <Link to="/alltoys">All Toys</Link></li>
                        <li><Link to="/mytoys">My Toys</Link></li>
                        <li><Link to="/addtoy">Add A Toy</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        {/* {
                            user?.email?  
                            <>
                            <li><Link to="/bookings">My Bookings</Link></li>
                            <li><button onClick={handleLogOut}>LogOut</button></li>
                            </>
                            
                            : <li><Link to="/login">Login</Link></li>
                        
                        } */}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning">Appointment</button>
            </div>
        </div>
    );
};

export default Navbar;