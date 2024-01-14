import { useState } from "react";
import PropTypes from "prop-types";

import Error from "./Error";

const Formulario = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validación Formulario

    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    //Objeto de Pacientes
    const ObjetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    setPacientes([...pacientes, ObjetoPaciente]);

    //Reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-auto">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className=" text-lg mt-5 text-center mb-10">
        Añade Paciente y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        action=""
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && (
          <Error>
            <h1>Todos los campos son obligatorios</h1>
          </Error>
        )}
        {/* {error && <Error mensaje={"Todos los campos son obligatorios"} />} */}

        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            id="mascota"
            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            type="text"
            id="propietario"
            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Email
          </label>
          <input
            type="email"
            id="email"
            className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md"
            placeholder="Email Contacto Propietadio"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="date"
            className="block text-gray-700 uppercase font-bold"
          >
            Alta
          </label>
          <input
            type="date"
            id="date"
            className="border-2 mt-2 w-full p-2  rounded-md"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="block text-gray-700 uppercase mt-2 font-bold w-full p-2"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          ></textarea>
        </div>

        <input
          type="submit"
          value="Agregar Paciente"
          className="text-white bg-indigo-600 font-bold w-full p-3 uppercase hover:bg-indigo-700 cursor-pointer transition-colors"
        />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPacientes: PropTypes.func.isRequired,
};

export default Formulario;
