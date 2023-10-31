// import React, { useMemo, useState } from "react";
// import Input from "../../components/Input/Index";
// const Callback = () => {
//   const [num, setNum] = useState(0);
//   const incrementOne = () => {
//     setNum(num + 1);
//   };
//   const incrementTwo = () => {
//     setNum(num + 1);
//   };
//   const isEven = useMemo(() => {
//     console.warn(">>>>>>>");
//     let i = 0;
//     while (i < 200000000) {
//       i++;
//     }
//     return num % 2 === 0;
//   }, [num]);
//   return (
//     <>
//       Welcome to Callback
//       <br />
//       <Input
//         type="button"
//         onClick={incrementOne}
//         className="bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
//         value="Increment"
//       />
//       {num + " is "}
//       <span>{isEven ? "Even" : "odd"}</span>
//       <Input
//         type="button"
//         onClick={incrementTwo}
//         className="bg-gray-300 font-bold p-3 rounded-full m-3 shadow-lg"
//         value="Increment"
//       />
//     </>
//   );
// };

// export default Callback;
