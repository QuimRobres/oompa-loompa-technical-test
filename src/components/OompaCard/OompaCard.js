
import React , {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import "./OompaCard.css";

export default function OompaCard({ ...worker }) {

  return (
    <div className="oompa-container">
      <Link to={`/${worker.id}`}>
        <img src={worker.image} alt="oompa-loompa"></img>
      </Link>

      <h4>
        {worker.first_name} {worker.last_name}
      </h4>
      <div className="info-container">
      <p>{worker.gender}</p>
      <p><i>{worker.profession}</i></p>
      </div>
      
    </div>
  );
}
