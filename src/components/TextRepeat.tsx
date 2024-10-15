import React, { useState } from 'react';

const TextRepeat: React.FC = () => {
  // State to store the number of repetitions
  const [count, setCount] = useState<number>(5);
  
  // Function to generate an array of repeated text
  const generateRepeatedText = () => {
    return Array.from({ length: count }, (_, i) => (
      <p key={i}>React is fun</p>
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Example 1: Display Text Multiple Times</h2>
      <div className="mb-4">
        <label htmlFor="count" className="mr-2">Number of repetitions:</label>
        <input
          type="number"
          id="count"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value) || 0)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded">
        {generateRepeatedText()}
      </div>
    </div>
  );
};

export default TextRepeat;