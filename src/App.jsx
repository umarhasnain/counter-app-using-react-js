import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const App = () => {
  const [count, setCount] = useState(0);
  console.log(useState);

  const increment = () => {
    setCount(count + 1)
  }
  const decrement = () => {
    setCount(count - 1)
  }

  return (
    <div className="w-full flex flex-col justify-center items-center gap-12 my-40 text-3xl ">
      <h1 className="font-bold text-5xl">Counter App</h1>
      <button><FaPlus onClick={increment} /></button>
      <h1 className="text-6xl bold">{count}</h1>
     <button disabled={count <= 0}> <FaMinus onClick={decrement}/></button>
    </div>
  );
};

export default App;
