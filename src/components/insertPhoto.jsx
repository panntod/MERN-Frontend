import React, { useState } from "react";
import axios from "axios";

const AddPhoto = () => {
  const [postImage, setPostImage] = useState({
    myFile: "", // Ganti menjadi null atau kosong
  });

  const url = "http://localhost:5000/photo/";
  const createImage = (newImage) => axios.post(url, newImage);

  const createPost = async () => {
    try {
      if (!postImage.myFile) {
        throw new Error("Please select a photo.");
      }

      const base64 = await convertToBase64(postImage.myFile);
      const imageData = {
        photoData: base64, // Kirim base64 ke backend sebagai data
      };

      await createImage(imageData);
      console.log("Photo added successfully");
    } catch (error) {
      console.error("Error adding photo:", error.message);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    setPostImage({ myFile: file }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
    location.reload()
  };

  return (
    <div>
      <div className="bg-white px-6 py-6 rounded-md shadow-md w-[26rem]">
        <h2 className="text-2xl font-bold mb-4">Add Photo:</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="data" className="block">
              Upload Photo:
            </label>
            <input
              type="file"
              name="data"
              accept=".jpeg, .png, .jpg"
              onChange={(e) => handleFileUpload(e)}
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded-md py-2 w-full hover:bg-green-600"
          >
            Add Photo
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPhoto;
