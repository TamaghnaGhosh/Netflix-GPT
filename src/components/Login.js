import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const fullname = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  const handleSubmitFom = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);

    if (message) return;

    // Sign In / Sign Up
    if (!isSignInForm) {
      //Sign Up Logic
      console.log({
        fullname: fullname.current.value,
        email: email.current.value,
        password: password.current.value,
      });
      document.getElementById("reset").click();
    } else {
      //Sign In Logic
      console.log({
        email: email.current.value,
        password: password.current.value,
      });
      document.getElementById("reset").click();
    }

    // if (message === null && !isSignInForm && fullname.current.value !== "") {
    //   console.log({
    //     fullname: fullname.current.value,
    //     email: email.current.value,
    //     password: password.current.value,
    //   });
    //   document.getElementById("reset").click();
    // } else {
    //   console.log({
    //     email: email.current.value,
    //     password: password.current.value,
    //   });
    //   document.getElementById("reset").click();
    // }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="concord-img vlv-creative"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-semibold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={fullname}
            id="fullname"
            name="fullname"
            className="p-3 my-2 rounded-md bg-[#333] w-full"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          id="email"
          ref={email}
          name="email"
          className="p-3 my-2 rounded-md bg-[#333] w-full"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          ref={password}
          className="p-3 my-2 rounded-md bg-[#333] w-full"
          id="password"
          name="password"
          placeholder="password"
        />
        <span className="text-red-600">{errorMsg}</span>
        <button
          className="p-4 my-4 rounded-md w-full bg-[#e50914] font-medium text-xl"
          onClick={handleSubmitFom}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {/* This portion is a work in progress */}
        <button type="reset" id="reset" className="hidden">
          Reset
        </button>
        <p
          className="font-normal mt-10 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered Sign In Now...."}
        </p>
      </form>
    </div>
  );
};

export default Login;
