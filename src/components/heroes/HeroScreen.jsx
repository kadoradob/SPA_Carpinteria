import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selector/getHeroByid";

export const HeroScreen = ({history}) => {
  const { heroeId } = useParams();
  
  const hero = getHeroById(heroeId);

  const {
    superhero,
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
    <div>
      <div className="container mx-auto h-4/5">
        <div className="grid h-auto grid-cols-1 md:grid-cols-2">
          <div className="max-h-96 md:h-screen">
            <img className="object-cover w-full h-56 bg-center bg-cover rounded-lg shadow-md md:h-screen" src={`../assests/heroes/${heroeId}.jpg`} alt={`heroes_${heroeId}`}/>
        </div>
      <div className="flex p-4 bg-gray-100">
        <div className="max-w-lg mt-auto mb-auto">
          <h1 className="text-3xl uppercase">{superhero}</h1>
          <p className="mb-5 "> {characters}</p>

          <div className="flex flex-row flex-wrap items-center content-center justify-center ">
            <a href={`../assests/PdfCalderas/${heroeId}.pdf`} target="_black" className="no-underline" >
              <button className="flex items-center justify-center w-10 h-10 px-4 py-4 mb-8 font-bold text-green-600 no-underline transition duration-300 ease-in-out transform bg-green-200 rounded-full shadow-lg lg:mx-0 focus:outline-none focus:shadow-outline hover:bg-green-500 hover:text-white hover:scale-105"><i class="fas fa-eye"></i></button>
            </a>
            <p className="mx-2 text-sm text-green-700"><i className="px-2 fas fa-chevron-left"></i>Ver más información</p>
          </div>
          <div className="flex flex-row flex-wrap items-center content-center justify-around">
            <button className="py-3 mt-6 text-red-500 transition duration-300 ease-in-out transform bg-red-200 rounded-md shadow-lg hover:bg-red-500 hover:text-white px-7 focus:outline-none focus:shadow-outline hover:scale-105"onClick={handleReturn}><i className="px-4 fas fa-chevron-left"></i></button>
            <a href="https://wa.link/48h974" target="_black">
              <button className="px-2 py-3 mt-6 text-white bg-green-300 rounded-md px-7 hover:shadow-lg hover:bg-green-500"><i className="fab fa-whatsapp"></i> Whattsap</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
};
