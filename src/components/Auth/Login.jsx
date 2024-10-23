import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Email :",email,"Password: ",password);
    setEmail("")
    setPassword("")
  };
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-[#1c1c1c] text-white">
      <div className="border-2 p-20 border-emerald-500 rounded-lg">
        <h1 className="text-3xl ">Login</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 text-xl rounded-full mt-5 p-3 "
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 text-xl rounded-full mt-5 p-3"
            type="password"
            placeholder="Enter your password"
          />
          <button
            className="text-white outline-none w-full border-none placeholder:text-white border-2 bg-emerald-600 text-xl rounded-full mt-5 p-3 "
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
