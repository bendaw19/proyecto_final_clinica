import React from "react";

const Sesion = () => {
  return (
    <div className="main">
      <div style={{}}>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
          }}
        >
          <h2 style={{
            display: "flex",
            justifyContent:"center"
          }}>Inicio de Sesión</h2>

          <label>Nombre de usuario:</label>
          <br />
          <input
            id="nombre_usuario"
            name="nombre_usuario"
            required="required"
            type="text"
          />

          <label>Contraseña:</label>
          <br />
          <input
            id="contraseña"
            name="contraseña"
            required="required"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Debe contener al menos un número y una letra minúscula y mayúscula, y al menos 8 o más caracteres"
          />

          <input type="submit" value="Entrar" />

          <hr class="linea_divisoria" />
        </form>
      </div>
      <div style={{}}>
        <form class="formularios">
          <h3>Registro de Usuario</h3>

          <label>Nombre:</label>
          <br />
          <input
            id="registro_usuario"
            name="registro_usuario"
            required="required"
            type="text"
          />

          <label>Contraseña:</label>
          <br />
          <input
            id="contaseña_usuario"
            name="contaseña_usuario"
            required="required"
            type="password"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Debe contener al menos un número y una letra minúscula y mayúscula, y al menos 8 o más caracteres"
          />

          <label>Repita Contraseña:</label>
          <br />
          <input
            id="contaseña_usuario_confirma"
            name="contaseña_usuario_confirma"
            required="required"
            type="password"
          />

          <label for="registro_email" class="email_usuario">
            Email:
          </label>
          <br />
          <input
            id="registro_email"
            name="registro_email"
            required="required"
            type="email"
          />

          <input type="button" value="Entrar" />
        </form>
      </div>
    </div>
  );
};

export default Sesion;
