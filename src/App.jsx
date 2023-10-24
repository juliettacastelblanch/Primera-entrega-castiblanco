import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./components/paginas/Inicio";
import Contacto from "./components/paginas/Contacto";
import Destacados from "./components/paginas/Destacados";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/footer/footer";



function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route exact path="/" element={<Inicio />} />
       <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/destacados" element={<Destacados />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
   
  );
}

export default App;
