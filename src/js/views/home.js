import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Home = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <div>
        <h1 className="text-danger">Personajes</h1>
        <div className="d-flex overflow-scroll">
          {/* Aca hacemos el scroll */}
          {store.characters.map((element, i) => {
            return (
              <Card
                name={element.name}
                uid={element.uid}
                type={"character"}
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1 className="text-danger">Planetas</h1>
        <div className="d-flex overflow-scroll">
          {/* Aca hacemos el scroll */}
          {store.planets.map((element, i) => {
            return (
              <Card
                name={element.name}
                uid={element.uid}
                type={"planets"}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
