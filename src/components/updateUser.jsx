import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateData = ({ userId }) => {
  const [userData, setUserData] = useState({
    id: "",
    name: "",
    age: "",
    address: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users`);
        if (response.data && response.data.id) {
          setUserData((prevData) => ({
            ...prevData,
            id: response.data.id,
            name: response.data.name,
            age: response.data.age,
            address: response.data.address,
            email: response.data.email,
          }));
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users`, userData);
      window.alert('Data updated successfully');
      window.location.reload();
    } catch (error) {
      console.error('Error updating data:', error.response); // Use error.response to access the response details
    }
  };
  

  return (
    <div className="bg-white px-6 py-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update Data:</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="id" className="block">
            ID:
          </label>
          <input
            type="text"
            id="id"
            name="id"
            value={userData.id}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="age" className="block">
            Age:
          </label>
          <input
            type="text"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="address" className="block">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={userData.address}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
        >
          Update Data
        </button>
      </form>
    </div>
  );
};

export default UpdateData;
