import React, { useState } from "react";
import axios from "axios";

const AddData = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    address: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", formData);
      window.alert("Data added successfully");
      window.location.reload(); 
    } catch (error) {
      alert(error.statusText);
    }
  };

  return (
    <div className="bg-white px-6 py-4 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Data:</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="nameInsert" className="block">
            Name:
          </label>
          <input
            type="text"
            id="nameInsert"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="ageInsert" className="block">
            Age:
          </label>
          <input
            type="number"
            id="ageInsert"
            placeholder="Enter Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="addressInsert" className="block">
            Address:
          </label>
          <input
            type="text"
            id="addressInsert"
            name="address"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="emailInsert" className="block">
            Email:
          </label>
          <input
            type="email"
            id="emailInsert"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <div>
          <label htmlFor="passwordInsert" className="block">
            Password:
          </label>
          <input
            type="password"
            id="passwordInsert"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded-md py-2 px-3 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white rounded-md py-2 w-full hover:bg-green-600"
        >
          Add Data
        </button>
      </form>
    </div>
  );
};

export default AddData;
