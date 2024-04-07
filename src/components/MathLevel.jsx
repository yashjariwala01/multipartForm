import React, { useState } from 'react';

const MathLevel = ({ setCount, label, updateForm, data}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOptionClick = (index, option) => {
    updateForm({ target: { name: data.label, value: option.topic } });
    setActiveIndex(index);
  };

  return (
    // <div className="items-center p-4 h-[80vh] flex flex-col justify-center gap-6">
    //   <div className='flex flex-col gap-3'>
    //   <h2 className="text-2xl font-bold">what is your math comfort level</h2>
    //   <h6 className="text-sm">choose highest level you feel confident in - you can always adjust later
    //   </h6>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
    //     {data.data.map((element, index) => (
    //       <button key={index} className={`flex flex-col gap-5 justify-between p-4 border border-gray-300 bg-white rounded-md cursor-pointer ${activeIndex === index ? ' shadow-xl' : ''}`} onClick={(e) => { e.preventDefault(); handleOptionClick(index, element); }}>
    //         <img src={element.image} width={180} alt="" />
    //       <div>
    //           <p className="font-semibold">{element.topic}</p>
    //           <p className="text-gray-400">{element.level}  </p>
    //       </div>
    //       </button>
    //     ))}
    //   </div>
      // <button
      //     className={` text-white py-2 px-4 rounded-md  ${activeIndex || activeIndex === 0 ? 'bg-black': 'bg-gray-300'} mt-10`}
      //     type="button"
      //     disabled={activeIndex === null}
      //     onClick={() => setCount((prev) => prev + 1)}
      //   >
      //     Continue
      //   </button>
    // </div>

    <div className="flex flex-col items-center md:mt-[100px] lg:mt-[0px]">

      {/* Main content */}
      <div className="items-center p-4 h-full md:h-[80vh] flex flex-col justify-center gap-6">

        {/* Title and subtitle */}
        <div className='flex flex-col gap-3'>
          <h2 className="text-2xl font-bold">What is your math comfort level?</h2>
          <h6 className="text-sm">Choose the highest level you feel confident in - you can always adjust later.</h6>
        </div>

        {/* Math level options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {data.data.map((element, index) => (
            <button type={'button'} key={index} className={`flex flex-col gap-5 justify-between p-4 border border-gray-300 bg-white rounded-md cursor-pointer ${activeIndex === index ? 'shadow-xl' : ''}`} onClick={() => handleOptionClick(index, element)}>
              <img src={element.image} width={180} alt="" />
              <div>
                <p className="font-semibold">{element.topic}</p>
                <p className="text-gray-400">{element.level}</p>
              </div>
            </button>
          ))}
        </div>
           <button
          className={` text-white py-2 px-4 rounded-md  ${activeIndex || activeIndex === 0 ? 'bg-black': 'bg-gray-300'} mt-10`}
          type="button"
          disabled={activeIndex === null}
          onClick={() => setCount((prev) => prev + 1)}
        >
          Continue
        </button>

      </div>
    </div>
  );
};

export default MathLevel;
