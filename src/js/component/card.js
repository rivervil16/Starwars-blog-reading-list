import React, { Component } from "react";

export const Card = ({ name }) => {
  return (
    <div className="card col-4 mx-1">
      <img
        className="card-img-top"
        src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2018/08/star-wars-como-evoluciono-luke-skywalker-viejo-canon.jpg?itok=AYO22MJM"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Some quick example text srgfgfsfSEFSEFSto build on the card title and
          make up the bulk of the card's content.
        </p>
        <div className="two-buttons d-flex justify-content-between">
          <a href="/character" className="btn btn-outline-primary fs-5">
            Learn more!
          </a>
          <a
            href="#"
            className="btn btn-outline-warning fs-5"
            /* onClick={agregarFavorito} */
          >
            ♡
          </a>
        </div>
      </div>
    </div>
  );
};
