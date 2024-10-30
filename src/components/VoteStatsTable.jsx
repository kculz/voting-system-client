import React, { useEffect } from 'react';
import { useGetVotesByPositionQuery } from '../redux/slices/votes/voteSlice';

const VoteStatsTable = () => {
  const { data } = useGetVotesByPositionQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  if (!data) return <p>Loading...</p>;

  const { data: votesData, totalStudents, totalVoted } = data;

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Party</th>
              <th scope="col" className="px-6 py-3">Position</th>
              <th scope="col" className="px-6 py-3">Votes</th>
              <th scope="col" className="px-6 py-3">%</th>
              <th scope="col" className="px-6 py-3">Total Voters</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(votesData).map(([position, parties]) =>
              Object.entries(parties).map(([party, votes]) => (
                <tr
                  key={`${position}-${party}`}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {party}
                  </td>
                  <td className="px-6 py-4">{position}</td>
                  <td className="px-6 py-4">{votes}</td>
                  <td className="px-6 py-4">
                    {totalVoted > 0 ? ((votes / totalVoted) * 100).toFixed(2) : '0'}%
                  </td>
                  <td className="px-6 py-4">{totalVoted}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          Total Students: {totalStudents}
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Total Students Voted: {totalVoted} ({totalStudents > 0 ? ((totalVoted / totalStudents) * 100).toFixed(2) : '0'}%)
        </p>
      </div>
    </div>
  );
};

export default VoteStatsTable;
