import { Avatar, Button, Menu, MenuItem } from '@mui/material';
import React from 'react'
import { BiUser } from 'react-icons/bi';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import { IoExitOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import BackDrop from './BackDrop';
import { logOutUser } from '../../store/actions';

const UserMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logOutHandler = () => {
        dispatch(logOutUser(navigate));
      };
  
    return (

        //avatar icon
        <div className="flex items-center pr-4">
        <div
            className="flex items-center rounded-md cursor-pointer hover:shadow-md transition px-1 py-1"
            onClick={handleClick}
        >
            <Avatar
            alt="User"
            src=""
            sx={{
                width: 45,
                height: 32,
                fontSize: '1rem',
                bgcolor: '#6d28d9', // Deep purple
                color: 'white',
                borderRadius: '10px' // <<< Rounded rectangle instead of circle
            }}
            >
            {user?.username?.charAt(0).toUpperCase()}
            </Avatar>
        </div>

        <Menu
          sx={{ width:"400px" }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            sx: {width: 160},
          }}
        >

        <Link to="/profile">
          <MenuItem className="flex gap-2 items-center" onClick={handleClose}>
            <FaUserCircle className="text-xl text-primary" />
            <span className="font-bold text-[16px] mt-1 flex items-center gap-1">
              Hi, {user?.username}
            </span>
          </MenuItem>
        </Link>


          <Link to="/profile/orders">
            <MenuItem className="flex gap-2" 
                onClick={handleClose}>
                    <FaShoppingCart className='text-xl'/>
                    <span className='font-semibold'>
                        My Purchases
                    </span>
            </MenuItem>
          </Link>

            <MenuItem className="flex gap-2" 
                onClick={logOutHandler}>
                    <div className='font-semibold w-full flex gap-2 items-center bg-button-gradient px-4 py-1 text-white rounded-xs'>
                    <IoExitOutline className='text-xl'/>
                    <span className='font-bold text-[16px] mt-1'>
                        LogOut
                    </span>
                    </div>
            </MenuItem>

        </Menu>

        {open && <BackDrop />}
      </div>
    );
}

export default UserMenu