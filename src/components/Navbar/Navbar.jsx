import { NavLink } from "react-router-dom";
import CarWidget from '../Cartwidget/Cartwidget';
import Logo from "../Imagenes/Logo.jpeg";


const Navbar = () => {
  return (
    <>
      
        <nav
          className="navbar navbar-expand-lg navbar-light bg-primary"
          style={{ color: "white" }}
        >
          <div className="container-fluid">
            <NavLink to="/home">
              <img src={Logo} height="100" alt="no encontrada" />
            </NavLink>

            <h1>CASTELLBLANCH</h1>

            <button
              type="button"
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto">
                <h4>
                  <NavLink
                    to="/Inicio"
                    className="nav-item nav-link"
                    style={{ color: "white" }}
                  >
                    Inicio
                  </NavLink>
                </h4>
                <h4>
                  <NavLink
                    to="/Contacto"
                    className="nav-item nav-link"
                    style={{ color: "white" }}
                  >
                    Contacto
                  </NavLink>
                </h4>
                <h4>
                  <NavLink
                    to="/Destacados"
                    className="nav-item nav-link"
                    style={{ color: "white" }}
                  >
                    Destacados
                  </NavLink>
                </h4>
              </div>
            </div>
          </div>
          <CarWidget />
        </nav>
    
    </>
  );
}

export default Navbar;
