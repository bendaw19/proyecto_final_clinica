import React from "react";
import mascotas from "./../imagenes/veterinaria.jpg";

const Inicio = () => {
  return (
    <div className="main">
      <div className="mascotas_1">
        <img src={mascotas} className="mascotas_2" alt="mascotas"/>
      </div>
      <div className="presentacion">
        <h3>La salud de nuestros pacientes, lo primero para nosotros.</h3>
        <p>
          Desde Clínica Veterinaria Reino Animal queremos ofrecer una atención de calidad
          a los animales de compañia. Nuestro equipo de veterinarios y veterinarias está 
          formado por clínicos especialistas en la observación, diagnóstico y tratamiento 
          de nuestros pacientes.
        <ul>
          <p> 
            La clínica está perfectamente equipada para poder atender todas las necesidades 
            de tu mascota:
          </p>
            <li>
              Cuenta con tres consultas donde poder realizar la exploración de nuestras 
              mascotas y algunas pruebas diagnósticas (ecografías, alergias, etc.).
            </li>
            <li>
              Sala de rayos X con tecnología digital.
            </li>
            <li>
              Laboratorio para realizar análisis sanguíneos, de orina y coprológicos.
            </li>
            <li>
              Hospitalización con sala de oxigenoterapia.
            </li>
            <li>
              Un quirófano completamente equipado con anestesia inhalatoria, 
              monitorización  y todo lo necesario para realizar cirugías de tejidos 
              blandos y traumatología.
            </li>
            <li>
              Resonancia magnética. Para un diagnósticoseguro e indoloro. 
              Obtenemos imágenes detalladas de órganos y estructura de nuestra mascota.
            </li>
            <li>
              También lo completa una sala de reuniones y una biblioteca.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Inicio;
