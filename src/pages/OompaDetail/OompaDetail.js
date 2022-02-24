import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import OompaInfoCard from "../../components/OompaInfoCard/OompaInfoCard";

export default function OompaDetail() {
  const { id } = useParams();
  const [workerInfo, setWorkerInfo] = useState(id);

  useEffect(() => {
    axios
      .get(
        `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/${id}`
      )
      .then((res) => {
        console.log(id);
        setWorkerInfo(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <OompaInfoCard {...workerInfo} />
    </div>
  );
}
