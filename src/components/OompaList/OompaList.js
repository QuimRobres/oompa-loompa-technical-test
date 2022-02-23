import React, { useEffect, useState } from "react";
import OompaCard from "../OompaCard/OompaCard";
import "./OompaList.css";
import axios from "axios";
import searchIcon from "../../images/ic_search.png";

export default function OompaList() {
  const [workers, setWorkers] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

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

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = workers.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setFilteredResults(filteredData);
    } else {
      setFilteredResults(workers);
    }
  };

  return (
    <div className="component-container">
      <div className="main-container">
        <div class="filter-container">
          <div>
            <input
              placeholder="Search"
              onChange={(e) => searchItems(e.target.value)}
            />
            <img src={searchIcon} alt="search-icon" width="15px" />
          </div>
        </div>

        <div className="title-container">
          <h1 class="title">Find your Ommpa Loompas</h1>
          <h3 class="subtitle">There are more than 100k</h3>
        </div>
        <div className="list-container">
          <ul className="oompa-list">
            {searchInput.length > 1
              ? filteredResults.map((worker) => {
                  return (
                    <li key={worker.id}>
                      <OompaCard {...worker}></OompaCard>
                    </li>
                  );
                })
              : workers &&
                workers.map((worker) => {
                  return (
                    <li key={worker.id}>
                      <OompaCard {...worker}></OompaCard>
                    </li>
                  );
                })}
          </ul>
        </div>
      </div>

      <button onClick={() => setCurrentPage(currentPage - 1)}>
        Previous Page
      </button>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next Page</button>
    </div>
  );
}
