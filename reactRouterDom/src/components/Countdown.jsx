import React, { useEffect, useRef, useState } from 'react';

export default function Countdown() {
  const [timer, setTimer] = useState('00:00:10'); 
  const [isActive, setIsActive] = useState(false); 
  const ref = useRef(null);

  function getTimeRemaining(endTime) {
    const total = Date.parse(endTime) - Date.parse(new Date());
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const seconds = Math.floor((total / 1000) % 60);
    return { total, hours, minutes, seconds };
  }

  function startTimer(deadline) {
    const { total, hours, minutes, seconds } = getTimeRemaining(deadline);

    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : '0' + hours) +
          ':' +
          (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds)
      );
    } else {
      clearInterval(ref.current);
      setIsActive(false);
    }
  }

  function clearTimer(deadline) {
    setTimer('00:00:10');
    if (ref.current) clearInterval(ref.current);
    const id = setInterval(() => {
      startTimer(deadline);
    }, 1000);
    ref.current = id;
  }

  function getDeadTime() {
    const deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 10);
    return deadline;
  }

  
  function reset() {
    clearTimer(getDeadTime());
    setIsActive(false);
  }

  useEffect(() => {
    clearTimer(getDeadTime());
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, []);

  const startCountdown = () => {
    if (!isActive) {
      clearTimer(getDeadTime());
      setIsActive(true);
    }
  };

  const stopCountdown = () => {
    if (ref.current) {
      clearInterval(ref.current);
      setIsActive(false);
    }
  };

  return (
    <div className='h-full bg-amber-900 p-8 flex flex-col justify-center items-center gap-5'>
      <div className='bg-slate-800 p-4 w-60 h-60 rounded-full flex justify-center items-center'>
        <h1 className='font-bold text-3xl text-white'>{timer}</h1>
      </div>

      <div className='buttons w-60 flex justify-between'>
        <button
          onClick={startCountdown}
          type='button'
          className='btn p-2 px-4 rounded-md bg-blue-600 text-white font-bold text-lg'
          disabled={isActive}
        >
          Start
        </button>
        <button
          onClick={stopCountdown}
          type='button'
          className='btn p-2 px-4 rounded-md bg-blue-600 text-white font-bold text-lg'
          disabled={!isActive}
        >
          Stop
        </button>
        <button
          onClick={reset}
          type='button'
          className='btn p-2 px-4 rounded-md bg-red-600 text-white font-bold text-lg'
        >
          Reset
        </button>
      </div>
    </div>
  );
}
