import React from "react";
import { useEffect } from "react";
import { useLayoutEffect } from "react";

const LayoutEffect = () => {
  useEffect(() => {
    console.log("Hello I am useEffect i am first");
  }, []);
  useLayoutEffect(() => {
    console.log("Hello I am LayoutEffect i am second");
  }, []);
  return <>
  <p>To check useLayoutEffect kindly go to inspect</p>
  </>;
};

export default LayoutEffect;
