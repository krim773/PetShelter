import React from "react";
import { Link } from "react-router-dom";



const ListaDeMascotas = ({ publicaciones }) => {
  return (
    <>
      <table>
        <thead>
          <tr className="trTitulo">
            <th scope="col">Nombre de Mascota</th>
            <th scope="col">Tipo de Mascota</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        {publicaciones &&
          publicaciones.map((publicacion) => {
            return (
              <tr key={publicacion._id}>
                <td>{publicacion.petName}</td>
                <td>{publicacion.petType}</td>
                <td>
                  <span>
                    <Link to={`/profile/${publicacion._id}`}>detalles</Link> |
                    <Link to={`/profile/${publicacion._id}/edit`}>editar</Link>
                  </span>
                </td>
              </tr>
            );
          })}
      </table>








      
    </>
  );
};

export default ListaDeMascotas;
