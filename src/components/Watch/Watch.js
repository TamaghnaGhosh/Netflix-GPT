/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VideoBackground from "../VideoBackGround";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/services/firebase";

const Watch = () => {
  const { watchId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
      } else {
        navigate("/");
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const handleBack =()=>{
    navigate("/browse")
  }

  return (
    <div className="bg-black">
      <button className="text-white bg-red-700 p-2 m-2 rounded-lg md:ml-[265px] mt-5" onClick={handleBack}>Homepage</button>
      <VideoBackground movieId={watchId} watch="watch"/>
    </div>
  );
};

export default Watch;
