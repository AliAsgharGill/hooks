import React, { useRef, useState } from "react";
// import Input from "../../components/Input/Index";

const RefComponent = () => {
  const [userName, setUserName] = useState("Ali");
  const refElement = useRef("");
  console.log(refElement);
  function Reset() {
    
    setUserName("");
    refElement.current.focus();    
    refElement.current.style.color="black"
  }
  function ChangeColor() {
    refElement.current.style.color="red"  
  }
  return (
    <>
      <p>useRef Hook</p>
      <input
        ref={refElement}
        name="text"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="bg-slate-300 outline-none font-bold p-4 rounded-lg"
      ></input>
      <input
        type="button"
        name="button"
        value="Reset"
        className="bg-green-400 outline-none font-bold p-4 rounded-lg 
        ml-4"
        onClick={Reset}
      ></input>
      <input
        type="button"
        name="button"
        value="Make text red"
        className="bg-green-400 outline-none font-bold p-4 rounded-lg 
        ml-4"
        onClick={ChangeColor}
      ></input>
    </>
  );
};

export default RefComponent;
