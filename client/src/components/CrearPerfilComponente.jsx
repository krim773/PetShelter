import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { createPublicacionesRequest } from "../api/shelter";
import * as Yup from "yup";
const CrearPerfilComponente = () => {
  //llamada a createPublicacionesRequest y creacion de funcion para crear perfiles
  const crearPerfil = async (profile) => {
    const res = await createPublicacionesRequest(profile);
    console.log(res.data);
  };

  return (
    <>
      <Formik
        initialValues={{
          petName: "",
          petType: "",
          petDescription: "",
          skill1: "",
          skill2: "",
          skill3: "",
        }}
        // validar con yup
        validationSchema={Yup.object({
          petName: Yup.string()
            .required("escribe el nombre de la mascota!")
            .min(2, "El nombre tiene que ser mas largo"),
          petType: Yup.string()
            .required("Te olvidaste de poner el tipo de mascota!!")
            .min(2, "El tipo es muy corto"),
          petDescription: Yup.string()
            .required("descripcion es necesaria!")
            .min(2, "la descripcion no es valida, es muy corta!"),
          skill1: Yup.string()
            .required("Habilidad Requerida"),
          skill2: Yup.string()
            .required("Habilidad Requerida"),
          skill3: Yup.string()
          .required("Habilidad Requerida")
        })}
        // esta funcioncapturara los datos enviados
        onSubmit={(values, actions) => {
          console.log(values);
          crearPerfil(values);
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="formularioCreacion">
            <div>
              <div>
                <label htmlFor="petName">Nombre de la Mascota</label>
              </div>
              <Field name="petName" placeholder="nombre.." />
              <ErrorMessage
                name="petName"
                className="textoErroValidacion"
                component="p"
              />

              <div>
                <label htmlFor="petType">Tipo de Mascota</label>
              </div>
              <Field name="petType" placeholder="tipo.." />
              <ErrorMessage
                name="petType"
                className="textoErroValidacion"
                component="p"
              />

              <div>
                <label htmlFor="petDescription">Descripcion de la mascota</label>
              </div>
              <Field name="petDescription" placeholder="descripcion." />
              <ErrorMessage
                name="petDescription"
                className="textoErroValidacion"
                component="p"
              />
            </div>

            <div>
              <div>
                <h3>Habilidades (Opcional)</h3>
                <label htmlFor="skill1">Habilidad 1</label>
                <Field name="skill1" placeholder="descripcion." />
                <ErrorMessage
                name="skill1"
                className="textoErroValidacion"
                component="p"
              />
              </div>

              <div>
                <label htmlFor="skill2">Habilidad 2</label>
                <Field name="skill2" placeholder="descripcion." />
                <ErrorMessage
                name="skill2"
                className="textoErroValidacion"
                component="p"
              />
              </div>

              <div>
                <label htmlFor="skill3">Habilidad 3</label>
                <Field name="skill3" placeholder="descripcion." />
                <ErrorMessage
                name="skill3"
                className="textoErroValidacion"
                component="p"
              />
              </div>

              <button type="submit" className="buttonSubmit">
                Confirmar Datos
              </button>
            </div>
          </Form>
        )}
      </Formik>

  
    </>
  );
};

export default CrearPerfilComponente;
