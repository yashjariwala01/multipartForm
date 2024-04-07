
import React, { useState } from 'react';

const LearningStyle = ({ updateForm, setCount, data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleOptionClick = (option, index) => {
    updateForm({ target: { name: data.LearningStyle.label, value: option } });
    setActiveIndex(index);
  };

  return (
    <div className="bg-white rounded-md flex flex-col justify-center gap-1 md:gap-8 lg:mt-[-50px] md:p-12 md:max-w-md lg:w-[1000vw] w-[50vw] ">
  <div className='title-text flex flex-col gap-1 w-[60vw] justify-center items-center self-center'>
    <h2 className={`text-3xl font-semibold text-center ${data.LearningStyle.titleClass} self-center`}>{data.LearningStyle.title}</h2>
    <span className={`text-center text-gray-600 ${data.LearningStyle.subtitleClass}`}>{data.LearningStyle.subtitle}</span>
  </div>
  <ul className="main-text flex flex-col justify-center items-center self-center">
    {data.LearningStyle.LearningOptions.map((option, index) => (
      <button
        key={index}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          handleOptionClick(option.description, index);
        }}
        className={`buttons mb-2 flex border border-gray-200 hover:shadow-md items-center bg-white w-[50vw] ${
          activeIndex === index ? 'border-2 border-black' : null
        }`}
      >
        <img className="w-6 h-6 rounded-full mr-2" src={option.avatar} alt="" />
        <div className="flex gap-2 items-center text-left py-1 px-2 rounded-md bg-white focus:outline-none justify-self-center">
          {option.description}
        </div>
      </button>
    ))}
  </ul>
  <div className="mt-4 flex justify-center">
    <button
      className={`text-white py-2 px-4 rounded-md ${activeIndex || activeIndex === 0 ? 'bg-black' : 'bg-gray-300'}`}
      disabled={activeIndex === null}
      type="button"
      onClick={() => setCount((prev) => prev + 1)}
    >
      Continue
    </button>
  </div>
</div>

  );
};

export default LearningStyle;