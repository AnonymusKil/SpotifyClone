import React, { useContext } from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayContext"; // Import the PlayerContext to use the playWithId function
import { assets } from "../assets/assets"; // Import assets for the Spotify logo
function DisplayAlbum() {
  const { id } = useParams(); // Get the album id from the URL
  const albumData = albumsData[id]; // Use the id to find the album data
  console.log(albumData);
  const { playWithId } = useContext(PlayerContext);
  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end ">
        <img
          className="w-48 rounded"
          src={albumData.image}
          alt={albumData.name}
        />{" "}
        <div className="flex flex-col">
          <p>PlayList</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl ">
            {albumData.name}
          </h2>

          <h4>{albumData.desc}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5 "
              src={assets.spotify_logo}
              alt=""
            />
            <b>Spotify</b>
            .1,322,3145 likes . <b>50 Songs,</b>
            about 2 hr 30 minutes
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added </p>
        <img className="m-auto w-4 " src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
          onClick={() => playWithId(item.id)}
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            <img className="inline-block w-10 mr-5" src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumData.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
}

export default DisplayAlbum;
