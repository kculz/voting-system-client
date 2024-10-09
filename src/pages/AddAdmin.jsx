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

    const [addAdmin, { isLoading, isError, error }] = useAdminRegisterMutation();

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            await addAdmin(values).unwrap();
            navigate("/admins");
            window.location.reload();
        } catch (err) {
            toast.error(err?.data?.msg || err?.data?.message || err?.message)
        }
    }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <form action="#" method="POST">
          {isLoading
            ? 'Checking Details'
            : isError && (
                <p className="text-red-700">
                  Error: <span className="text-red-500">{error.data.msg}</span>
                </p>
              )}
          <h1 className='text-center my-10'>Add Admin Page</h1>
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
