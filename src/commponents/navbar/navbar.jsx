import ttLogo from "../../assets/images/tt-logo.png";
import Button from "../Button/button";
function Navbar() {
  return (
    <>
      <div className="container" style={{ height: "80px" }}>
        <div className="row">
          <div className="col-sm-6">
            <img src={ttLogo} alt="turing-logo" style={{ width: "313px" }} />
          </div>
          <div className="col-sm-6">
            <Button text="Logout" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
