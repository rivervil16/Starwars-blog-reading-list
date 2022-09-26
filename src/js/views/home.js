import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Planets } from "../component/planets";

export const Home = () => {
  return (
    <div>
      <div>
        <h1 className="text-danger">Personajes</h1>
        <div className="d-flex overflow-scroll">
          {/* Aca hacemos el scroll */}
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <div>
        <h1 className="text-danger">Planetas</h1>
        <div className="d-flex overflow-scroll">
          {/* Aca hacemos el scroll */}
          <Planets />
          <Planets />
          <Planets />
          <Planets />
          <Planets />
          <Planets />
          <Planets />
          <Planets />
        </div>
      </div>
    </div>
  );
};
