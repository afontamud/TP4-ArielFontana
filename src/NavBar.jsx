import React, { useState, useEffect } from 'react';




const NavBar = () => {
  //Declaro una variable donde voy a almacenar la ruta de la imagen que quiero mostrar
  const brand =
    'https://f.hubspotusercontent10.net/hub/20044066/hubfs/raw_assets/public/kong/images/logo.png?width=190&name=logo.png';
  //la lógica va siempre antes del return
  return (
    <header className={`header background--transparent`}>
      <div className="header-container">
        {/* Botón de menú  */}
        <div className="menu-button">
          <span>Menu</span>
        </div>

        {/* links de navegación */}
        <nav>
          <ul className="nav-container">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li className="products-item">
              <a href="/">
                Productos <span className="arrow"></span>
              </a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* logo de la marca */}
        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
