import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateProduct = ({ userData }) => {
  const [productData, setProductData] = useState({
    id: "",
    name: "",
    price: "",
    type: "",
    idUpload: "",
  });

  useEffect(() => {
    setProductData((prevData) => ({
      ...prevData,
      idUpload: userData?.user?._id || "",
    }));
  }, [userData]);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/product/`, {
        id: productData.id,
        name: productData.name,
        price: productData.price,
        type: productData.type,
        idUpload: productData.idUpload,
      });
      window.alert("Data updated successfully");
      window.location.reload();
    } catch (error) {
      alert("Error updating product", error);
      console.log(error.message);
    }
  };

  return (
    <div className="flex flex-col px-4 py-6 rounded-md shadow-md bg-white">
      <form onSubmit={handleUpdateProduct} className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Update Data:</h2>
        <div>
          <label htmlFor="id" className="block">
            ID:
          </label>
          <input
            type="text"
            placeholder="ID"
            name="id"
            id="id"
            value={productData.id}
            onChange={(e) =>
              setProductData({ ...productData, id: e.target.value })
            }
            className="border rounded-md py-2 px-3"
          />
        </div>
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
            onChange={(e) =>
              setProductData({ ...productData, name: e.target.value })
            }
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
            onChange={(e) =>
              setProductData({ ...productData, price: e.target.value })
            }
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
            onChange={(e) =>
              setProductData({ ...productData, type: e.target.value })
            }
            className="border rounded-md py-2 px-3"
          />
        </div>
        <input type="hidden" name="idUpload" value={productData.idUpload} />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-md py-2 w-full hover:bg-blue-600"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
