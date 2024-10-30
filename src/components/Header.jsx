import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { useLogoutMutation } from '../redux/slices/users/userSlice';
import { clearAdminCredentials } from '../redux/slices/auth/adminAuthSlice';
import { clearCredentials } from '../redux/slices/auth/authSlice';

const Header = () => {

  const { user } = useSelector((state) => state.auth);
  const { admin } = useSelector((state) => state.adminAuth);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      console.log('Logging out...');
      await logout().unwrap();
      console.log('Logout mutation successful');
      if (admin) {
        console.log('Dispatching clearAdminCredentials');
        dispatch(clearAdminCredentials());
        navigate('/admin-login');
      } else {
        console.log('Dispatching clearCredentials');
        dispatch(clearCredentials());
        navigate('/login');
      }
    } catch (err) {
      console.error('Logout error:', err);
      toast.error(err?.data?.msg || err?.data?.error);
    }
  };

  return (
    <div className='flex justify-between bg-gray-400 h-24 w-screen gap-3 items-center px-5 md:px-10'>
      <Link to="/home">Voting System</Link>
      <ul className='flex gap-3'>
        <Link to="/home">Home</Link>
       
    {
      (user || admin) ? (
        <p className='cursor-pointer' onClick={() => handleLogout()} >Logout</p>
      ) : ''
    }
        
      </ul>
    </div>
  )
}

export default Header
