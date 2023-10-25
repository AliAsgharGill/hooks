import React, { useMemo } from "react";
import { useState } from "react";
import Input from "../../components/Input/Index";

const Memo = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  const mulitiplication = useMemo(
    function double() {
      console.log("********");
      return add * 2;
    },
    [add]
  );
  return (
    <>
      <h1>Welcome to UseMemo</h1>
      <Input
        type="button"
        value="Add"
        name="button"
        onClick={() => setAdd(add + 1)}
        className="bg-orange-600 p-4 rounded-lg m-4 text-white font-bold"
      />
      Add:{add} Double of it is: {mulitiplication}
      <Input
        type="button"
        value="Minus"
        name="button"
        onClick={() => setMinus(minus - 1)}
        className="bg-orange-600 p-4 rounded-lg m-4 text-white font-bold"
      />
      Minus:{minus}
    </>
  );
};

export default Memo;
