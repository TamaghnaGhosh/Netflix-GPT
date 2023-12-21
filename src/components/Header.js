import React, { useState } from "react";

const Header = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <div className="absolute px-8 py-4 bg-gradient-to-b from-black">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-semibold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            className="p-3 my-2 rounded-md bg-[#333] w-full"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          className="p-3 my-2 rounded-md bg-[#333] w-full"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          className="p-3 my-2 rounded-md bg-[#333] w-full"
          placeholder="password"
        />
        <button className="p-4 my-4 rounded-md w-full bg-[#e50914] font-medium text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
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

export default Header;
