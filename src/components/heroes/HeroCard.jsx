import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  tipo,
}) => {



  
  return (
    <div>
      <div className="flex flex-wrap -mx-4 -mt-4 -mb-10 sm:-m-4">
          <div className="flex flex-col items-center justify-center flex-1 w-1/2 max-w-sm p-6 mx-auto mb-6 transition duration-300 ease-in-out transform md:w-1/3 md:mb-0 focus:outline-none focus:shadow-outline hover:scale-105">
            <div className="w-full h-56 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" >
            <img src={`./assests/heroes/${id}.jpg`} className="object-cover w-full h-56 bg-center bg-cover rounded-lg shadow-md" alt="" />
            </div>

            <div className="p-5 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg w-70">
              
              <div className="inline-flex header-content ">
                <div className="flex-0.5 w-4 h-4 m-1 bg-purple-100 rounded-full category-badge m">
                  <div className="w-2 h-2 m-1 bg-red-500 rounded-full " ></div>
                </div>
                <div className="flex-1 text-sm category-title"> {tipo}</div>
              </div>
              <div className="font-medium title-post">{superhero}</div>

              <div className="text-base text-center summary-post">
                {/* aqui se pondria la descripcion */}
                <Link to={`/hero/${id}`}>
                  <button className="p-2 mt-4 text-sm text-white no-underline bg-green-300 rounded hover:bg-green-500 "> <i className="mx-2 text-xl fas fa-eye"></i> Ver mas..</button>
                </Link>
              </div>
             
            </div>
          </div>
        </div>
    </div>

  );
};
