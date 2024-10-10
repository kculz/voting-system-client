import React, { useState } from 'react'
import { useAdminRegisterMutation } from '../redux/slices/users/userSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddAdmin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        role: ""
    });

    const flattenErrorValues = (error) => {
      const errors = [];

      Object.keys(error).forEach((key) => {
        if (typeof error[key] === 'object') {
          errors.push(...flattenErrorValues(error[key]));
        } else if (Array.isArray(error[key])) {
          errors.push(...error[key]);
        } else {
          errors.push(error[key]);
        }
      });

      return errors;
    };

    const [adminRegister, { isLoading, isError, error }] = useAdminRegisterMutation();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const res = await adminRegister(values).unwrap();
            if(res.success){
              navigate('/admins');
              window.location.reload();
            }else{
              toast.error(res.error);
            }
            
        } catch (err) {
            toast.error(err?.data?.msg || err?.data?.message || err?.message)
        }
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <form action="#" method="POST">
          {isLoading ? (
            'Checking Details'
          ) : isError ? (
            <p className="text-red-700 text-lg">
             
                {flattenErrorValues(error).map((value, index) => (
                  <p className="text-red-500 text-sm ml-3" key={index}>
                    {value}
                  </p>
                ))}
            </p>
          ) : null}

          <h1 className="text-center my-10">Add Admin Page</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="admin@example.com"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="**********"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onClick={(e) => setValues({ ...values, role: e.target.value })}
            >
              <option value=""></option>
              <option value="admin">Admin</option>
              <option value="super-admin">Super Admin</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleSubmit}
            >
              {isLoading ? 'Adding Admin' : 'Add Admin'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAdmin
