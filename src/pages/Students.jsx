import React, { useEffect, useState } from 'react';
import { Table } from "flowbite-react";
import { useAllStudentsQuery } from '../redux/slices/students/studentSlice';

const Students = () => {

  const {data, isLoading, isError, error} = useAllStudentsQuery();

  const [students, setStudents] = useState([]);

  useEffect(() => {
    if(data){
      console.log(data);
      setStudents(data.data);
    }
  }, [data]);

  return (
    <div>
      <h1 className='text-center mt-24 text-2xl mb-5 text-gray-700'>Students page</h1>
      {
        isLoading ? ( <p className="text-center text-2xl text-gray-700">Loading ...</p> ) : isError && (  <p className="text-center text-2xl text-red-700">{error?.data?.msg}</p> )
      }
      
      <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Student name</Table.HeadCell>
          <Table.HeadCell>ID Number</Table.HeadCell>
          <Table.HeadCell>Course</Table.HeadCell>
          <Table.HeadCell>Level</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
          {students?.map((student) => (
            <Table.Row key={student?.id_number} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {student?.fullname}
              </Table.Cell>
              <Table.Cell>{student?.id_number}</Table.Cell>
              <Table.Cell>{student?.course}</Table.Cell>
              <Table.Cell>{student?.level}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
    </div>
  )
}

export default Students
