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
      <h1 className="my-12 text-center text-red-500">Buscador</h1>

      <div className="flex flex-col">
        <div className="flex flex-col">
          <form onSubmit={handleSearch} className="container flex justify-center py-8 mx-auto">
            <input
              className="w-2/3 h-12 px-3 mx-4 mb-8 rounded shadow-lg focus:outline-none focus:shadow-outline text-s"
              type="text"
              placeholder="Escribe una palabra clave"
              name="nameHero"
              value={nameHero}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button type="submit" class="flex items-center justify-center w-10 h-10 px-4 py-4 mb-8 font-bold text-green-600 transition duration-300 ease-in-out transform bg-green-200 rounded-full shadow-lg lg:mx-0 focus:outline-none focus:shadow-outline hover:bg-green-500 hover:text-white hover:scale-105">
            <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
        <h4>Resultados</h4>
          <hr />
        <div className="flex flex-row flex-wrap items-center content-center justify-around">
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
