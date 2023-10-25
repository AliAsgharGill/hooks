import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Index";

const HookTwo = () => {
  const [num, setNum] = useState(0);
  const [multi, setMulti] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => setMulti(num * 2), [num]);
  return (
    <>
      <div>
        Things that will only update and data only render, when num variable get
        updated.
      </div>
      <p>Number:{num}</p>
      <p>Mulitplicatoin with 2: {multi}</p>
      <Input className="bg-gray-400 p-4 " onClick={() => setNum(num + 1)} />
      <div>Things that will update on every render</div>
      <Input
        type="text"
        name="number"
        value={counter}
        className="bg-orange-500 font-bold p-4 m-1 rounded-lg ml-28"
        onChange={(e) => setCounter(e.target.value)}
      />
      <Input
        type="button"
        name="button"
        value="change value"
        onClick={() => setCounter(counter + 1)}
        className='bg-red-500 font-bold p-4 rounded' 
      />
    </>
  );
};

export default HookTwo;
