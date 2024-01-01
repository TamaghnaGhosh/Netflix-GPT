import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { AVATAR_URl, LOGO_URL } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((store) => store.user);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unSubscribe();
    };
  }, [dispatch, navigate]);

  const handeSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO_URL} alt="logo" />
      {User && (
        <div className="flex p-2">
          <li className="flex relative group">
            <img
              className="w-12 rounded-md h-12 mx-2 cursor-pointer"
              src={User?.photoURL || AVATAR_URl}
              alt="userIcon"
            />
            {/* <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i> */}
            {/* <!-- Submenu starts --> */}
            <ul className="absolute bg-white p-3 w-40 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg rounded-lg">
              <li className="text-sm hover:bg-slate-100 leading-8">
                {User?.displayName}
              </li>
              <li className="text-sm hover:bg-slate-100 leading-8">
                Digital marketing
              </li>
              <li
                className="text-sm hover:bg-slate-100 leading-8 cursor-pointer"
                onClick={handeSignOut}
              >
                Sign Out
              </li>
            </ul>
            {/* <!-- Submenu ends --> */}
          </li>
          <button
            className="text-white px-2 bg-purple-800 p-2 m-2 rounded-lg hover:bg-purple-500"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>

          {/* <div className="ml-1 py-4 text-white">
            <button
              className="font-semibold mx-2 hover:text-green-500"
              onClick={handeSignOut}
            >
              Sign Out
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default Header;
