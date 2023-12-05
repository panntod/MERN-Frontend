import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProduct = ({ userData }) => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    type: "",
  });

  const [idUpload, setIdUpload] = useState("");

  useEffect(() => {
    if (userData && userData.user) {
      setIdUpload(userData.user._id);
    }
  }, [userData]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/product/", {
        ...productData,
        idUpload,
      });
      window.alert("Data added successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleChange = (e) => {
    setProductData({
      ...productData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="bg-white px-6 py-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Add Data:</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              value={productData.name}
              onChange={handleChange}
              className="border rounded-md py-2 px-3"
            />
          </div>
          <div>
            <label htmlFor="price" className="block">
              Price:
            </label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              id="price"
              value={productData.price}
              onChange={handleChange}
              className="border rounded-md py-2 px-3"
            />
          </div>
          <div>
            <label htmlFor="type" className="block">
              Type:
            </label>
            <input
              type="text"
              placeholder="Type"
              name="type"
              id="type"
              value={productData.type}
              onChange={handleChange}
              className="border rounded-md py-2 px-3"
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded-md py-2 w-full hover:bg-green-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
