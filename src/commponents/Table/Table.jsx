import React, { useState, useEffect } from "react";
import axios from "axios";
function Table() {
  const url = "https://frontend-test-api.aircall.io";

  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from API endpoint
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <table className="table border rounded mt-2">
        <thead style={{ backgroundColor: "#F4F4F9" }}>
          <tr>
            <th scope="col">Call type</th>
            <th scope="col">Direction</th>
            <th scope="col">Duration</th>
            <th scope="col">FROM</th>
            <th scope="col">TO</th>
            <th scope="col">VIA</th>
            <th scope="col">CREATED AT</th>
            <th scope="col">Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
      </table>
    </>
  );
}
export default Table;
