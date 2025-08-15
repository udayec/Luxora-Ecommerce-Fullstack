import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import { BiUser } from 'react-icons/bi';
import { FaShoppingCart, FaAddressBook, FaUserEdit, FaStar } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { getUserAddresses, logOutUser } from '../store/actions';
import AddressInfo from './checkout/AddressInfo';
import Orders from './checkout/Orders';

const Profile = () => {
  const { user, address } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showAddress, setShowAddress] = useState(false);
  const [showOrders, setshowOrders] = useState(false);

  const logOutHandler = () => {
    dispatch(logOutUser(navigate));
  };

    useEffect(() => {
        dispatch(getUserAddresses());
    }, [dispatch]);

  return (
    <div className="lg:px-20 sm:px-10 px-4 py-10 bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen">
      <div className="max-w-3xl mx-auto p-6 rounded-2xl shadow-2xl border border-purple-300 bg-white">
        <div className="flex items-center gap-5 mb-8">
          <Avatar
            alt="User"
            src=""
            sx={{
              width: 65,
              height: 50,
              fontSize: '1.5rem',
              bgcolor: '#9333ea',
              color: 'white',
              borderRadius: '12px'
            }}
          >
            {user?.username?.charAt(0).toUpperCase()}
          </Avatar>
          <div>
            <h1 className="text-3xl font-extrabold text-purple-700">
              {user?.username}
            </h1>
            <p className="text-slate-500 font-medium">Welcome back to your dashboard</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <button
            onClick={() => {setshowOrders(!showOrders);}}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:scale-105 transition-all"
          >
            <FaShoppingCart className="text-xl" />
            {showOrders ? 'Hide Orders' : 'Manage Orders'}
          </button>

          <button
            onClick={() => {setShowAddress(!showAddress)}} 
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl hover:scale-105 transition-all"
          >
            <FaAddressBook className="text-xl" />
            {showAddress ? 'Hide Address' : 'Manage Address'}
          </button>

          <button
            className="flex items-center gap-3 px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-100 transition"
          >
            <FaUserEdit className="text-xl" />
            Edit Profile (Coming Soon)
          </button>

          <button
            className="flex items-center gap-3 px-6 py-3 border border-yellow-400 text-yellow-700 font-semibold rounded-xl hover:bg-yellow-50 transition"
          >
            <FaStar className="text-xl" />
            Your Reviews (Coming Soon)
          </button>

          <button
            onClick={logOutHandler}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold rounded-xl hover:scale-105 transition-all"
          >
            <IoExitOutline className="text-xl" />
            Logout
          </button>
        </div>
      </div>

      {showAddress && (
        <div className="mt-10">
          <AddressInfo address={address} />
        </div>
      )}

        {showOrders && (
        <div className="mt-10">
        <Orders/>
        </div>
      )}

      <div className="max-w-3xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-purple-800 mb-2">Your Style, Your Space</h2>
        <p className="text-slate-600 text-base">
          Customize your profile, manage delivery addresses, and track your orders all in one place.
          We’re working hard to bring you new features and more control. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default Profile;

