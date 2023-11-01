import React from "react";

const Input = ({
  id,
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
        id={id}
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
