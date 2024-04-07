
import React from 'react';

const ContinueStep2Component = ({ image, data, setCount }) => {
  const count = 1; // Define count here

  return (
  <div className="flex flex-col items-center">


      {/* Content */}
      <div className="flex flex-col gap-10 w-full md:w-[80%] h-[75vh] mt-10">

        <div className="grid grid-cols-1 md:grid-cols-6 bg-white p-8 rounded-lg gap-4 md:gap-48">
          {/* Image */}
          <img src={image} alt="Celebration" className="w-full md:w-64 col-span-2" />

          {/* Text content */}
          <div className="flex flex-col justify-center gap-5 text-start col-span-4">
            <h2 className="text-black text-xl font-bold">{data.ContinueStep2.title}</h2>
            <div className="flex items-center mt-2">
            <span className="text-xl">⭐⭐⭐⭐⭐</span>
          </div>
            <p className="text-gray-600">{data.ContinueStep2.subtitle}</p>          
          </div>

        </div>

        {/* Continue button */}
        <button
          type="button"
          onClick={() => setCount(prev => prev + 1)}
          className="bg-black self-center text-white py-2 px-4 mt-14 rounded-md"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ContinueStep2Component;
