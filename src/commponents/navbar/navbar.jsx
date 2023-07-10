import ttLogo from "../../assets/images/tt-logo.png";
function Navbar() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src={ttLogo} alt="turing-logo" className="mw-30" />
          </div>
          <div className="col-sm-8"></div>
        </div>
      </div>
      <p>navbar</p>
    </>
  );
}
export default Navbar;
