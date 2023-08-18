import PropTypes from 'prop-types';

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const handleEliminar = () => {
        const respuesta = confirm('Are you sure?');
        if (respuesta) {
            eliminarPaciente(id);
        }
    }

    const {nombre, propietario, email, fecha, sintomas, id} = paciente;
    return (
        <div className="mt-5 bg-white shadow-md rounded-lg py-5 px-5 mx-5">
            <p className="font-bold">Nombre:{' '} <span className="font-normal">{nombre}</span></p>
            <p className="font-bold mt-3">Propietario:{' '} <span className="font-normal">{propietario}</span></p>
            <p className="font-bold mt-3">Email:{' '} <span className="font-normal">{email}</span></p>
            <p className="font-bold mt-3">Fecha alta:{' '} <span className="font-normal">{fecha}</span></p>
            <p className="font-bold mt-3">Síntomas:{' '} <span className="font-normal">{sintomas}</span></p>

            <div className='flex justify-between mt-5'>
                <button className=' text-white bg-yellow-400 hover:bg-yellow-500 rounded-md p-2 px-10 flex ' type='button' onClick={() => setPaciente(paciente)}> Editar </button>
                <button className=' text-white bg-red-600 hover:bg-red-700 rounded-md p-2 px-10 flex ' type='button' onClick={handleEliminar} >Eliminar</button>
            </div>
        </div>
    )
}

Paciente.propTypes = {
    paciente: PropTypes.shape({
        nombre: PropTypes.string.isRequired,
        propietario: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        fecha: PropTypes.string.isRequired,
        sintomas: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    setPaciente: PropTypes.func.isRequired,
    eliminarPaciente: PropTypes.func.isRequired,
};

export default Paciente
