import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetailPlanet = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  useEffect(() => {
    console.log(theid);
    actions.eachPlanet(theid);
  }, []);

  console.log(store.unicPlanet);
  return (
    <div className="m-0 row justify-content-center">
      <div className="card mb-3 bg-dark text-white" style={{ maxWidth: 940 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${theid}.jpg`}
              className="img-fluid rounded-start"
              alt="..."
              height={800}
              width={600}
            />
          </div>
          .
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">{store.unicPlanet?.name}</h5>
              <ul>
                <li>Diametro: {store.unicPlanet?.diameter}</li>
                <li>Clima: {store.unicPlanet?.climate}</li>
                <li>Poblacion: {store.unicPlanet?.population}</li>
                <li>Gravedad: {store.unicPlanet?.gravity}</li>
              </ul>
              <p className="card-text">
                <small className="text-muted"></small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
