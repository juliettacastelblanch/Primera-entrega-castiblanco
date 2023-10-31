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
                  to="/electronics"
                  className="nav-item nav-link"
                  style={{ color: "white" }}
                >
                  electronics
                </NavLink>
              </h4>
              <h4>
                <NavLink
                  to="/jewelery"
                  className="nav-item nav-link"
                  style={{ color: "white" }}
                >
                  jewelery
                </NavLink>
              </h4>
              <h4>
                <NavLink
                  to="/men's clothing"
                  className="nav-item nav-link"
                  style={{ color: "white" }}
                >
                  men clothing
                </NavLink>
              </h4>
              <h4>
                <NavLink
                  to="/women's clothing"
                  className="nav-item nav-link"
                  style={{ color: "white" }}
                >
                  women clothing
                </NavLink>
              </h4>
            </div>
          </div>
        </div>
        <CarWidget />
      </nav>
    </>
  );
};

export default Navbar;
