import "./App.css";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contrib from "./components/Contrib/Contrib";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/user/signup",
      element: <Signup />,
    },
    {
      path: "/user/home",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/user/contrib",
      element: (
        <>
          <Navbar />
          <Contrib />
        </>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
