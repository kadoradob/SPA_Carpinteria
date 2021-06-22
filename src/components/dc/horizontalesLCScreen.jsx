import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const horizontalesLCScreen = () => {
    return (
        <div>
              <h1 className="my-10 text-center text-red-700">Calderas horizontales LC</h1>
      <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex flex-row items-center mb-4"> 
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
              <p className="flex-1">Horizontales</p></li>  
            <li className="flex flex-row justify-center flex-1 flex-nowrap">
              <p className="font-bold text-red-600">Tipo de combustible:</p>
              <p className="flex-1">Líquido y gaseoso.</p> </li>
            <li className="flex flex-row justify-center flex-1 flex-nowrap">
              <p className="font-bold text-red-600">Capacidades:</p>
              <p className="flex-1">De 10 a 80 BHP</p> </li>  
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <p>Disminución en los tiempos de mantenimiento.</p></li> 
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <p>Cámara trasera del segundo paso refrigerada por agua (Cámara húmeda). Asegura un calentamiento uniforme, eliminado los riesgos de falla de los placatubos.
</p></li>        
          </ul>
        </div>
      </div>
    </div>
      
    <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
          <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">Precisión en pocos minutos</h4>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-start flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>La construcción de la caldera CONTINENTAL se distingue de las demás por su perfecta estabilidad en la combustión.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>El quemador viene diseñado y construido especialmente para la caldera.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>El aire de la combustión es automáticamente precalentado en la garganta del hogar.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Dos corrientes de aire de combustión que giran a la inversa imparten acción giratoria a los gases, lo cual crea una alta transferencia de calor a través de la cámara.</p></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
          <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">Acceso inigualable</h4>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-start flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>El diseño de dos, tres y cuatro pasos CONTINENTAL es el único que ofrece acceso rápido tanto a la parte delantera como a la parte trasera de la caldera.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>En las calderas CONTINENTAL se manipulan fácilmente las puertas mediante bisagras y solo requiere aflojar un pequeño número de tuercas.</p></li>
          </ul>
        </div>
      </div>
    </div>
    
    <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
          <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">Distribución Balanceada del calor </h4>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-start flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Alta eficiencia y una larga vida se logran permitiendo grandes áreas de circulación de aire entre los tubos y cámaras de combustión, así como también entre los tubos y el tambor de la caldera.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Contrario a la opinión popular, la temperatura de los gases de chimenea no es una función del número de pasos sino del diseño básico de la caldera y de la disposición de las superficies de calentamiento.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Una baja absorción de calor radiante en los tubos de las calderas de tipo competitivo tiende a retardar la culminación de la combustión a la parte trasera del hogar y al segundo paso.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Este exceso de calor no puede ser absorbido exclusivamente por convección, a pesar del número de pasos adicionales que se empleen y se manifiesta como calor desperdiciado como lo indica la temperatura alta de chimenea.</p></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
          <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">Baja temperatura en la chimenea</h4>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-start flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Se garantiza que la temperatura de los gases de chimenea no excede en más de 125ºF la temperatura de agua de caldera.</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Una baja absorción de calor radiante en los tubos de las calderas de tipo competitivo tiende a retardar la culminación de la combustión a la parte trasera del hogar y al segundo paso. Este exceso de calor no puede ser absorbido exclusivamente por convección, a pesar del número de pasos adicionales que se empleen y se manifiesta como calor desperdiciado como lo indica la temperatura alta de chimenea.</p></li>
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
              <i className="mx-4 fas fa-chevron-right"></i><p>Eficiencia en el ahorro de combustible</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Circulación interna balanceada</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Sin refractarios</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Rápido acceso</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Controles electrónicos a toda prueba</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Baja temperatura de la chimenea</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Tiro forzado silencioso</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Confianza en la operación automática</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Quemadores eficientes</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Protección a los tubos</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Calidad del vapor</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Garantía contra choque térmico</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Garantía de instalación y servicio</p></li>
          </ul>
        </div>
      </div>
    </div>

    <hr/>

    <a name="VerCalderas"></a>
    <h2 className="my-12 text-center text-red-500">Lista de Calderas horizontales LC</h2>
    <HeroList publisher="DC Comics"/>
        </div>
    )
}
