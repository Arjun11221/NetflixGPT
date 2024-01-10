import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/languageConstant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
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
        dispatch(removeUser());
        navigate("/");
      }

      return () => unsubscribe();
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleChange = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChaneg = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute text-white flex justify-between w-screen px-5 py-4 bg-gradient-to-b from-black z-20 ">
      <Link to="/">
        <img className="w-44" src={LOGO_URL} alt="logo" />
      </Link>
      {user && (
        <div className="flex">
          {showGptSearch && (
            <select
              className="bg-transparent my-4 outline-none font-semibold cursor-pointer "
              onChange={handleLanguageChaneg}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option
                  className="bg-gray-950 "
                  key={lang.identifier}
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white px-3 font-semibold my-4 "
            onClick={handleChange}
          >
            {showGptSearch ? "Home Page" : "Gpt Search"}
          </button>
          <div className="flex">
            <img
              className="w-12 m-4 rounded-md"
              src={user?.photoURL}
              alt="userIcon"
            />
            <h2 className="my-7 font-semibold">{user.displayName}</h2>
            <button className="p-2 m-2 font-semibold" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
