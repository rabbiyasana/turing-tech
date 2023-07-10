import Table from "../commponents/Table/Table";
function Main(props) {
  return (
    <>
      <div className="container">
        <div>
          <p>{props.mainText}</p>
          <Table />
        </div>
      </div>
    </>
  );
}
export default Main;
