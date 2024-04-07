import React from 'react';

function Result({ formData, setCount }) {
  return (
    <div className="bg-blue-100 rounded-lg shadow-lg p-8 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
      {/* Home button */}
      <button className="text-start mb-5" onClick={() => setCount(1)}>Home</button>
      {/* Title */}
      <h2 className="underline text-3xl font-semibold mb-6 text-center">Your Results</h2>
      {/* Grid layout for result items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Intro */}
        <div className="result-item">
          <p className="text-lg font-semibold">Intro:</p>
          <p className="text-gray-700">{formData.intro}</p>
        </div>
        {/* Learning Style */}
        <div className="result-item">
          <p className="text-lg font-semibold">Learning Style:</p>
          <p className="text-gray-700">{formData.LearningStyle}</p>
        </div>
        {/* Maths Level */}
        <div className="result-item">
          <p className="text-lg font-semibold">Maths Level:</p>
          <p className="text-gray-700">{formData.MathsLevel}</p>
        </div>
        {/* Path */}
        <div className="result-item">
          <p className="text-lg font-semibold">Path:</p>
          <p className="text-gray-700">{formData.path}</p>
        </div>
      </div>
    </div>
  );
}

export default Result;
