import React, { useState } from "react";
import axios from "axios"

const DeletePhoto = () => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/photo/${id}`);
      alert("Data deleted successfully");
      location.reload();
    } catch (error) {
      console.error("Error deleting data:", error);
      alert("Error deleting data");
    }
  };

  return (
    <div>
      <div className="bg-white px-6 py-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Delete Data:</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="id" className="block">
              ID:
            </label>
            <input
              type="text"
              id="id"
              name="id"
              value={id}
              placeholder="ID"
              onChange={handleChange}
              className="border rounded-md py-2 px-3 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 text-white rounded-md py-2 w-full hover:bg-red-600"
          >
            Delete Data
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeletePhoto;
