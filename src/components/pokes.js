import React, { useState, useEffect } from "react";

const Pokes = (props) => {
  return (
    
    <div className="card">
      <div className="card-text">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default Pokes;
