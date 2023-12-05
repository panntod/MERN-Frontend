import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductData = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/product");
        setProductData(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Product Data</h1>
      <table className="w-[60rem] divide-y divide-gray-200 rounded-md overflow-hidden shadow-md">
        <thead className="bg-blue-400">
          <tr>
            <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">
              Upload
            </th>
            <th className="px-6 py-3 text-md font-medium text-center text-white uppercase tracking-wider">
              ID
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productData.map((product, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.type}</td>
              <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <ul className="list-disc list-inside">
                  <li className="font-bold">{product.idUpload.name}</li>
                  <li className="font-normal">{product.idUpload._id}</li>
                </ul>
              </td>
              <td className="py-4 text-center whitespace-nowrap">
                {product._id}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductData;
