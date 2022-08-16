import { useState } from "react";
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
    let navigate = useNavigate();
    // here an state avriable is created to take inputs as they are variable
    const [credentials, setcredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const handlesubmit = async (e) => {
        e.preventDefault();
    const{name,email,password}=credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name,email,password})
        });
        const json = await response.json()
        console.log(json);
        // here again success is checked as i crated a varaible in auth.js
        if (json.success) 
        {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/login")
        }
        else {
            alert("Invalid credentials");
        }
    }
    const onchange = (e) => {
        setcredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <h1 className='text-black text-center m-4 font-mono font-bold text-3xl'>Sign up to our site🙌</h1>

            <form className='m-4' onSubmit={handlesubmit}>
                <div className="mb-6">
                    <label
                        htmlFor="title"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <h1 className='text-2xl text-black font-mono'>Name</h1>
                    </label>
                    <input
                        type="text"
                        id="name"
                        name='name'
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required minLength={5}
                        onChange={onchange}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="description"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <h1 className='text-2xl text-black font-mono'>Email</h1>
                    </label>
                    <input
                        type="email"
                        id="email"
                        name='email'
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        required minLength={5}
                        onChange={onchange}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="tag"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <h1 className='text-2xl text-black font-mono'>Password</h1>
                    </label>
                    <input
                        type="password"
                        id="password"
                        name='password'
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        onChange={onchange}
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="cpassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                        <h1 className='text-2xl text-black font-mono'>Confirm Password</h1>
                    </label>
                    <input
                        type="password"
                        id="cpassword"
                        name='cpassword'
                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        onChange={onchange}
                    />
                </div>
                <button
                    type="submit"
                    className="text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xl p-5  text-center dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
                >
                    Lets get started❤
                </button>
            </form>
        </>
    )
}
