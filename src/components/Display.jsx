import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { useRef } from "react";
import { albumsData } from "../assets/assets";
import { useEffect } from "react";
function Display() {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgColor = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`; // Fix: Use backticks to create a string
    } else {
      displayRef.current.style.background = `#121212`; // Fix: Background color should be a string
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 "
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />{" "}
        {/* Fixed the space */}
      </Routes>
    </div>
  );
}

export default Display;
