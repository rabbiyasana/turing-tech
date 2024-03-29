import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { baseUrl } from "../../utilities/api";
import { useAuth } from "../../context/AuthContext";
import { AuthHeader } from "../../utilities/header";
import ArchiveTab from "../ArchivedTab/ArchiveTab";
import Button from "../Button/Button";
import NoteModal from "../NoteModal/NOteModal";
// import {number} from yup
function Table(props) {
  // fuction to format the created date

  function getDateFormat(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}-${month}-${year}`;
  }

  const { user } = useAuth();
  const [data, setData] = useState(null);

  let calls = {
    nodes: [],
    // totalCount: number,
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
    // console.log(response.data);
  }, [currentPage]);

  useEffect(() => {
    fetchAllCalls();
  }, [fetchAllCalls]);

  // note modal functions
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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
              <tr key={e.id}>
                <td>{e.call_type}</td>
                <td>{e.direction}</td>
                <td>{e.duration}</td>
                <td>{e.from}</td>
                <td>{e.to}</td>
                <td>{e.via}</td>
                <td>{getDateFormat(new Date(e.created_at))}</td>
                <td>
                  <ArchiveTab
                    archived={e.is_archived}
                    className="cursor-pointer"
                  />
                </td>
                <td>
                  <Button text="Add Note" onClick={handleOpenModal}></Button>
                </td>
              </tr>
            );
          })}

          <tr></tr>
        </thead>
      </table>
      <NoteModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </NoteModal>
    </>
  );
}
export default Table;
