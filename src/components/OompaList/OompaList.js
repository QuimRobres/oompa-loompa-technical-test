import React, { useEffect, useState } from "react";
import OompaCard from "../OompaCard/OompaCard";
import "./OompaList.css";
import axios from "axios";

export default function OompaList() {
  const [workers, setWorkers] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const mainUrl =
    "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=";

  useEffect(() => {
    axios
      .get(`${mainUrl}${currentPage}`)
      .then((res) => {
        setWorkers(res.data.results);
        setTotalPages(res.data.total);
      })
      .catch((err) => console.error(err));
  }, [currentPage]);


  return (
    <div>
      <h1>Ommpa Loompas</h1>
      <div className="list-container">
      <ul className="oompa-list">
      {workers &&
          workers.map((worker) => {
            return (
              <li key={worker.id}>
              <OompaCard {...worker}></OompaCard>
              </li>
            ) 
          })}
      </ul>
        
      </div>
      <button onClick={() => setCurrentPage(currentPage - 1)}>Previous Page</button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
     
    </div>
  );
}
