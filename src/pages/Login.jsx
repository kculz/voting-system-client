import React, { useEffect, useState } from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLoginMutation } from '../redux/slices/users/userSlice';
import { setCredentials } from '../redux/slices/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {

    const [values, setValues] = useState({
        id_number: "",
        password: ""
    });

    const navigate = useNavigate();

    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
      if(user){
        navigate("/home");
      }
    }, [navigate, user]);

    const [login, { isLoading, isError, error }] = useLoginMutation();

    const submitForm = async(e) => {
        e.preventDefault();

        try {
           const res = await login(values).unwrap();
           dispatch(setCredentials({ ...res }));
           console.log(res);
           if (res.success) {
             navigate('/admin-page');
             window.location.reload();
           } else {
             toast.error(res.msg);
           }
        } catch (err) {
            console.log(err);
            toast.error(err?.data?.msg || err?.data?.message || err?.message);
        }
    }
  return (
    <div className='flex flex-col items-center justify-center mt-24'>
      {
        isLoading ? "Loading..." : isError && <p className="text-red-400"><span className="text-red-800">Error:</span> {error.data.msg} </p>
      }
        <h1 className='text-2xl font-bold mb-5'>Login</h1>
      <form className="flex max-w-2xl min-w-[300px] flex-col gap-4" onSubmit={submitForm}>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="id_number" value="Your ID Number" />
          </div>
          <TextInput
            id="id_number"
            name="id_number"
            type="text"
            placeholder="75-2039244K75"
            required
            onChange={(e) => setValues({...values, id_number: e.target.value})}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput
            id="password"
            name="password"
            type="password" 
            required
            onChange={(e) => setValues({...values, password: e.target.value})}
          />
        </div>
        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <Button type="submit">login</Button>
      </form>
    </div>
  );
}

export default Login
