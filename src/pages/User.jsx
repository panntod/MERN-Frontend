import React from 'react';
import DisplayData from '../components/userData';
import AddData from '../components/insertUser';
import UpdateData from '../components/updateUser';
import DeleteData from '../components/deleteUser';
import Navbar from '../components/Navbar';

const User = () => {
  return (
    <div className='py-12 bg-gray-200 min-h-screen'>
      <Navbar />
      <DisplayData />
      <div className="flex items-center justify-center mt-10 gap-4">
        <DeleteData />
        <AddData />
        <UpdateData />
      </div>
    </div>
  );
};

export default User;
