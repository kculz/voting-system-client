import React from 'react';

const Winner = () => {
  // Sample data, replace with actual data from API or database
  const winnerData = {
    name: 'John Doe',
    party: 'Democratic Party',
    position: 'President',
    votes: 1000000,
    percentage: 55,
    image: 'https://via.placeholder.com/150',
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg">
        <h2 className="text-2xl font-bold mb-4">
          Congratulations to the Winner!
        </h2>
        <div className="flex">
          <img
            src={winnerData.image}
            alt={winnerData.name}
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-bold">{winnerData.name}</h3>
            <p className="text-gray-600">Party: {winnerData.party}</p>
            <p className="text-gray-600">Position: {winnerData.position}</p>
            <p className="text-gray-600">
              Total Votes: {winnerData.votes.toLocaleString()}
            </p>
            <p className="text-gray-600">
              Percentage of Votes: {winnerData.percentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winner;
