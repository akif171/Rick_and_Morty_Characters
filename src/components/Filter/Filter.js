import React from "react";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

const Filter = ({
  pageNumber,
  setPageNumber,
  setGender,
  setStatus,
  setSpecies,
}) => {
  const clear = () => {
    setSpecies("");
    setStatus("");
    setPageNumber("");
    setGender("");
    window.location.reload(false);
  };

  return (
    <div className="col-12 col-lg-3 mb-5">
      <div className="text-center fw-bold fs-4 mb-2"> Filter</div>

      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-3"
      >
        Clear Filter
      </div>
      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPageNumber={setPageNumber} />
        <Species setPageNumber={setPageNumber} setSpecies={setSpecies} />
        <Gender setGender={setGender} setPageNumber={setPageNumber} />
      </div>
    </div>
  );
};

export default Filter;
