import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4">Counter: {count}</h2>
      <button
        onClick={increment}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
    </div>
  );
}
