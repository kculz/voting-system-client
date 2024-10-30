import React, { useState, useEffect } from 'react';
import {
  EntertainmentCandidates,
  FinancialManagerCandidates,
  PresidentalCandidates,
  VicePresidentialCandidates,
} from '../components';

const launchDate = new Date('2024-10-31T00:00:00.000Z'); // Specify the end date here

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const remainingTime = getTimeLeft();

      if (
        remainingTime.days === 0 &&
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        window.location.href = '/winners';
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getTimeLeft() {
    const currentDate = new Date();
    const timeDifference = launchDate - currentDate;

    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  if (
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0
  ) {
    return null; // Optionally, you could display a loading spinner or message here.
  }

  return (
    <div>

      <div className="flex justify-center items-center">
        <div>
          <h1>Voting Ends in:</h1>
          <h2 className="text-gray-800 font-semibold text-2xl">
            {timeLeft.days}D: {timeLeft.hours}H: {timeLeft.minutes}M: {timeLeft.seconds}S
          </h2>
        </div>
      </div>

      <div>
        <h1 className="text-2xl text-black font-semibold md:px-10 my-10">
          Presidential Candidates
        </h1>
        <PresidentalCandidates />
      </div>

      <div>
        <h1 className="text-2xl text-black font-semibold md:px-10 my-10">
          Vice Presidential Candidates
        </h1>
        <VicePresidentialCandidates />
      </div>

      <div>
        <h1 className="text-2xl text-black font-semibold md:px-10 my-10">
          Treasurer Candidates
        </h1>
        <FinancialManagerCandidates />
      </div>

      <div>
        <h1 className="text-2xl text-black font-semibold md:px-10 my-10">
          Secretary General Candidates
        </h1>
        <EntertainmentCandidates />
      </div>
    </div>
  );
};

export default Home;
