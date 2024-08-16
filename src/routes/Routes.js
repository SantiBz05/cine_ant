import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Inicio from '../pages/inicio';
import Cartelera from '../pages/cartelera';
import CarteleraAkira from '../pages/cartelera_akira';
import CarteleraMagoOz from '../pages/cartelera_magooz';
import CarteleraLoQueElVientoSeLevo from '../pages/cartelera_loqueelvientosellevo';
import CarteleraPulpFiction from '../pages/cartelera_pulpfiction';
import CarteleraTitanic from '../pages/cartelera_titanic';
import CarteleraVolverAlFuturo from '../pages/cartelera_volverfuturo';
import Proximamente from '../pages/proximamente';
import Combos from '../pages/combos';
import Promociones from '../pages/promociones';
import SobreNosotros from '../pages/sobrenosotros';
import MiPerfil from '../pages/miperfil';
import Ayuda from '../pages/ayuda';
import Login from '../pages/login';
import Boleteria from '../pages/boleteria';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Cartelera" element={<Cartelera />} />
        <Route path="/CarteleraAkira" element={<CarteleraAkira />} />
        <Route path="/CarteleraMagoOz" element={<CarteleraMagoOz />} />
        <Route path="/CarteleraLoQueElVientoSeLevo" element={<CarteleraLoQueElVientoSeLevo />} />
        <Route path="/CarteleraPulpFiction" element={<CarteleraPulpFiction />} />
        <Route path="/CarteleraTitanic" element={<CarteleraTitanic />} />
        <Route path="/CarteleraVolverAlFuturo" element={<CarteleraVolverAlFuturo />} />
        <Route path="/Proximamente" element={<Proximamente />} />
        <Route path="/Combos" element={<Combos />} />
        <Route path="/Promociones" element={<Promociones />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/MiPerfil" element={<MiPerfil />} />
        <Route path="/Ayuda" element={<Ayuda />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Boleteria" element={<Boleteria />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
