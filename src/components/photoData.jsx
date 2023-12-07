import React, { useState, useEffect } from "react";
import axios from "axios";

const PhotoGallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/photo")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log("Error fetching photos:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 py-10 mx-6">
      {photos.length === 0 ? (
        <div className="bg-gray-500 p-4 rounded-md shadow-md">
          <p className="text-center">No photos available</p>
        </div>
      ) : (
        photos.map((photo) => (
          <div key={photo._id} className="bg-gray-200 p-4 rounded">
            <img
              src={photo.photoData} 
              alt={photo._id} 
              className="w-full h-auto rounded"
            />
            <p>Id: {photo._id}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default PhotoGallery;
