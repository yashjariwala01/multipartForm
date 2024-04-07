import React, { useState } from 'react';
import demoImage from '../assets/images.png';


const LearningPaths = ({ updateForm, setCount,data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOptionClick = (index, option) => {
    updateForm({ target: { name: data.label, value: option.level } });
    setActiveIndex(index);
    // Delay setting count by 1000 milliseconds (1 second)
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 800);
  };

  return (
    <div className="py-8">
      <div className="flex flex-col gap-8 max-w-3xl mx-auto px-4">
        <div>
          <h2 className="text-3xl font-bold mb-4">Learning paths based on your answers</h2>
          <p className="text-gray-600 mb-6">Choose one to get started. You can switch anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.data.map((element, index) => (
            <div key={index} onClick={() => handleOptionClick(index, element)} className={`bg-white rounded-lg py-10 px-1 relative grid grid-cols-5 items-center gap-1 border border-solid border-gray-300 cursor-pointer hover:border hover:border-black ${activeIndex === index ? 'bg-blue-400' : ''}`}>
              {element.mostPopular &&
                <div className="absolute top-[-13px] left-[100px] bg-yellow-400 font-medium py-1 px-4 rounded-2xl">
                  MOST POPULAR
                </div>
              }
              <div className='col-span-3 px-2'>
                <p className="text-gray-600 text-left">
                  <span className="font-bold">{element.level} </span>
                  {element.description}
                </p>
              </div>
              <div className="col-span-2">
                <img src={demoImage} alt="Demo" className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningPaths;
