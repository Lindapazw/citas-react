import PropTypes from 'prop-types';

const Paciente = ({paciente}) => {

    const {nombre, propietario, email, fecha, sintomas} = paciente;
    return (
        <div className="mt-5 bg-white shadow-md rounded-lg py-5 px-5 mx-5">
            <p className="font-bold">Nombre:{' '} <span className="font-normal">{nombre}</span></p>
            <p className="font-bold mt-3">Propietario:{' '} <span className="font-normal">{propietario}</span></p>
            <p className="font-bold mt-3">Email:{' '} <span className="font-normal">{email}</span></p>
            <p className="font-bold mt-3">Fecha alta:{' '} <span className="font-normal">{fecha}</span></p>
            <p className="font-bold mt-3">Síntomas:{' '} <span className="font-normal">{sintomas}</span></p>
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
    }).isRequired,
};

export default Paciente
