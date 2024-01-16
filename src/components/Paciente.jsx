import { PropTypes } from "prop-types";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Estás seguro de eliminar el paciente?");

    if (respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <>
      <div className="mx-5  bg-white shadow-md px-5 mb-5  py-10 rounded-xl ">
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">{propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">{fecha}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
          Síntomas: {""}
          <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between max-w-sm mt-10 mx-auto">
          <button type="button" onClick={() => setPaciente(paciente)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
          <button type="button" onClick={handleEliminar} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
        </div>

      </div>

    </>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.object,
  setPaciente: PropTypes.func,
  eliminarPaciente: PropTypes.func,
};

export default Paciente;
