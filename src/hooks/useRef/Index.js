import React, { useState } from "react";
import Input from "../../components/Input";
const Ref = () => {
  const [userName, setUserName] = useState("Ali");
  return (
    <>
      <p>useRef Hook</p>
      <Input
        name="text"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input type="button" name="button" value="Reset" /> 
    </>
  );
};

export default Ref;
