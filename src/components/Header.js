/* eslint-disable react-hooks/exhaustive-deps */
import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

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

  return (
    <div className="absolute text-white flex justify-between w-full px-5 py-4 bg-gradient-to-b from-black z-20 md:flex-row ">
      <Link to="/">
        <img className="w-44 mt-2" src={LOGO_URL} alt="logo" />
      </Link>
      {user && (
        <div className="">
          <div className="flex">
            <img
              className=" hidden md:block w-12 m-4 rounded-md"
              src={user?.photoURL}
              alt="userIcon"
            />
            <h2 className="my-5 md:my-7 md:font-semibold">
              {user.displayName}
            </h2>
            <button
              className="p-2 m-2 md:font-semibold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
