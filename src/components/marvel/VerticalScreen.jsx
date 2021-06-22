import React from "react";
import { HeroList } from "../heroes/HeroList";

export const VerticalScreen = () => {
  return (
    <div>
      <h1 className="my-10 text-center text-red-700">Calderas Vertical</h1>
      <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
        <div id="header-text" className="flex flex-row flex-wrap justify-center">
              <h4 id="name" className="text-xl font-semibold">Característica</h4>
              <a href="#VerCalderas">
                <button className="p-2 ml-20 text-green-700 transition duration-300 ease-in-out transform bg-green-200 rounded-md shadow-lg px-7 focus:outline-none focus:shadow-outline hover:scale-105 hover:text-white hover:bg-green-500">Ver Calderas <i class="fas fa-chevron-down"></i></button>
              </a>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-center flex-nowrap">
              <p className="flex-0.5 font-bold text-red-600">Tipo de Caldera:</p> 
              <p className="flex-1">Verticales</p></li>  
            <li className="flex flex-row justify-center flex-1 flex-nowrap">
              <p className="font-bold text-red-600">Tipo de combustible:</p>
              <p className="flex-1">Líquido y gaseoso.</p> </li>
            <li className="flex flex-row justify-center flex-1 flex-nowrap">
              <p className="font-bold text-red-600">Capacidades:</p>
              <p className="flex-1">10-50 BHP.</p> </li>        
          </ul>
        </div>
      </div>
    </div>
      
    <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
          <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">Generalidad </h4>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-start flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Ahorro en espacio</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Completamente ensambladas y probadas en fábrica.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Cámara de vapor amplia asegura vapor más seco.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Control de nivel de agua bajo y controlador de bomba de alimentación.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Nivel visible de agua.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Cámara de combustion refrigerada por agua, asegura una combustión más completa, menos formación de hollín y menos tiempo de mantenimiento.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Quemador convencional tipo pistola, completo con todos los controles necesarios.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Cumple con normas ambientales.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Todos los orificios de limpieza son de fácil acceso.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Fabricada de acuerdo a las normas ASME para fabricación de calderas de vapor.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Recubrimiento exterior con lámina de acero inoxidable brillante.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>La salida de gases localizada en un costado facilita el acceso a los tubos para su limpieza.</p></li>
          </ul>
        </div>
      </div>
    </div>
   
    <hr/>
    
    <a name="VerCalderas"></a>
    <h2 className="my-12 text-center text-red-500">Lista de Calderas Verticales</h2>
    <HeroList publisher="Marvel Comics" />
    </div>
  );
};
