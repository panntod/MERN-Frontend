import React, { useState } from "react";
import axios from "axios";

const DeleteData = () => {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      window.alert("Data deleted successfully");
      window.location.reload();
    } catch (error) {
      window.alert("Error deleting data");
    }
  };

  return (
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
            placeholder="ID"
            value={id}
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
  );
};

export default DeleteData;
