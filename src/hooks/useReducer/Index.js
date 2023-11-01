import React from "react";
import { useReducer } from "react";
import Input from "../../components/Input/Index";

const initialState = 0;
const reducer = (state, action) => {
  console.log(state);
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "Decrement") {
    return state - 1;
  }
  return state;
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <p>Welcome to useReducer</p>
      <div className="p-3 bg-orange-500 w-10 rounded m-4 text-center font-bold text-white">
        {state}
      </div>
      <Input
        type="button"
        value="Increment"
        className="bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
        onClick={() => dispatch({ type: "INCREMENT" })}
      />
      <Input
        type="button"
        value="Decrement"
        className="bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
        onClick={() => dispatch({ type: "Decrement" })}
      />
    </>
  );
};

export default Reducer;