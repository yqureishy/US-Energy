import './App.css';
import {useEffect} from 'react'
import CrudeExports from './components/Crude/ExportsTotal';
import ImportsOPEC from './components/Crude/ProductionTotal';


function App() {

  return (
    <div className="App">
      <h1>Oil and Gas</h1>
      <CrudeExports />
      <ImportsOPEC />
    </div>
  );

}

export default App;
