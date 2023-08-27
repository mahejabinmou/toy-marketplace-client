import { FaGoogle } from "react-icons/fa";

import { useState } from "react";
import { useContext } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const Login = () => {


    const { loginUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login page location", location);
    const from = location.state?.from?.pathname || "/";
   



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogin = (event) => {
        event.preventDefault();



        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate(from, { replace: true });
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };


const handleSignInGoogle=()=>{
    googleSignIn()
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => {

            console.log('error', error.message)
        })
}
    







    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col  lg:flex-row">
                <div className="w-1/2 mr-12 p-4">
                    <img src="https://i.ibb.co/KD3BCzp/key-login-key-ring-6472650.jpg" className="rounded-xl" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold text-secondary">Login</h1>
                        <form action="" className="flex-col items-center">

                            <div>
                                <input

                                    onChange={(e) => setEmail(e.target.value)}
                                    className="email p-3 m-2 border "
                                    type="email"
                                    placeholder="enter your email"
                                />
                            </div>
                            <div>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="password p-3 m-2  border "
                                    type="password"
                                    placeholder="enter your password"
                                />
                            </div>
                            <button
                                onClick={handleLogin}
                                className="btn btn-secondary   w-75 p-2 mt-3"
                            >
                                Login
                            </button>

                            <div className="p-2">
                                < p className='my-4 text-center'>New to here <Link
                                    to="/signup" className='text-secondary font-bold'>
                                    Sign Up</Link></p>
                            </div>
                        </form>


                        <div className="divider text-secondary">OR</div>
                        <div className="text-center">
                            <button
                                onClick={handleSignInGoogle}
                                className="btn btn-secondary btn-outline btn-circle w-[75px] mr-4 mt-3">
                                <FaGoogle />
                            </button>
                            

                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};


export default Login;