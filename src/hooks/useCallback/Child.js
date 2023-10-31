import React, { memo } from "react";

const Child = () => {
  console.log("Child component render");
  return (
    <>
      <p>Welcome To Child </p>
      <p>
        Whenever we need to pass a function as a prop or as a argument we need
        to use useCallback
      </p>
    </>
  );
};

export default memo(Child);
