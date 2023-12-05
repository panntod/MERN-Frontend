import React from "react";

const NavbarProduct = ({ userData, handleLogout }) => {
  return (
    <div className="text-center flex justify-evenly w-full mb-6">
      <h1 className="text-2xl text-gray-600 font-bold my-auto">Welcome, <span className="text-black">{userData.user.name}</span></h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white rounded-md py-2 px-4 hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default NavbarProduct;
