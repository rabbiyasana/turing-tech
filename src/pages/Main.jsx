import Table from "../commponents/Table/Table";
import Navbar from "../commponents/navbar/navbar";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
function Main(props) {
  const { user } = useAuth();
  // if () {
  //   return <Navigate to="/" replace={true}></Navigate>;
  // }
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
