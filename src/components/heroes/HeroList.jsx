import React from "react";
import { getHeroBypublisher } from "../../selector/getHeroPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = getHeroBypublisher(publisher);

  return (
    <div className="flex flex-row flex-wrap justify-around items-center content-center">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};

