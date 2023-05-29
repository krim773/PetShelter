import React from "react";
import { Link } from "react-router-dom";


const Header = ({ ubicacion }) => {
  return (
    <div className="contenedorHeader">
      <div className="header">
        <h1>Pet Shelter</h1>
        <h2>Refugio de Mascotas</h2>
      </div>
      <div>
        {/* ternario para cambiar de enlace automaticamente */}
        {ubicacion === "home" ? (
          <span className="buttonHeader">
            <Link to={`/create`}>Agregar mascotas</Link> |
          </span>
        ) : (
          <span className="buttonHeader">
            <Link to={`/`}>Volver al inicio</Link> |
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
