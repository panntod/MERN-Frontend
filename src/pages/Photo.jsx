import React from "react";
import PhotoData from "../components/photoData";
import Navbar from "../components/Navbar";
import AddPhoto from "../components/insertPhoto";
import DeletePhoto from "../components/deletePhoto";

const Photo = () => {
  return (
    <div className="py-12 bg-gray-200 min-h-screen">
      <Navbar />
      <PhotoData />
      <div className="flex justify-center mt-10 gap-4">
        <DeletePhoto />
        <AddPhoto />
      </div>
    </div>
  );
};

export default Photo;
