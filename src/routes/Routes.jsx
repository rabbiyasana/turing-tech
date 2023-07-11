import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/login";
export default function () {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Main />} />
      </Routes>
    </>
  );
}
