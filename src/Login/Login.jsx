import { FaGithub, FaGoogle } from "react-icons/fa";

// import React, { useState } from "react";

import { Link } from "react-router-dom";

// // import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";

// import { useContext } from "react";
// import { AuthContext } from "../provider/AuthProvider";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
// import { app } from "../firebase/firebase.config";

const Login = () => {
    // const auth = getAuth(app);
    // const googleProvider = new GoogleAuthProvider();
    // const githubProvider = new GithubAuthProvider();

    // const { loginUser } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();
    // console.log("login page location", location);
    // const from = location.state?.from?.pathname || "/";


    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [user, setUser] = useState(null);

    // const handleLogin = (event) => {
    //     event.preventDefault();



    //     if ((email, password)) {
    //         loginUser(email, password)
    //             .then((result) => {
    //                 console.log(result.user);
    //                 navigate(from, { replace: true });
    //                  navigate("/");
    //           })
    //             .catch((error) => {
    //                 console.log(error.message);
    //             });
    //     }
    // };


    // const handleSignInGoogle=()=>{
    //     signInWithPopup(auth, googleProvider)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //         })
    //         .catch(error => {

    //             console.log('error', error.message)
    //         })
    // }


    // const handleSignInGit=()=>{
    //     signInWithPopup(auth, githubProvider)
    //             .then(result => {
    //                  const loggedUser = user.result;
    //                 console.log(loggedUser);
    //                 setUser(loggedUser);
    //             })

    //             .catch(error => {
    //                 console.log(error);
    //             })
    // }

    // const handlSignOut = () => {
    //     signOut(auth)
    //         .then(result => setUser(null))
    //         .catch(error => { console.log(error) })
    // }






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

                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="email p-3 m-2 border "
                                    type="email"
                                    placeholder="enter your email"
                                />
                            </div>
                            <div>
                                <input
                                    // onChange={(e) => setPassword(e.target.value)}
                                    className="password p-3 m-2  border "
                                    type="password"
                                    placeholder="enter your password"
                                />
                            </div>
                            <button
                                // onClick={handleLogin}
                                className="btn btn-secondary   w-75 p-2 mt-3"
                            >
                                Login
                            </button>

                            <p className="p-2">
                            < p className='my-4 text-center'>New to here <Link
                            to="/signup" className='text-secondary font-bold'>
                            Sign Up</Link></p>
                            </p>
                        </form>
                        

                        <div className="divider text-secondary">OR</div>
                        <div className="text-center">
                            <button
                                // onClick={handleSignInGoogle} 
                                className="btn btn-secondary btn-outline btn-circle w-[75px] mr-4 mt-3">
                                <FaGoogle />
                            </button>
                            <button
                                // onClick={handleSignInGit}
                                className="btn btn-secondary btn-outline btn-circle w-[75px]  mt-3">
                                <FaGithub />
                            </button>

                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};


export default Login;