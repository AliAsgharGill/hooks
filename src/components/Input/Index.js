import React from "react";

const Input = ({
  type,
  name,
  value,
  className,
  onClick,
  onChange,
  refValue,
}) => {
  return (
    <>
      <input
        type={type}
        name={name}
        value={value}
        className={className}
        onClick={onClick}
        onChange={onChange}
        ref={refValue}
      ></input>
    </>
  );
};

export default Input;
