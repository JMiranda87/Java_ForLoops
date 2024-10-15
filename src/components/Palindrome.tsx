import React, { useState } from 'react';

const Palindrome: React.FC = () => {
  // State to store the input string
  const [input, setInput] = useState<string>('');
  // State to store the palindrome check result
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);

  // Function to check if the input is a palindrome
  const checkPalindrome = () => {
    const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversed = cleanInput.split('').reverse().join('');
    setIsPalindrome(cleanInput === reversed);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Example 3: Palindrome Checker</h2>
      <div className="mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a string/number"
          className="border rounded px-2 py-1 w-full"
        />
      </div>
      <button
        onClick={checkPalindrome}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Check Palindrome
      </button>
      {isPalindrome !== null && (
        <p className="mt-4 bg-gray-100 p-4 rounded">
          {isPalindrome
            ? "Entered string/number is a palindrome."
            : "Entered string/number isn't a palindrome."}
        </p>
      )}
    </div>
  );
};

export default Palindrome;