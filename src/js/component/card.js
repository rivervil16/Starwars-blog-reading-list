import React, { Component } from "react";

export const Card = () => {
  return (
    <div className="card col-3 mx-1" >
      <img className="card-img-top" src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2018/08/star-wars-como-evoluciono-luke-skywalker-viejo-canon.jpg?itok=AYO22MJM" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};


