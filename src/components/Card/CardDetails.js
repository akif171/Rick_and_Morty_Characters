import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  const { name, location, origin, image, status, gender, species } =
    fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      const data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center mb-4">
      <div className="d-flex flex-column gap-3">
        <h1 className="text-center">{name}</h1>
        <img className="img-fluid" src={image} />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div>
            <span className="fw-bold">Gender :</span>
            {gender}
          </div>
          <div>
            <span className="fw-bold">Location :</span>
            {location?.name}
          </div>
          <div>
            <span className="fw-bold">Origin :</span>
            {origin?.name}
          </div>
          <div>
            <span className="fw-bold">Species :</span>
            {species}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
