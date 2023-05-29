import React, { useEffect } from "react";
import { deleteProfileRequest, getPublicacionesRequests } from "../api/shelter";
import { useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const PerfilCard = () => {
  const { id } = useParams();

  const [publicaciones, setPublicaciones] = useState([]);
  //traer las publcaciones del servidor
  const getPublicaciones = async () => {
    const res = await getPublicacionesRequests();
    setPublicaciones(res.data);
  };

  //ejecutandose con el useffect
  useEffect(() => {
    getPublicaciones();
  }, []);

  const buscarPorId = async (idBuscado, data) => {
    return await data.some((objeto) => objeto._id === idBuscado);
  };

  const existeID = buscarPorId(id, publicaciones);
  console.log(existeID);

  const recibirPorId = (idBuscado, data) => {
    // Utilizamos el método find() en el array data para encontrar el objeto que tenga un _id igual al idBuscado
    const objetoCapturado = data.find((objeto) => objeto._id === idBuscado);
    console.log(objetoCapturado);
    return objetoCapturado;
  };




//   eliminar por id
const handleDelete = (_id) => {
    toast((t) => (
        <div>
            <p>Estas seguro que que adoptaste a esta mascota??<strong>{_id}</strong></p>
            <div>
                <button className="handleDel" onClick={() => deletePerfil(_id)}>
                    Si, lo adopte.
                </button>

                <button onClick={() => toast.dismiss(t.id)}>
                    No, me equivoque.
                </button>
                
            </div>
        </div>
    ))
}

//eliminar del servidor
const deletePerfil = async (id) =>{
    const res = await deleteProfileRequest(id)
    console.log(res);
}

  if (existeID) {
    const objetitoCapturado = recibirPorId(id, publicaciones);
    console.log(objetitoCapturado);

    return (
      <div>
        {objetitoCapturado?.petName ? (
            <div>

            <div >
                <button className="botonDelete"
                onClick={() => handleDelete(objetitoCapturado._id)} >MASCOTA ADOPTADA</button>
            </div>
          <div className="renderObjetito">
            <div>
              <h3>Nombre: {objetitoCapturado.petName}</h3>
              <p className="renderObjetitoP">
                {" "}
                Tipo de Mascota: {objetitoCapturado.petType}
              </p>
              <p className="renderObjetitoP">
                Descripcion: {objetitoCapturado.petDescription}
              </p>
            </div>
            <div>
              <p className="renderObjetitoP">
                Habilidad 1: {objetitoCapturado.skill1}
              </p>
              <p className="renderObjetitoP">
                Habilidad 2: {objetitoCapturado.skill2}
              </p>
              <p className="renderObjetitoP">
                Habilidad 3: {objetitoCapturado.skill3}
              </p>
            </div>
          </div>
            </div>
        ) : (
            <div>
                <h2 className="adoptado">No existe este usuario!!</h2>
            </div>
        )} 
      </div>
    );
  }

  return (
    <>
      <h2>no existe el id </h2>
      {/* {existeID ? (
        <div>
          <p>Nombre: {recibirPorId.petName}</p>
          <p>Tipo: {recibirPorId.petType}</p>
        </div>
      ) : (
        <p>No existe ese ID</p>
      )}
     */}
    </>
  );
};

export default PerfilCard;
