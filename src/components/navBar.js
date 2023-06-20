import React from 'react';
import Cart from './CartWidget.js';
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
      <li id='carrito_compras'><Cart /></li>
    </menu>
  );
}

export default NavBar;