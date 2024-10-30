import React, { useEffect, useState } from 'react'
import { useAllCandidatesQuery } from '../redux/slices/candidates/candidateSlice';
import { Table } from 'flowbite-react';

const Candidate = () => {
  const {data, isLoading, isError, error} = useAllCandidatesQuery();

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    if(data){
      console.log(data);
      setCandidates(data.data);
    }
  }, [data]);
  return (
    <div>
      <h1 className='text-center mt-24 text-2xl mb-5 text-gray-700'>Candidates page</h1>
      {
        isLoading ? ( <p className="text-center text-2xl text-gray-700">Loading ...</p> ) : isError && (  <p className="text-center text-2xl text-gray-700">{error?.data?.msg}</p> )
      }
      
      <div className="overflow-x-auto">
      <Table>
        <Table.Head>
          <Table.HeadCell>Candidate Name</Table.HeadCell>
          <Table.HeadCell>Position</Table.HeadCell>
          <Table.HeadCell>ID Number</Table.HeadCell>
          <Table.HeadCell>Course</Table.HeadCell>
          <Table.HeadCell>Level</Table.HeadCell>
          <Table.HeadCell>Party</Table.HeadCell>
          <Table.HeadCell>Votes</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {candidates.map((candidate) => (
            <Table.Row key={candidate.id_number} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {candidate.User.fullname}
              </Table.Cell>
              <Table.Cell>{candidate.position}</Table.Cell>
              <Table.Cell>{candidate.User.id_number}</Table.Cell>
              <Table.Cell>{candidate.User.course}</Table.Cell>
              <Table.Cell>{candidate.User.level}</Table.Cell>
              <Table.Cell>{candidate.party}</Table.Cell>
              <Table.Cell>{candidate.votes}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
    </div>
  )
}

export default Candidate
