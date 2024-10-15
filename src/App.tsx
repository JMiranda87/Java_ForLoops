import React from 'react';
import TextRepeat from './components/TextRepeat';
import SumNaturalNumbers from './components/SumNaturalNumbers';
import Palindrome from './components/Palindrome';
import Pyramid from './components/Pyramid';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">React TypeScript Examples</h1>
      
      <div className="space-y-8">
        <TextRepeat />
        <SumNaturalNumbers />
        <Palindrome />
        <Pyramid />
      </div>
    </div>
  );
}

export default App;