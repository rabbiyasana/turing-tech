import Table from "../commponents/Table/Table";
import Navbar from "../commponents/navbar/navbar";
function Main(props) {
  return (
    <>
      <div className="container">
        <div>
          <Navbar />
          <p>{props.mainText}</p>
          <Table />
        </div>
      </div>
    </>
  );
}
export default Main;
