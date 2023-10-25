import React, { useState } from "react";
import Input from "../../components/Input/Index";

const Home = () => {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('Ali')

  
  return (
    <>      

      <Input
        type="text"
        name="number"
        value={counter}
        className="bg-orange-500 font-bold p-4 m-1 rounded-lg ml-28"
        onChange={(e)=>setCounter(e.target.value)}
      />
      
      <Input
        type="button"
        name="increment"
        value="increment"
        className="bg-blue-700 font-bold text-white p-4 m-1 rounded-lg"
        onClick= { ()=>setCounter(counter + 1)}
      />
      <Input
        type="button"
        name="decrement"
        value="decrement"
        className="bg-gray-700 font-bold text-white p-4 m-1 rounded-lg"
        onClick={() => {
          setCounter(counter - 1);
        }}
      />
      <Input
        type="text"
        name="number"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="bg-orange-500 font-bold p-4 m-1 rounded-lg ml-28"
      />
      <Input
        type="button"
        name="decrement"
        value="Update"        
        className="bg-gray-700 font-bold text-white p-4 m-1 rounded-lg"
        onClick={() => {
          setName("Ali Asghar");
        }}
    
      />
    </>
  );
};

export default Home;
