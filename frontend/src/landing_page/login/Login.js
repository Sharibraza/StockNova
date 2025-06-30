import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";


function Login() {
    
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
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
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
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
    });
  };

    return (
        <div className="container p-5 ">
                <div className="col-6 ">
                    <h1 className=' text-body fs-1 mb-5'>Login Account</h1>
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
                        <button className='btn btn-primary mt-2 p-2 fs-4 col-3 ' style={{ width: "40%", margin: "0 6rem", backgroundColor: "#387ed1" }}>Submit</button>
                    </form>
                    {<ToastContainer /> }
                </div>
        </div >
    );
}

export default Login;