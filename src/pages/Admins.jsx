import React, { useEffect, useState } from 'react'
import { useGetAllAdminQuery } from '../redux/slices/users/userSlice';
import { Table } from 'flowbite-react';

const Admins = () => {

    const [admins, setAdmins] = useState([]);

    const { data, isLoading, isError, error } = useGetAllAdminQuery();

    useEffect(() => {
        if(data){
            console.log(data)
            setAdmins(data.data);
        }
    }, [data])

  return (
    <div>
      <h1 className='text-center mt-24 text-2xl mb-5 text-gray-700'>Admins page</h1>
      {
        isLoading ? ( <p className="text-center text-2xl text-gray-700">Loading ...</p> ) : isError && (  <p className="text-center text-2xl text-red-700">{error?.data?.msg}</p> )
      }
      
      <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Admin Email</Table.HeadCell>
          
        </Table.Head>
        <Table.Body className="divide-y">
          {admins?.map((admin) => (
            <Table.Row key={admin?.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {admin?.id}
              </Table.Cell>
              <Table.Cell>{admin?.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
    </div>
  )
}

export default Admins
