import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./commponents/navbar/navbar";
import Main from "./pages/Main";
import Login from "./pages/login";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Main mainText="Turing Technologies Frontend Test " />
      <Login />
    </>
  );
}

export default App;
