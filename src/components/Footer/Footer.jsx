import React from 'react'

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
            Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
             Contacto
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-body-secondary">
              Destacados
            </a>
          </li>
          
        </ul>
        <p className="text-center text-body-secondary">&copy; 2023 Castellblanch, Inc</p>
      </footer>
    </div>
  );
}

export default Footer