import { useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import Allroutes from "./routes/Routes";
import "./App.css";
let logged = localStorage.getItem("loggedIn");

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider logged={logged}>
          <Allroutes />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
