 import { Router } from "express";
 import { homeShelter, newProfile, updating, getProfileID, deleteProfile } from "../controllers/shelter.controller.js";

 const router = Router();

 //para tener la lista de perfiles
 router.get('/home', homeShelter )
//  para crear 
router.post('/new', newProfile  )
// para actualizar / editar un perfil de una mascota y que traiga un id
router.put('/edit/:id', updating )
// para recibir solo un perfil
router.get('/perfil/:id', getProfileID )
// para eliminar un perfil
router.delete('/perfil/:id', deleteProfile )


export default router