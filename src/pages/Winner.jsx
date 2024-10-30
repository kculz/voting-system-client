import React, { useEffect } from 'react';
import { useGetWinnerQuery } from '../redux/slices/candidates/candidateSlice';
import VoteChart from './VoteChart';

const Winner = () => {
  const { data } = useGetWinnerQuery();

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl text-center font-bold mb-4">Congratulations to the Winners!</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
        {data?.success && Object.keys(data.data).map((position) => (
          <div key={position} className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold mb-4">{position}</h3>
            <div className="flex">
              <img
                src={data.data[position].avator}
                alt={data.data[position].User?.fullname || 'Unknown'}
                className="w-24 h-24 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">{data.data[position].User.fullname || 'Unknown'}</h3>
                <p className="text-gray-600">Party: {data.data[position].party}</p>
                <p className="text-gray-600">Position: {position}</p>
                {data.data[position].User && (
                  <>
                    <p className="text-gray-600">Level: {data.data[position].User.level}</p>
                    <p className="text-gray-600">Course: {data.data[position].User.course}</p>
                  </>
                )}
                <p className="text-gray-600">
                  Total Votes: {data.data[position].votes.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h1 className="mt-10 text-2xl text-black text-center font-semibold ">Votes Stats</h1>
      <div className="mt-7">
        <VoteChart />
      </div>
    </div>
  );
};

export default Winner;