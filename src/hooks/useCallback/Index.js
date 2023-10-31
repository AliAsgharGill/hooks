import React, { useCallback, useState } from "react";
import Input from "../../components/Input/Index";
import Child from "./Child";
const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState([]);
  const incrementOne = () => {
    setCounter(counter + 1);
  };

  const fun = useCallback(() => {
    console.log("Hello Developer");
  }, [setCounterTwo]);
  return (
    <>
      <Child counterTwo={counterTwo} fun={fun} />
      <Input
        type="button"
        onClick={incrementOne}
        className="bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
        value="Increment"
      />
      {counter}
    </>
  );
};

export default Parent;
