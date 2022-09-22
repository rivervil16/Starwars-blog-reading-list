import React from "react";
import "../../styles/home.css";
import { Card } from "../component/card";

export const Home = () => {
  return (
    <div>
      <div>
		<h1>Personaje</h1>
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
    </div>
  );
};
