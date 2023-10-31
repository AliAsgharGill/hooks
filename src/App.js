import * as React from "react";
// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";

import "./App.css";
import Home from "./hooks/useState/Index";
import HookTwo from "./hooks/useEffect/Index";
import HookContext from "./hooks/useContext/Index";
import Memo from "./hooks/useMemo/Index";
import Callback from "./hooks/useCallback/Index";
import Ref from "./hooks/useRef/Index";
import LayoutEffect from "./hooks/useLayoutEffect/Index";
import Reducer from "./hooks/useReducer/Index";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        {/* <Link to="about">About Us</Link> */}
        <p className="bg-orange-600 text-white font-bold  text-center p-5 ">
          useState
        </p>
        <Home />
        <p className="bg-orange-600 text-white font-bold  text-center p-5  my-2">
          useEffect
        </p>
        <HookTwo />
      </div>
    ),
  },
  {
    path: "useContext",
    element: <HookContext />,
  },
  {
    path: "useMemo",
    element: <Memo />,
  },
  {
    path: "useCallback",
    element: <Callback />,
  },
  {
    path: "useRef",
    element: <Ref />,
  },
  {
    path: "useLayoutEffect",
    element: <LayoutEffect />,
  },
  {
    path: "useReducer",
    element: <Reducer />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
