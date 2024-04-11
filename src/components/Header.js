import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/services/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/Redux/userSlice";
import { AVATAR_URl, LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/Redux/gptSlice";
import { changeLanguage } from "../utils/Redux/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const initaialLang = useSelector((store) => store.config.lang);

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

  const handleLangSelect = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex md:flex-row flex-col justify-between ">
      <div className="cursor-pointer">
        <img className="w-44 h-16 md:mx-0 mx-auto" src={LOGO_URL} alt="logo" />
      </div>
      {User && (
        <div className="flex p-2 justify-between">
          {showGpt && (
            <select
              className="p-2 m-2 bg-gray-900 text-white rounded-lg"
              onChange={(e) => handleLangSelect(e)}
              value={initaialLang}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <li className="flex relative group">
            <img
              className="w-12 rounded-lg h-12 mx-3 cursor-pointer"
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
            {showGpt ? "Homepage" : "GPT Search"}
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
