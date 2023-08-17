import { useState, useEffect } from "react";
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({pacientes, setPacientes, paciente}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() =>{
        if(Object.keys(paciente).length > 0){
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
        }
    }, [paciente]);


    // error
    const generarId = () => {
        const ramdon =  Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);
        return ramdon + fecha;
    }

    // validacion del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true);
        } else {
            setError(false);

            // objeto de pacientes
            const objetoPacientes = {
                nombre, 
                propietario, 
                email, 
                fecha, 
                sintomas,
                id: generarId()
            }

            setPacientes([...pacientes, objetoPacientes]);

            // reiniciar el form
            setNombre('');
            setPropietario('');
            setEmail('');
            setFecha('');
            setSintomas('');
        }
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
            <p className="text-base text-center">Añade Pacientes y {''} 
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="mt-5 bg-white shadow-md rounded-lg py-5 px-5" onSubmit={handleSubmit}>
            {error && <Error>Todos los campos son obligatorios</Error>}

                <div>
                    <label className="font-bold" htmlFor="nombre">Nombre mascota:</label>
                    <input className="block mt-2 border-2 w-full p-2 placeholder-gray-400 rounded-lg" type="text" placeholder="Nombre de la mascota" id="nombre" value={nombre} onChange={ (e) => setNombre(e.target.value) } />
                </div>
                <div className="mt-5">
                    <label className="font-bold" htmlFor="propietario">Nombre Propietario:</label>
                    <input className="block mt-2 border-2 w-full p-2 placeholder-gray-400 rounded-lg" type="text" placeholder="Nombre del propietario" id="propietario" value={propietario} onChange={ (e) => setPropietario(e.target.value) } />
                </div>
                <div className="mt-5">
                    <label className="font-bold" htmlFor="email">Email:</label>
                    <input className="block mt-2 border-2 w-full p-2 placeholder-gray-400 rounded-lg" type="email" placeholder="Contacto propietario" id="email"  value={email} onChange={ (e) => setEmail(e.target.value) }/>
                </div>
                <div className="mt-5">
                    <label className="font-bold" htmlFor="alta">Alta:</label>
                    <input className="block mt-2 border-2 w-full p-2 rounded-lg" type="date" id="alta"  value={fecha} onChange={ (e) => setFecha(e.target.value) }/>
                </div>
                <div className="mt-5">
                    <label className="font-bold" htmlFor="sintomas">Síntomas:</label>
                    <textarea className="block border-2 w-full rounded-lg p-2 mt-2" id="sintomas" cols="30" rows="5"  placeholder="Describe los síntomas"  value={sintomas} onChange={ (e) => setSintomas(e.target.value) }></textarea>
                </div>

                <input className="bg-indigo-600 w-full p-2 text-white font-semibold mt-5 rounded-lg hover:bg-indigo-700 cursor-pointer transition-all" type="submit" value="Agregar paciente"/>
            </form>
        </div>
    )

}

Formulario.propTypes = {
    pacientes: PropTypes.array.isRequired,
    setPacientes: PropTypes.func.isRequired,
    paciente: PropTypes.object.isRequired, 
};



export default Formulario
