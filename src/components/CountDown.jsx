import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CountDown = () => {
  const navigate = useNavigate();
  const [days, setDays] = useState(5);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else {
        navigate('/winner');
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds, history]);

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
