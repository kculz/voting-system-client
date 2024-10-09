import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { useLogoutMutation } from '../redux/slices/users/userSlice';

const Header = () => {

  const { user } = useSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

   const handleLogout = async () => {
     try {
       await logout().unwrap();
       dispatch(clearCredentials());
       navigate('/login');
     } catch (err) {
      //  toast.error(err?.data?.msg || err?.data?.error);
     }
   };

  return (
    <div className='flex justify-between bg-gray-400 h-24 w-screen gap-3 items-center px-5 md:px-10'>
      <Link to="/home">Voting System</Link>
      <ul className='flex gap-3'>
        <Link to="/home">Home</Link>
        <Link to="/admin">Admin</Link>
        {
          user ? ( <p className='cursor-pointer' onClick={() => handleLogout()} >Logout</p> ) : ''
        }
        
      </ul>
    </div>
  )
}

export default Header
