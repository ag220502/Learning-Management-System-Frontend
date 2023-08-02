import React, { useState } from "react"; 
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
      <div className="flex flex-col items-center mx-auto bg-white rounded-xl shadow border p-8 m-10">
        <text className="font-bold font-sans pb-5 ">LOGIN</text>
        <form onSubmit={handleSubmit} className="flex flex-col">
            <label htmlFor="email">EMAIL</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@sys.com" id="email" name="Email" />
            <label htmlFor="password">PASSWORD</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="Password" />
            <div className="py-5">
                <button className="w-40 h-7 bg-blue-700 rounded-lg text-sm text-white">LOG IN</button>
            </div>
            
        </form>
        <text className="text-xs">Don't have an account?</text>
        <button onClick={() => props.onFormSwitch('register')} className="w-40 h-7 bg-black rounded-lg text-xs text-white">Sign Up Here</button>
      </div>
    )
}