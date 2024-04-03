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
import Easy from "./components/Easy/Easy";

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
      path: "/home",
      element: (
        <>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/easy/:level",
      element: (
        <>
          <Navbar />
          <Easy />
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
