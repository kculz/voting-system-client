import React, { useState } from 'react'
import { useAddCandidateMutation } from '../redux/slices/candidates/candidateSlice';
import { useNavigate } from "react-router-dom";
import { Button, FileInput, Label, Select, Textarea, TextInput } from 'flowbite-react';
import { toast } from 'react-toastify';

const AddCandidates = () => {

  const [ values, setValues ] = useState({
    id_number: "",
    position: "",
    bio: "",
    objectives: "",
    party: "",
    avator: ""
  });


  const navigate = useNavigate();

  const [addCandidate, { isLoading, isError, error }] = useAddCandidateMutation();

const submitForm = async (e) => {
  e.preventDefault();

  const formData = new FormData();

  formData.append('id_number', values.id_number);
  formData.append('position', values.position);
  formData.append('bio', values.bio);
  formData.append('objectives', values.objectives);
  formData.append('party', values.party);
  formData.append('avator', values.avator);

  try {
    const res = await addCandidate(formData).unwrap();
    console.log(res)
    if(res.success){
      navigate('/all-candidates');
      window.location.reload();
    }else{
      toast.error(res?.data?.msg || res?.data?.error || res?.msg)
    }
  } catch (err) {
    console.log(err);
    toast.error(err?.data?.msg || err?.data?.message || err?.message);
  }
};

  return (
    <div className="flex flex-col items-center justify-center mt-24">
      {isLoading
        ? 'Loading...'
        : isError && (
            <p className="text-red-400">
              <span className="text-red-800">Error:</span> {error}{' '}
            </p>
          )}
      <h1 className="text-2xl font-bold mb-5">Add Candidates</h1>
      <form
        className=" max-w-2xl min-w-[500px] grid grid-cols-2 gap-4"
        onSubmit={submitForm}
        encType="multipart/form-data"
      >
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
            onChange={(e) =>
              setValues({ ...values, id_number: e.target.value })
            }
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="position" value="Select Student Position" />
          </div>
          <TextInput
            id="position"
            name="position"
            type="text"
            list="pos"
            placeholder="Vice President"
            required
            onChange={(e) => setValues({ ...values, position: e.target.value })}
          />
          <datalist id="pos">
            <option value="President">President</option>
            <option value="Vice President">Vice President</option>
            <option value="Treasurer">Treasurer</option>
            <option value="Secretary General">Secretary General</option>
          </datalist>
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="bio" value="Student Bio" />
          </div>
          <Textarea
            id="bio"
            name="bio"
            placeholder="Write Bio Here..."
            required
            onChange={(e) => setValues({ ...values, bio: e.target.value })}
            rows={4}
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="objectives" value="Student Objectives" />
          </div>
          <Textarea
            id="objectives"
            name="objectives"
            placeholder="Write Objectives Here..."
            required
            onChange={(e) =>
              setValues({ ...values, objectives: e.target.value })
            }
            rows={4}
          />
        </div>

        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="party" value="Select Student Party" />
          </div>
          <Select
            id="party"
            name="party"
            required
            onChange={(e) => setValues({ ...values, party: e.target.value })}
          >
            <option></option>
            <option>Youth United</option>
            <option>Campus Voices</option>
          </Select>
        </div>

        <div id="fileUpload" className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="file" value="Upload file" />
          </div>
          <FileInput
            id="avator"
            name="avator"
            helperText="A profile picture is useful to confirm student identity"
            onChange={(e) =>
              setValues({ ...values, avator: e.target.files[0] })
            }
          />
        </div>

        <Button type="submit">Add Candidate</Button>
      </form>
    </div>
  );
}

export default AddCandidates
