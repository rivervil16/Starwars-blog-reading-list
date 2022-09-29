import React, { Component, useContext } from "react";
import { Context } from "../store/appContext";

export const Card = ({ name, uid, type }) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card col-4 mx-1 bg-dark text-white border mb-5">
      <img
        className="card-img-top"
        src={
          /*
          aca abajo usamos un if (el del nombre especial) para traer la imagen de Tatoonie. La imagen no estaba disonible en la api.
          
          Esta imagen deberia ser de 400*200
          */
          type == "planets" && uid == 1
            ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ed97b542-8697-4d5c-a783-0dd8185c89d0/d15sn9h-b91d0d97-8378-4b8c-b943-dd1b39a21a84.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2VkOTdiNTQyLTg2OTctNGQ1Yy1hNzgzLTBkZDgxODVjODlkMFwvZDE1c245aC1iOTFkMGQ5Ny04Mzc4LTRiOGMtYjk0My1kZDFiMzlhMjFhODQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.TbpQRH5usavAhtJl_KJ7Tg7eyJBgiVM7fwz7iddfc_4"
            : `https://starwars-visualguide.com/assets/img/${
                type === "character" ? "characters" : type
              }/${uid}.jpg`
        }
        alt="Card image cap"
        height={400}
        width={200}
        style={{objectFit:"contain"}}       
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="two-buttons d-flex justify-content-between">
          <a href={`/${type}/${uid}`} className="btn btn-outline-primary fs-5">
            Ver mas!
          </a>
          <button
            className="btn btn-outline-warning fs-5"
            onClick={() => actions.addFavoritos({ id: uid, name: name })}
          >
            ♡
          </button>
        </div>
      </div>
    </div>
  );
};
