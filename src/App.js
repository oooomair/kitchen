import './styles/style.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import { useContext } from 'react';
// import { DataContext } from './context/data';

function App() {

  return (
    <div className="app">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
