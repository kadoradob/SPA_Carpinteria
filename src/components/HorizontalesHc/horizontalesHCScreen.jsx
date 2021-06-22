import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const horizontalesHCScreen = () => {
    return (
        <div>
              <h1 className="my-10 text-center text-red-700">Caldera horizontales HC</h1>
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
              <p className="flex-1">Horizontales</p></li>  
            <li className="flex flex-row justify-center flex-1 flex-nowrap">
              <p className="font-bold text-red-600">Tipo de combustible:</p>
              <p className="flex-1">Líquido y gaseoso.</p> </li>
            <li className="flex flex-row justify-center flex-1 flex-nowrap">
              <p className="font-bold text-red-600">Capacidades:</p>
              <p className="flex-1">De 10 a 80 BHP</p> </li>         
          </ul>
          <hr/>
          <div className="flex flex-row justify-center bg-red">
            <div>
              <ul>
                <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>1. Purga</p></li> 
                <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>2. Brida del quemador</p></li>    
                <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>3. Entrada de combustible</p></li>  
                <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>4. Conexión a tierra</p></li>  
                <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>5. Salida de vapor</p></li>  
                <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>6. Puertas delanteras</p></li>
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>7. Hand hole</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>8. Unión (presóstato, termómetro y manómetro)</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>9. Oreja para cargue</p></li> 
              </ul>
            </div>
            <div>
              <ul>
                <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>10. Salida válvula de seguridad</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>11. Caja trasera de salida de humo</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>12. Unión salida de chimenea</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>13. Purga trasera</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>14. Man hole</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>15. Puerta de limpieza</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>16. Bisagra de apertura</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>17. Brida para chimenea</p></li> 
                  <li className="flex flex-row justify-start flex-1 flex-nowrap">
                  <p>18.Control de nivel</p></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
          <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">Generalidades </h4>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-start flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Diseño especial, para menor consumo de energía y combustible</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>ESistema óptimo de aislamiento que garantiza alta eficiencia</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Diseños para operación a alta presión</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Alta eficiencia térmica sin uso de economizadores (92%)</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Cumple con TS EN 12953-1-3,TS 377 1-2-3-4-5-6-7-8-10-11-12-14, TS EN 12953 1-2-3-4-5-6-7-8-10-11-12-14 standards</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Compactas y de alta eficiencia</p></li>
            <li className="flex flex-row justify-start flex-1 flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Garantiza bajas emisiones de gases</p></li>
          </ul>
        </div>
      </div>
    </div>

    
    <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
          <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">Eficiencia</h4>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-start flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>Alcanzan una eficiencia del 92% y se pueden instalar opcionalmente economizadores diseñados para el aprovechamiento del calor residual de chimenea, y lograr eficiencias superiores al 96%.</p></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-row justify-around my-6">
      <div className="flex-1 p-6 tracking-wide bg-white rounded-md shadow-lg">
        <div id="header" className="flex items-center mb-4"> 
          <div id="header-text" className="ml-6 leading-5 sm">
              <h4 id="name" className="text-xl font-semibold">Sistema de control</h4>
          </div>
        </div>
        <div id="quote">
          <ul className="p-0 ">
            <li className="flex flex-row justify-start flex-nowrap">
              <i className="mx-4 fas fa-chevron-right"></i><p>ESistema de control por PLC, para señales de presión, temperatura, nivel, etc. Con comunicación a dispositivos móviles.</p></li>
          </ul>
        </div>
      </div>
    </div>

    <hr/>

    <a name="VerCalderas"></a>
    <h2 className="my-12 text-center text-red-500">Lista de Calderas horizontales HC</h2>

    {/* <HeroList publisher="DC Comics"/> */}
        </div>
    )
}
