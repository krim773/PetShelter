import axios from "axios";

//cuando se haga elbuild generara una carptea y direactamente en express se realizara todo
//para no poner localhost,, en el json se agregara una propiedad solo para desarrollo
export const getPublicacionesRequests = async () => await axios.get("/home");

// esta funcionsera para crear perfiles
export const createPublicacionesRequest = async (profile) => await axios.post("/new", profile);


//ruta del back donde se elimina los perfiles
export const deleteProfileRequest = async id => await axios.delete("/perfil/" + id ) 