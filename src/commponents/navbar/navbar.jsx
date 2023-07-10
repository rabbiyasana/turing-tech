import ttLogo from "../../assets/images/tt-logo.png";
import Button from "../Button/button";
function Navbar() {
  return (
    <>
      <div
        className="container"
        style={{ height: "80px", border: "1px", borderColor: "#D3D5D8" }}
      >
        <div className="row d-flex justify-content-between">
          <img src={ttLogo} alt="turing-logo" style={{ width: "313px" }} />

          <Button text="Logout" />
        </div>
      </div>
    </>
  );
}
export default Navbar;
