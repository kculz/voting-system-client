import React, { useState } from 'react'

const Register = () => {

  const [values, setValues] = useState({
    id_namber: "",
    password: ""
  });

  const submitForm = async(e) => {
    e.preventDefault();

    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Register to vote
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
                        <div>
                            <label htmlFor="id_number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your ID Number</label>
                            <input type="text" name="id_number" id="id_number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="75-2039244K75" required onChange={(e) => setValues({...values, id_namber: e.target.value})}/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required onChange={(e) => setValues({...values, password: e.target.value})}/>
                        </div>
                        
                       
                        <button type="submit" className="w-full text-gray-900 bg-blue-600 hover:bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register to vote</button>
                        
                    </form>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Register
