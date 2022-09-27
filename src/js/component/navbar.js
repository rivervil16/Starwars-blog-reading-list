import React, { useState, useEffect, useContext } from "react";
import PropTypes, { element } from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  console.log(store.favoritos);

  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/#">
        <img
          src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png"
          width="70"
          height="70"
          mx="5"
        />
      </Link>

      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul className="dropdown-menu">
          {store.favoritos.map((element, i) => {
            return <li>
              {element.name}
              <button onClick={()=>actions.deleteFavoritos(i)}>Borrar</button>
              </li>;
          })}
        </ul>
      </div>
    </nav>
  );
};
