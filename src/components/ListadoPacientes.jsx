import Paciente from "./Paciente";
import PropTypes from "prop-types";

const ListadoPacientes = ({ pacientes, setPaciente }) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mt-5 md:mt-0">
        {pacientes && pacientes.length? (
            <>
                <h2 className="font-black text-2xl text-center">Listado pacientes</h2>
                <p className="text-base text-center">
                    Administra tus{' '}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>
        
                    {pacientes.map((paciente) => (
                        <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente}/>
                    ))}
            </>
        ) : (
            <>
                <h2 className="font-black text-2xl text-center">No hay pacientes</h2>
                <p className="text-base text-center">
                    Comienza agregando{' '}
                    <span className="text-indigo-600 font-bold">Pacientes</span>
                </p>
            </>
        )}

        </div>
    );
};

ListadoPacientes.propTypes = {
    pacientes: PropTypes.array.isRequired,
    setPaciente: PropTypes.func.isRequired,
};

export default ListadoPacientes;

