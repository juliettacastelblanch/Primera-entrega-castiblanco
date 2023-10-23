import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarWidget from '../Cartwidget/Cartwidget';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">CASTELLBLANCH</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
           
            <li className="nav-item">
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacto ">contacto</NavLink>
            </li>
            <li className="nav-item">
              <NavLink  to="/destacados">Destacados</NavLink>
            </li>
            <li className="nav-item">
           
              <CarWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
