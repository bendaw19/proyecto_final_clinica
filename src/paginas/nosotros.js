import React from "react";
import './../App.css';
import sandra from './../imagenes/sandra.jpeg';
import maria from './../imagenes/maria.jpg';
import lucas from './../imagenes/lucas.jpg';
import jose from './../imagenes/jose_manuel.jpg';

const Nosotros = () => {
  return (
    
    <div className="main">
      <h2 style={{
        display: "flex",
        justifyContent:"center",
        fontFamily:"Nunito"
      }}>
        Nosotros
      </h2>
      <div className="personal">
        <p className="parrafo">
          Hemos renovado nuestros procesos, hemos mejorado nuestros servicios, hemos actualizado nuestros 
          conocimientos para poder ofreceros a tu mascota y a ti la máxima excelencia en el cuidado veterinario.
          Nuestro equipo está preparado para cuidar de la salud de tu animal como si fuera de nuestra propia familia, con la máxima profesionalidad y el más avanzado equipo técnico.
        </p>
      </div> 
      <div className="galeria">
          <div className="contenedor">
  
              <img src={maria} className="veterinarios" alt="foto maria"/>
              {/*<p className="nombre">María Boza Sánchez</p>*/}
           
            
              <img src={jose} className="veterinarios" alt="foto jose"/>
              {/*<p className="nombre">José Manuel Rodriguez</p>*/}

              <img src={sandra} className="veterinarios" alt="foto sandra"/>
              {/*<p className="nombre">Sandra Romero</p>*/}
            
            
              <img src={lucas} className="veterinarios" alt="foto lucas"/>       
              {/*<p className="nombre">Lucas Ramirez Ortega</p>*/}
           
          </div>
      </div>
      <div className="servicios">
        <div></div>

      </div>
    </div>
  );
};

export default Nosotros;
