import React, { useEffect } from 'react';
import '../App.css';

const SetTimeOutComponent = ({ setCount }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount((prev) => prev + 1);
      console.log('hello');
    }, 3000);

    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout when component unmounts
  }, [setCount]); // Adding setCount to the dependencies array to ensure effect runs when setCount changes

  return (
    <div className='flex flex-col justify-center items-center p-16 gap-5 '>
      <div className='loader'></div>
      <div className='flex justify-center items-center'>
        <h3 className='text-2xl font-semibold'>
          Finding learning path recommendation for you based on your responses
        </h3>
      </div>
    </div>
  );
};

export default SetTimeOutComponent;
