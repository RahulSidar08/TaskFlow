import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {TextField} from "@mui/material";
import { BrowserRouter, Routes, Route, createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import { Login } from "./components/authentication/Login.jsx";
import { Signup } from "./components/authentication/Signup.jsx";
import { TaskInput } from "./components/TaskInput.jsx";
import { Navbar } from "./components/Home/Navbar.jsx";
import HeroSection from "./components/Home/Herosection.jsx";
import Footer from "./components/Home/Footer.jsx";
import { AllTasks } from "./components/AllTasks.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <div>
      <Navbar/>
      <HeroSection/>
      <Footer/>
    </div>
    
  },
  {
    path : "/signup",
    element : <div>
      <Signup/>
    </div>
  },
  {
    path : "/login",
    element : <div>
      <Login/>
    </div>
  },
  {
    path : "/create",
    element : <div>
      <ProtectedRoute>
      <TaskInput/>
      </ProtectedRoute>
    </div>
  },
  {
    path : "/view",
    element : <div>
      <ProtectedRoute>
      <AllTasks/>
      </ProtectedRoute>
    </div>
  }
])
const App = () => {

  return (
    <>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    </>
  );
};

export default App;
