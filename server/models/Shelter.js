// modelacion de datos que se estaran guardando 

import mongoose from "mongoose"


//objeto schema que recibe un objeto como parametro en el que se le va a pasar las propiedaddes que se quieren guardar

//trim es para sacar los epsacios de ambos lados, ejemplo "    hola   " => "hola"
const shelterSchema = new mongoose.Schema({
    petName:{
        type: String,
        required: true,
        trim: true
    },
    petType:{
        type: String,
        required: true,
        trim: true
    },
    petDescription:{
        type: String,
        required: true,
        trim: true
    },
    skill1:{
        type: String
    },
    skill2:{
        type: String
    },
    skill3:{
        type: String
    },
    image:{
        url: String,
        public_id: String
    }
})

export default mongoose.model('Shelter', shelterSchema)