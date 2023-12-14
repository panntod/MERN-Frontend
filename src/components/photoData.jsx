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

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard");
      })
      .catch((err) => {
        alert("Error copying text to clipboard");
      });
  };

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
            <div className="w-full bg-gray-600 p-2 rounded-md shadow-md">
              <p
                className="text-center text-white cursor-pointer"
                onClick={() => copyToClipboard(`${photo._id}`)}
              >
                ID: {photo._id}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PhotoGallery;
