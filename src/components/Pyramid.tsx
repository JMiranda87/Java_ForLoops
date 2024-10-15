import React, { useState } from 'react';

const Pyramid: React.FC = () => {
  // State to store the number of rows
  const [rows, setRows] = useState<number>(5);

  // Function to generate the pyramid
  const generatePyramid = () => {
    const pyramid = [];
    // Outer loop for rows
    for (let i = 1; i <= rows; i++) {
      let row = '';
      // Inner loop for columns
      for (let j = 1; j <= i; j++) {
        row += '* ';
      }
      pyramid.push(<div key={i}>{row}</div>);
    }
    return pyramid;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Example 4: Pyramid</h2>
      <div className="mb-4">
        <label htmlFor="rows" className="mr-2">Number of rows:</label>
        <input
          type="number"
          id="rows"
          value={rows}
          onChange={(e) => setRows(parseInt(e.target.value) || 0)}
          className="border rounded px-2 py-1"
        />
      </div>
      <div className="bg-gray-100 p-4 rounded font-mono">
        {generatePyramid()}
      </div>
    </div>
  );
};

export default Pyramid;