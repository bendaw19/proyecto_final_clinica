import React from 'react';
import { FaPaw } from "react-icons/fa";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  
} from './navbar.js';

const Navbar = () => {
  return (
       <Nav>
        <NavLink to='/home'>
          CLINICA VETERINARIA REINO ANIMAL
        </NavLink>
        <NavLink to='/home' activeStyle>
          <FaPaw />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/nosotros' activeStyle>
            Nosotros
          </NavLink>
          <NavLink to='/consultas' activeStyle>
            Consultas
          </NavLink>
          <NavLink to='/contacto' activeStyle>
            Contacto
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/sesion'>Usuarios</NavBtnLink>
        </NavBtn>
      </Nav>
   
  );
};

export default Navbar;