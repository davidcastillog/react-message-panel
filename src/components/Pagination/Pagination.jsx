import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";

const PaginationMU = ({ messages, setMessagesPaginated }) => {
  const [totalPages, setTotalPages] = useState(0);
  const [messagesPerPage] = useState(25);
  const [currentPage, setCurrentPage] = useState(1);

  // Slice the messages array to show only the messages of the current page
  useEffect(() => {
    setMessagesPaginated(
      messages.slice(
        currentPage * messagesPerPage - messagesPerPage,
        currentPage * messagesPerPage
      )
    );
  }, [messages, currentPage, messagesPerPage, setMessagesPaginated]);

  // Setting the total number of pages based on the number of messages and the number of messages per page.
  useEffect(() => {
    setTotalPages(Math.ceil(messages.length / messagesPerPage));
  }, [messages.length]);

  // When the user clicks on a page number. It sets the currentPage to the page number that was clicked
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Pagination onChange={handleChange} count={totalPages} color="error" />
    </>
  );
};

export default PaginationMU;
