import Paciente from "./Paciente";
import PropTypes from "prop-types";

const ListadoPacientes = ({ pacientes }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-5 md:mt-0">
        {pacientes && pacientes.length? 'Si hay pacientes' : 'No hay pacientes'}
        <h2 className="font-black text-2xl text-center">Listado pacientes</h2>
        <p className="text-base text-center">
            Administra tus{' '}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>

            {pacientes.map((paciente) => (
                <Paciente key={paciente.id} paciente={paciente} />
            ))}

        </div>
    );
};

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired, // Agrega la validación aquí
};

export default ListadoPacientes;

