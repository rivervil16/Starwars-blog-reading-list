import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailCharacter = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    console.log(theid);
    actions.eachCharacter(theid);
  }, []);

  console.log(store.unicPlanet);
  return (
    <div className="m-0 row justify-content-center ">
      <div className="card mb-3 bg-dark text-white" style={{ maxWidth: 940 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              /*Esta imagen deberia ser de 800*600*/
              src={`https://starwars-visualguide.com/assets/img/characters/${theid}.jpg`}
              className="img-fluid rounded-start"
              alt="..."
              height={800}
              width={600}
            />
          </div>
          .
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{store.unicCharacter?.name}</h5>
              <ul>
                <li>name: {store.unicCharacter?.name}</li>
                <li>Genero: {store.unicCharacter?.gender}</li>
                <li>Color Piel: {store.unicCharacter?.skin_color}</li>
                <li>Color Ojos: {store.unicCharacter?.eye_color}</li>
              </ul>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
