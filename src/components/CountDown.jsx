import React, { useState, useEffect } from 'react';

const launchDate = new Date('2024-10-24T00:00:00.000Z'); // Specify the end date here

const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = getTimeLeft();
      setDays(timeLeft.days);
      setHours(timeLeft.hours);
      setMinutes(timeLeft.minutes);
      setSeconds(timeLeft.seconds);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
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

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <h1>Voting Ends in:</h1>
        <h2 className='text-gray-800 font-semibold text-2xl'>
          {days}D: {hours} H: {minutes} M: {seconds} s
        </h2>
      </div>
    </div>
  );
};

export default CountDown;