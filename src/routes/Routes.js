import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inicio from '../pages/inicio';
import Cartelera from '../pages/cartelera';
import Proximamente from '../pages/proximamente';
import Combos from '../pages/combos';
import Promociones from '../pages/promociones';
import SobreNosotros from '../pages/sobrenosotros';
import MiPerfil from '../pages/miperfil';
import Ayuda from '../pages/ayuda';
import Login from '../pages/login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Cartelera" element={<Cartelera />} />
        <Route path="/Proximamente" element={<Proximamente />} />
        <Route path="/Combos" element={<Combos />} />
        <Route path="/Promociones" element={<Promociones />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/Ayuda" element={<Ayuda />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
