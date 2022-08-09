import React from "react";

const InputGroup = ({ name, changeID, total }) => {
  return (
    <div className="input-group mb-4">
      <select
        id={name}
        onChange={(e) => changeID(e.target.value)}
        className="form-select"
      >
        <option value="1">Chosse...</option>
        {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1} key={index}>
              {name}-{x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;
