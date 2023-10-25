import React from "react";

const Input = ({ type, name, value, className, onClick, onChange }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        onClick={onClick}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Input;
