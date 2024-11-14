import React, { useState } from "react";

function Login({ handleLogin }) {
  //   console.log(handleLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    handleLogin(email, password);
    console.log("Email is", email, "& Password is", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 rounded-xl p-16">
        <form
          onSubmit={(event) => {
            submitHandler(event);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-7 text-white outline-none font-medium bg-transparent rounded-full text-lg placeholder:text-gray-500"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            required
            className="border-2 border-emerald-600 py-3 px-7 text-white outline-none font-medium bg-transparent rounded-full text-lg mt-4 placeholder:text-gray-500"
            type="password"
            placeholder="Enter password"
          />
          <button className="border-none hover:bg-emerald-800 bg-emerald-600 py-3 px-8 text-white text-lg w-full outline-none rounded-full font-semibold placeholder:text-white mt-6">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;