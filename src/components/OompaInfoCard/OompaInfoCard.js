import React from "react";
import "./OompaInfoCard.css";

export default function OompaInfoCard({ ...workerInfo }) {
  return (
    <div class="main-info-container">
      <div className="img-container">
        <img src={workerInfo.image} alt="oompa-loompa"></img>
      </div>
      <div className="info-container">
        <div className="info-header">
          <h4>Oompa Loompa {workerInfo.first_name}</h4>
          <p class="gender">{workerInfo.gender}</p>
          <p>{workerInfo.profession}</p>
        </div>
        <div className="detail-container">
          <p
            dangerouslySetInnerHTML={{ __html: workerInfo.description }}
            className="worker-info"
          />
        </div>
      </div>
    </div>
  );
}
