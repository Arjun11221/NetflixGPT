import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="img"
        />
      </div>
      <form className="w-4/12 absolute text-white bg-black p-12 my-32 mx-auto right-0 left-0 opacity-85 rounded-md ">
        <h1 className="py-4 font-semibold text-4xl ">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name..."
            className="p-3 my-4 w-full outline-none rounded-md bg-stone-700 "
          />
        )}
        <input
          type="email"
          placeholder="Email or phone number"
          className="p-3 my-4 w-full outline-none rounded-md bg-stone-700 "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full outline-none rounded-md bg-stone-700 "
        />
        <button className="bg-red-600 rounded-md w-full p-3 my-6">
          {isLogin ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={handleChange}>
          {isLogin
            ? "New to Netflix? Sign up Now. "
            : "Already have account Sign In Now!!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
