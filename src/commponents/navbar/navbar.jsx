import ttLogo from "../../assets/images/tt-logo.png";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { Logout } = useAuth();
  const HandleLogout = () => {
    Logout();
  };
  let navigate = useNavigate();
  const loggedIn = localStorage.getItem("user");
  return (
    <>
      <div
        className="container"
        style={{ height: "80px", border: "1px", borderColor: "#D3D5D8" }}
      >
        <div className="row d-flex justify-content-between">
          <img src={ttLogo} alt="turing-logo" style={{ width: "313px" }} />
          {loggedIn && (
            <button
              onClick={HandleLogout}
              className="border-white text-white"
              style={{
                backgroundColor: "#4F46F8",
                width: "115px",
                height: "40px",
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default Navbar;
