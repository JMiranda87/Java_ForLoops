import React, { useState, useEffect } from 'react';

const SumNaturalNumbers: React.FC = () => {
  // State to store the upper limit
  const [n, setN] = useState<number>(1000);
  // State to store the calculated sum
  const [sum, setSum] = useState<number>(0);

  // Effect to calculate the sum when n changes
  useEffect(() => {
    let total = 0;
    // For loop to calculate the sum
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    setSum(total);
  }, [n]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Example 2: Sum of Natural Numbers</h2>
      <div className="mb-4">
        <label htmlFor="limit" className="mr-2">Upper limit:</label>
        <input
          type="number"
          id="limit"
          value={n}
          onChange={(e) => setN(parseInt(e.target.value) || 0)}
          className="border rounded px-2 py-1"
        />
      </div>
      <p className="bg-gray-100 p-4 rounded">
        Sum of natural numbers from 1 to {n}: {sum}
      </p>
    </div>
  );
};

export default SumNaturalNumbers;