import React from "react";

export const DetailCharacter = () => {
  return (
    <div className="m-0 row justify-content-center">
      <div className="card mb-3" style={{ maxWidth: 940 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/hc_940x529/public/media/image/2018/08/star-wars-como-evoluciono-luke-skywalker-viejo-canon.jpg?itok=AYO22MJM" className="img-fluid rounded-start" alt="..." height={800} width={600} />
          </div>.
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
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
