import './styles/style.css';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import EachFood from './components/EachFood';
import Footer from './components/Footer';

function App() {

  return (
    <div className="app">
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/eachfood/:genreId/:foodId' element={<EachFood/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
