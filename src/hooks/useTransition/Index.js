import React, { useState, useTransition } from "react";
import Input from "../../components/Input/Index";

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const HandleChange = () => {
    let i = 0;

    console.log("Code Executed");
    setCounter(counter + 1);

    // code in startTransition will not exceute immeditly
    startTransition(() => {
      console.log("Code In Transition Executed");
      setCounterTwo(counter * 2);
    });
  };
  return (
    <>
      <div>
        {isPending ? <div>Loading...</div> : <div>Value is {counter}</div>}
      </div>

      <p>Mulitplication of it is {counterTwo}</p>

      <Input
        type="button"
        name="update"
        onClick={HandleChange}
        value="Update"
        className="outline-none bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
      />
    </>
  );
};

export default Transition;
