import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="p-8 bg-white rounded-lg shadow-md text-center relative">
        <div className="bg-secondColor rounded-md shadow-md z-10 relative">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
          <p className="text-lg text-gray-700 mb-8">Page not found</p>
        </div>
        <div className="w-[26rem] h-[26rem] mx-auto mb-8 animate-bounce">
          <img
            src="404.jpg"
            alt="404 Illustration"
            className="w-full h-full z-0 object-cover"
          />
        </div>
        <a
          href="/user"
          className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mt-4"
        >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
