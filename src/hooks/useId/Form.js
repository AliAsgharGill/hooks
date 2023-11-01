import React, { useId } from "react";
import Input from "../../components/Input/Index";

const Form = (prop) => {
  const id = useId();
  return (
    <>
      <h1 className="font-bold text-xl ">{prop.title}</h1>
      <label
        htmlFor={`${id}-firstName`}
        className="outline-none bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
      >
        First Name
      </label>
      <Input
        type="text"
        name="update"
        id={`${id}-firstName`}
        // value="Update"
        className="outline-none bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
      />
      <label
        htmlFor={`${id}-secondName`}
        className="outline-none bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
      >
        Second Name
      </label>
      <Input
        type="text"
        name="update"
        id={`${id}-secondName`}
        // value="Update"
        className="outline-none bg-gray-300 font-bold p-3 ,{useId}rounded-full m-3 shadow-lg"
      />
    </>
  );
};

export default Form;
