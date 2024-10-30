import React, { useState } from 'react'
import { useAddStudentMutation } from '../redux/slices/students/studentSlice';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddUser = () => {

    const [addStudent, { isLoading, isError, error }] = useAddStudentMutation();

    const [values, setValues] = useState({
        fullname: "",
        id_number: "",
        level: "",
        course: "",
        password: ""
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
    const navigate = useNavigate();

    const submitForm = async(e) => {
        e.preventDefault();

        try {
            const res = await addStudent(values).unwrap();
            console.log(res)
            navigate("/all-students");
            window.location.reload();
        } catch (err) {
            console.log(err);
            toast.error(err?.data?.msg || err?.data?.message || err?.message);
        }
    }
  return (
    <div className="flex flex-col items-center justify-center mt-24">
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
      <h1 className="text-2xl font-bold mb-5">Add Users || Students</h1>
      <form
        className=" max-w-2xl min-w-[500px] grid grid-cols-2  gap-4"
        onSubmit={submitForm}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="id_number" value="Student ID Number" />
          </div>
          <TextInput
            id="id_number"
            name="id_number"
            type="text"
            placeholder="75-2039244K75"
            required
            onChange={(e) =>
              setValues({ ...values, id_number: e.target.value })
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="fullname" value="Student Full-name" />
          </div>
          <TextInput
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Tapiwa Magwati"
            required
            onChange={(e) => setValues({ ...values, fullname: e.target.value })}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="level" value="Student Level (E.g NC, ND, HND)" />
          </div>
          <Select
            id="level"
            name="level"
            required
            onChange={(e) => setValues({ ...values, level: e.target.value })}
          >
            <option></option>
            <option>NC</option>
            <option>ND</option>
            <option>HND</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="course" value="Student Course" />
          </div>
          <Select
            id="course"
            name="course"
            required
            onChange={(e) => setValues({ ...values, course: e.target.value })}
          >
            <option></option>
            <option>Informaton Technology</option>
            <option>Accounting</option>
            <option>Transport & Logistics</option>
          </Select>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Student password" />
          </div>
          <TextInput
            id="password"
            name="password"
            type="password"
            placeholder=". . . . . . . ."
            required
            onChange={(e) => setValues({ ...values, password: e.target.value })}
          />
        </div>
        <div></div>

        <Button type="submit">Add User</Button>
      </form>
    </div>
  );
}

export default AddUser
