import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/home">
        <img
          src="https://seeklogo.com/images/S/Star_Wars-logo-2B2C24F703-seeklogo.com.png"
          width="70"
          height="70"
          mx="5"
        />
      </Link>

      <div class="dropdown">
        <button
          class="btn btn-primary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Favorites
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" href="#">
              Una cosa
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Another action
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Something else here
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
