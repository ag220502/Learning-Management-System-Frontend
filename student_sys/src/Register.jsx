import React, { useState } from "react";

export const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  }

  return(
    <div className="flex flex-col items-center mx-auto bg-white rounded-xl shadow border p-8 m-10">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <text className="font-bold font-sans pb-5 ">REGISTRATION</text>
        <label htmlFor="name">FULL NAME</label>
        <input value={name} onChange={(e) => setName(e.target.value)} type="email" placeholder="Full Name" id="name" name="name" />
        <label htmlFor="email">EMAIL</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@sys.com" id="email" name="email" />
        <label htmlFor="password">PASSWORD</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
        <div className="py-5">
              <button className="w-40 h-7 bg-blue-700 rounded-lg text-sm text-white">SIGN UP</button>
        </div>
      </form>
      <text className="text-xs">Already have an account?</text>
      <button onClick={() => props.onFormSwitch('login')} className="w-40 h-7 bg-black rounded-lg text-xs text-white">Login Here</button>
    </div>
  )
}