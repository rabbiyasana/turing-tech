import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "../../utilities/api";
import { useAuth } from "../../context/AuthContext";
import { AuthHeader } from "../../utilities/header";
import { number } from "yup";
function Table() {
  const { user } = useAuth();
  const [data, setData] = useState(null);

  let calls = {
    nodes: [],
    totalCount: number,
    hasNextPage: Boolean,
  };
  const [AllCalls, setAllCalls] = useState(calls);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchAllCalls = useCallback(async () => {
    const response = await axios({
      method: "get",
      url: `${baseUrl}/calls?offset=${(currentPage - 1) * 10}&limit=10`,
      headers: AuthHeader(),
    });
    setAllCalls(response.data);
    console.log(response.data);
  }, [currentPage]);

  useEffect(() => {
    fetchAllCalls();
  }, [fetchAllCalls]);

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
          {AllCalls.nodes.map((e) => {
            return (
              <tr>
                <td>{e.call_type}</td>
                <td>{e.direction}</td>
                <td>{e.duration}</td>
                <td>{e.from}</td>
                <td>{e.to}</td>
                <td>{e.via}</td>
                <td>{e.created_at}</td>
                <td>{e.is_archived}</td>
              </tr>
            );
          })}

          <tr></tr>
        </thead>
      </table>
    </>
  );
}
export default Table;
