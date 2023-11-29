import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <h1 className='title'>Counter</h1>
        <p className='counter-text'>0</p>
        <button id="sum" type='button'>Sum</button>
        <button id="substract" type='button'>Subtract</button>
        <button id="reset" type='button'>Reset</button>
      </div>
    </div>
  );
}

export default App;

//agregar componente que tenga valor numerico que se llame valor numerico y va a mostrar un numero y tres botones