import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  console.log(store.characters);
  return (
    <div>
      <div>
        <h1 className="text-danger">Personajes</h1>
        <div className="d-flex overflow-scroll">
          {/* Aca hacemos el scroll */}
          {store.characters.map((element, i) => {
            return <Card name={element.name}/>;
          })}
        </div>
      </div>
      <div>
        <h1 className="text-danger">Planetas</h1>
        <div className="d-flex overflow-scroll">
          {/* Aca hacemos el scroll */}
          {store.planets.map((element, i) => {
            return <Card name={element.name}/>;
          })}
        </div>
      </div>
    </div>
  );
};
