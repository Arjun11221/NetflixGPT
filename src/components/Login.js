import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isLogin) {
      // signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin
      signInWithEmailAndPassword(
        
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute text-white bg-black p-12 my-32 mx-auto right-0 left-0 opacity-85 rounded-md "
      >
        <h1 className="py-4 font-semibold text-4xl ">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full outline-none rounded-md bg-stone-700 "
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or phone number"
          className="p-3 my-4 w-full outline-none rounded-md bg-stone-700 "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full outline-none rounded-md bg-stone-700 "
        />
        <p className="py-2 text-red-600 text-lg font-medium ">{errorMessage}</p>
        <button
          onClick={handleClick}
          className="bg-red-600 rounded-md w-full p-3 my-6"
        >
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
