import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selector/getHeroByid";

export const HeroScreen = ({history}) => {
  const { heroeId } = useParams();
  
  const hero = getHeroById(heroeId);

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = ()=>{
        if (history.length <= 2 ){
            history.push("/")
        } else {
            history.goBack()
        }

  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assests/heroes/${heroeId}.jpg`}
          alt={`heroes_${heroeId}`}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {" "}
            <b>Alter_ego :</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            {" "}
            <b>publisher :</b>
            {publisher}
          </li>
          <li className="list-group-item">
            {" "}
            <b>first_appearance :</b>
            {first_appearance}
          </li>
        </ul>
        <h5> Character</h5>
        <p>{characters}</p>

          <button className="btn btn-primary" onClick={handleReturn}>Volver</button>
       
      </div>
    </div>
  );
};
