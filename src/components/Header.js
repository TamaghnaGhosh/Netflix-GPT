import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const User = useSelector((store) => store.user);
  
  console.log(User);

  const handeSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {pathname !== "/" && User && (
        <div className="flex p-2">
          <img
            className="w-12 rounded-md h-12"
            src={
              User?.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
            alt="userIcon"
          />
          <button
            className="font-semibold text-white ml-1 hover:text-black"
            onClick={handeSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
