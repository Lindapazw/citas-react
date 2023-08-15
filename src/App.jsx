
function App() {

  const sumar = () => {
    console.log(1+1);
  }

  sumar();

  let numero = 0;

  if(numero === 0) {
    console.log('hola');
  }

  const edad = 19;
  return (
    <>
      {edad >= 18 ? 'eres mayor' : 'eres menor'}
      <h1>{'Hola mundo'.toLowerCase()}</h1>
    </>
  )
}

export default App
