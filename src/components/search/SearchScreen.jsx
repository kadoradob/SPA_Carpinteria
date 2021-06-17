import React , {useMemo} from "react";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { getHeroesByName } from "../../selector/getHeroByName";

export const SearchScreen = ({ history }) => {
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  //when refresh the page the query strings it is permanet
  const initialForm = {
    nameHero: q,
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { nameHero } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(nameHero), [q]);


  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${nameHero}`);
  };
  return (
    <div>
      <h1>Search Screen</h1>

      <div className="row">
        <div className="col-5">
          <h4> Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="find your hero"
              name="nameHero"
              value={nameHero}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button type="submit" className="btn m-1 btn-block btn-primary">
              Search...
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
