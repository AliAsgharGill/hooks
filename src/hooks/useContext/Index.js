import React from "react";
import { createContext } from "react";
import ComponentTwo from "./ComponentTwo";
import ComponentFour from "./ComponentFour";
const UserName = createContext();
const UserRollNo = createContext();

const HookContext = () => {
  const myName = "Ali Asghar";
  const rollNo = "01";
  return (
    <>
    <p className="font-bold bg-orange-600 text-white">The Following text is in the Index page of useContext</p>
      <p>Hi HookContext</p>
      <UserName.Provider value={myName}>
        <UserRollNo.Provider value={rollNo}>
          <ComponentFour />
        </UserRollNo.Provider>
      </UserName.Provider>
    </>
  );
};

export default HookContext;
export { UserName, UserRollNo };
