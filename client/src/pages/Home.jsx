import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ListaDeMascotas from "../components/ListaDeMascotas";
import { getPublicacionesRequests } from "../api/shelter";
import {VscEmptyWindow} from 'react-icons/vsc';
const Home = () => {
  const [publicaciones, setPublicaciones] = useState([]);
  //traer las publcaciones del servidor
  const getPublicaciones = async () => {
    const res = await getPublicacionesRequests();
    setPublicaciones(res.data)
  };

  //ejecutandose con eluseeffect
  useEffect(() => {
    getPublicaciones()    
  }, [])
  

//por si aun no se agreegaron mascotass
  if(publicaciones.length === 0) return(
    <div>
      <Header ubicacion={"home"}/>
      <VscEmptyWindow className="iconoEmpty"/>
      <h3>Aun no hay mascotas</h3>
    </div>
  )

  return (
    <div>
      <Header ubicacion={"home"}/>
      <ListaDeMascotas publicaciones={publicaciones}/>
    </div>
  );
};

export default Home;
