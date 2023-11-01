import React, { useState } from "react";
import Input from "../../components/Input/Index";
import List from "./DeferredValue";

const DeferredValue = () => {
  const [input, setInput] = useState("");
  function handleChagne(e) {
    setInput(e.target.value);
  }
  return (
    <>
      We can make search fast with the help of useDeferredValue
      <Input
        type="text"
        value={input}
        onChange={handleChagne}
        className="bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
      />
      <List input={input} />
    </>
  );
};

export default DeferredValue;
