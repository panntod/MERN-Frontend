import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-mainColor fixed top-0 w-full py-6">
      <div className="flex items-center justify-around">
        <div className="text-white text-2xl font-bold">Mern App</div>
        <ul className="flex space-x-4 text-white">
          <li>
            <a href="/user" className="hover:text-thirdColor text-xl font-medium hover:bg-secondColor px-5 py-3 rounded-md">
              User
            </a>
          </li>
          <li>
            <a href="/product" className="hover:text-thirdColor text-xl font-medium hover:bg-secondColor px-5 py-3 rounded-md">
              Product
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
