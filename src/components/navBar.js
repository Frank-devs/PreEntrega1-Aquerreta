import React from 'react';
import '../stylesheets/navBar.css';

function NavBar() {
  return(
    <menu>
      <li className='logo-car-wash'>
        <img 
          src={require('../images/logo.png')}
          alt='logo de lavado de auto' />
      </li>
      <li>Inicio</li>
      <li>Nuestra Empresa</li>
      <li>Productos</li>
      <li>Servicios</li>
      <li>Contacto</li>
    </menu>
  );
}

export default NavBar;