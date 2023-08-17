import { useState} from "react";

const Formulario = ({pacientes, setPacientes}) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

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
                sintomas
            }

            setPacientes([...pacientes, objetoPacientes]);
        }
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-2xl text-center">Seguimiento Pacientes</h2>
            <p className="text-base text-center">Añade Pacientes y {''} 
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="mt-5 bg-white shadow-md rounded-lg py-5 px-5" onSubmit={handleSubmit}>
            {error && <div className="bg-red-600 text-white text-center p-2 font-bold mb-2 rounded-lg"><p>Todos los campos son obligatorios</p></div> }

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

export default Formulario
