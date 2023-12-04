import React from 'react';
import DisplayData from '../components/userData';
import AddData from '../components/insertUser';
import UpdateData from '../components/updateuser';
import DeleteData from '../components/deleteUser';

const User = () => {
  return (
    <div className='bg-gray-300 min-h-screen'>
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
