import React from 'react';
import './App.css';
import Navbar from './componentes/NavBar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Inicio from './paginas/home';
import Nosotros  from './paginas/nosotros';
import Consultas from './paginas/consultas';
import Contacto from './paginas/contacto';
import Sesion from './paginas/sesion';
/*import logo from '../src/imagenes/logo.png'*/;


function App() {
  return (
      <Router>
      <Navbar />
      <Routes>
        <Route path='/home' exact element={<Inicio/>} />
        <Route path='/nosotros' element={<Nosotros/>} />
        <Route path='/consultas' element={<Consultas/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/sesion' element={<Sesion/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
