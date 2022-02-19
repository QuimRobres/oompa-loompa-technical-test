import React, { useEffect, useState } from "react";
import OompaCard from "../OompaCard/OompaCard";
import "./OompaList.css";
import axios from "axios";

export default function OompaList() {
  const [workers, setWorkers] = useState();

  const mainUrl =
    "https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=";

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    axios
      .get(`${mainUrl}1`)
      .then((res) => {
        setWorkers(res.data.results);
      })
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <h1>Ommpa Loompas</h1>
      <div class="list-container">
        {workers &&
          workers.map((worker, index) => {
            return <OompaCard {...worker}></OompaCard>;
          })}
      </div>
    </div>
  );
}
