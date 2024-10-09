import React, { useState } from 'react'
import { useAdminLoginMutation } from '../redux/slices/users/userSlice';
import { setAdminCredentials } from '../redux/slices/auth/adminAuthSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const [adminLogin, { isError, isLoading, error }] = useAdminLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();

    try {
       const res = await adminLogin(values).unwrap();
       dispatch(setAdminCredentials({ ...res }));
       if(res.success){
          navigate('/admin-page');
          window.location.reload();
       }else{
        toast.error(res.msg);
       }
      
    } catch (err) {
      toast.error(err?.data?.msg || err?.data?.message || err.message)
    }
  }
  return (
   <div className="flex justify-center items-center h-screen bg-gray-100">
    {
      isLoading ? 'Checking Details' : isError && (
        <p className="text-red-700">Error: <span className="text-red-500">{error.data.msg}</span></p>
      )
    }
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
    <form action="#" method="POST">
      <h1 className="text-center my-10">Admin Login</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="admin@example.com" onChange={(e) => setValues({...values, email: e.target.value})} />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********" onChange={(e) => setValues({...values, password: e.target.value})}/>
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={handleLogin}>
          Login
        </button>
       
      </div>
    </form>
  </div>
</div>
  )
}

export default AdminLogin
