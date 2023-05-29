import React from 'react'

const EditarMascotaComponente = () => {
  return (
    <div className="formularioCreacion">
    <form action="" className="formComponente">
      <div className="div1Formulario">
        <div>
          <label htmlFor="">Nombre de la Mascota</label>
        </div>
        <input type="text" />


        <div>
          <label htmlFor="">Tipo de Mascota</label>
        </div>
        <input type="text" />


        <div>
          <label htmlFor="">DEscripcion de la mascota</label>
        </div>
        <input type="text" />

      </div>

      <div className="div2Formulario">
        <div>
          <h3>Habilidades (Opcional)</h3>
          <label htmlFor="">Habilidad 1</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Habilidad 2</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="">Habilidad 3</label>
          <input type="text" />
        </div>
      <button className='buttonSubmit'>Editar Datos</button>

      </div>
    </form>
  </div>
  )
}

export default EditarMascotaComponente
