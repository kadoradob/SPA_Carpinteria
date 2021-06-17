import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {



  
  return (
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={`./assests/heroes/${id}.jpg`} className="card-img" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>

            <p className="card-text"> {alter_ego}</p>
            <p>
              {alter_ego !== characters && (
                <p className="card-text">{characters}</p>
              )}
            </p>

            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>

            <Link to={`/hero/${id}`}>
              <button className="btn btn-primary"> Ver mas..</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
