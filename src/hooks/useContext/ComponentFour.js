import React, { useContext } from "react";
import { UserName, UserRollNo } from "./Index";

const ComponentFour = () => {
  const usesrName = useContext(UserName);
  const rollNo = useContext(UserRollNo);
  return (
    <>
      <p className="font-bold bg-orange-600 text-white">
        The following text is in the Component Four
      </p>
      <p>Hi {usesrName} in Component Four </p>
      <p>Your Roll No for MSIT is: {rollNo} in Component Four </p>
    </>
  );
};

export default ComponentFour;
