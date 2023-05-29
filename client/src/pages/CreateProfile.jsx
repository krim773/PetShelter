import React from 'react'
import Header from '../components/Header'
import CrearPerfilComponente from '../components/CrearPerfilComponente'

const CreateProfile = () => {
  return (
    <div className='CreateProfileCSS'>
      <Header ubicacion={"CreateProfile"}/>
      <CrearPerfilComponente />      
    </div>
  )
}

export default CreateProfile
