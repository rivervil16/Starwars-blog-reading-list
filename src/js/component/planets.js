import React, { Component } from "react";

export const Planets = () => {
  return (
    <div className="card col-3 mx-1" >
      <img className="card-img-top" src="https://qph.cf2.quoracdn.net/main-qimg-62930c7127ce81410526d72a81e890b5-lq" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go some planet
        </a>
      </div>
    </div>
  );
};