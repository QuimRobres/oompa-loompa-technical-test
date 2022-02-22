import React from "react";

export default function OompaInfoCard({ ...workerInfo }) {
  return (
    <div>
      <div className="img-container">
        <img src={workerInfo.image} alt="oompa-loompa"></img>
      </div>
      <div className="info-container">
        <h4>Oompa Loompa {workerInfo.first_name}</h4>
        <p>{workerInfo.gender}</p>
        <p>{workerInfo.description}</p>
      </div>
    </div>
  );
}
