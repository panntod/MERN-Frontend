import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayData = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users"); 
        setUserData(response.data);
      } catch (error) {
        alert("Error fetching data:");
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>
      <table className="w-[60rem] divide-y divide-gray-200 rounded-md overflow-hidden shadow-md">
        <thead className="bg-blue-400">
          <tr>
            <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Age</th>
            <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Address</th>
            <th className="px-6 py-3 text-md font-medium text-center text-white uppercase tracking-wider">ID</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {userData.map((user, i) => (
            <tr key={i}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.age}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.address}</td>
              <td className="py-4 text-center whitespace-nowrap">{user._id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayData;
