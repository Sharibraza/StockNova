
import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


function Register() {
    
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState({
        email: "",
        password: "",
        username: "",
    });

    const { email, password, username } = inputValue;
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };

    const handleError = (err) =>
        toast.error(err, {
            position: "bottom-left",
        });

    const handleSuccess = (msg) =>
        toast.success(msg, {
            position: "bottom-right",
        });

    const handleSubmit = async (e) => { 
        e.preventDefault();
        try {
             let {data} = await axios.post("https://stocknova-dashboard.onrender.com/signup",{ ...inputValue,},{ withCredentials: true });
            const { success, message } = data;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                handleError(message);
            }
        } catch (error) {
            console.log(error);
        }

        setInputValue({
            ...inputValue,
            email: "",
            password: "",
            username: "",
        });

    };

    return (
        <div className="container p-5 ">
            <div className="row  p-5">
                <div className="col-6 mt-5">
                    <img src="media/images/signupimg.png" className="mt-4" alt="signup" style={{ width: "35vw" }} />
                </div>
                <div className="col-6 mt-5">
                    <h1 className=' text-body fs-1'>Signup now</h1>
                    <p className='text-muted mt-4'>Or track your existing application </p>
                    <form onSubmit={handleSubmit}>
                        <div className="row mb-4">
                            <label htmlFor="email" className="col-2 fs-5 text-muted" >Email &nbsp; </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Enter your email"
                                onChange={handleOnChange}
                                className="col-6"
                            />
                        </div>
                        <div className="row mb-3 ">
                            <label htmlFor="email" className="col-2 text-muted">Username </label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder="Enter your username"
                                onChange={handleOnChange}
                                className="col-6"
                            />
                        </div>
                        <div className="row mb-3 ">
                            <label htmlFor="password" className="col-2 text-muted">Password </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={handleOnChange}
                                className="col-6"
                            />
                        </div>
                        <button className='btn btn-primary mt-2 p-2 fs-4 col-3 ' style={{ width: "40%", margin: "0 6rem", backgroundColor: "#387ed1" }}>Submit</button> <br /> <br />
                        <span>
                            Already have an account? &nbsp; &nbsp; &nbsp;
                            <Link to={"/login"}>Login</Link>
                        </span>
                    </form>
                    {<ToastContainer /> }
                </div>
            </div >
        </div >
    );
}

export default Register;
