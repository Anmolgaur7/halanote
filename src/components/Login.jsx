import React,{useRef,useState} from 'react'
import {useNavigate} from 'react-router-dom'



export default function Login() 
{
 let navigate=useNavigate();
//  firstly here a state is created for taking credentials
  const [credentials, setcredentials] = useState({email: "", password: ""}) 
  // here handlesubmit buttne will get triggerred when the form will bw submitted
  const handlesubmit=async(e)=>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
    });

    const json = await response.json()
    console.log(json);
    // i have created an success variable in auth route  here if it is tue then it is proceeded
    if (json.success)
    {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authtoken); 
        navigate("/main")
    }
    else{
        alert("Invalid credentials");
    }
  }
  const onchange = (e)=>{
    setcredentials({...credentials, [e.target.name]: e.target.value})
}
  return (
  <>
  <h1 className='text-black m-4 font-mono font-bold text-3xl'>Login to your account🙌</h1>
  <form className='m-4'onSubmit={handlesubmit} >
  <div className="mb-6">
    <label
      htmlFor="email"
      className="block m-2 text-3xl font-mono text-gray-900 dark:text-black"
    >
      Your email
    </label>
    <input
      type="email"
      id="email"
      name='email'
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="name@xxx.com"
      onChange={onchange}
      required=""
    />
  </div>
  <div className="mb-6">
    <label
      htmlFor="password"
      className="block m-2 text-3xl font-mono text-gray-900 dark:text-black"
    >
      Your password
    </label>
    <input
      type="password"
      id="password"
      name='password'
      placeholder='Enter a Password'
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      onChange={onchange}
    />
  </div>
  <button
    type="submit"
    className="text-black bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:focus:ring-yellow-300"
  >
    Log in ✌
  </button>
</form>
  </>
  )
}
