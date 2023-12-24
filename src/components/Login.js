import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URl, BG_IMG } from "../utils/constant";

const Login = () => {
  
  const dispatch = useDispatch();
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
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: fullname.current.value,
            photoURL: AVATAR_URl,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          // navigate("browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }

  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="concord-img vlv-creative"
          src={BG_IMG}
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
