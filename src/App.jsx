import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import MathLevel from './components/MathLevel';
import SetTimeOutComponent from './components/SetTimeOutComponent';
import pulley from './assets/pulley.png';
import Monster from './assets/monster.jpg';
import Alien from './assets/alien.jpeg'
import PathOptions from './components/PathOptions';
import Result from './components/Result';
import { data } from './Data';
import LearningStyle from './components/LearningStyle';
import ContinueStep1 from './components/ContinueStep1';
import ContinueStep2 from './components/ContinueStep2';
import { IoIosArrowBack } from "react-icons/io";


function App() {
  // Retrieve count from local storage, default to 1 if not found
  const initialCount = localStorage.getItem('count') ? parseInt(localStorage.getItem('count')) : 1;
  const [count, setCount] = useState(initialCount);

  // Retrieve formData from local storage, default to an empty object if not found
  const initialFormData = localStorage.getItem('formData') ? JSON.parse(localStorage.getItem('formData')) : {
    intro: "",
    LearningStyle: "",
    MathsLevel: "",
    path: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  // Save count and formData to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('count', count.toString());
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [count, formData]);

  // Function to update form data
  const updateForm = (object) => {
    setFormData({
      ...formData,
      [object.target.name]: object.target.value,
    });
  };

  return (
    <div className='flex flex-col items-center gap-10 w-full'>
      {/* Progress bar */}

      <div className={`progress-bar w-full md:w-[80vw] relative ${count <= 5 ? 'bg-gray-300 h-1' : ''}`}>
        {/* Progress indicator */}
        <p className={`${count === 1 ? 'w-[20%]' : count === 2 ? 'w-[40%]' : count === 3 ? 'w-[60%]' : count === 4 ? 'w-[80%]' : count === 5 ? 'w-[100%]' : null} ${count <= 5 ? 'bg-blue-400 h-1' : null} `}></p>
        {/* Back button */}
        {count <= 5 && (
          <button type="button" onClick={() => setCount(prev => prev - 1)} disabled={count <= 1} className="absolute left-0 md:left-[-60px] top-[-15px] bg-white p-2 rounded-full"><IoIosArrowBack /></button>
        )}
      </div>


      {/* Form steps */}
      <form >
        {count === 1 && <Intro formData={formData} updateForm={updateForm} setCount={setCount} data={data} />}
        {count === 2 && <LearningStyle updateForm={updateForm} setCount={setCount} data={data} />}
        {count === 3 && <ContinueStep1 data={data} image={pulley} setCount={setCount} />}
        {count === 4 && <MathLevel setCount={setCount} updateForm={updateForm} data={data.MathLevel} />}
        {count === 5 && <ContinueStep2 image={Alien} data={data} setCount={setCount} />}
        {count === 6 && <SetTimeOutComponent setCount={setCount} />}
        {count === 7 && <PathOptions updateForm={updateForm} setCount={setCount} data={data.PathOption} />}
      </form>

      {/* Result component */}
      {count === 8 && <Result formData={formData} setCount={setCount} />}
    </div>
  );
}

export default App;
