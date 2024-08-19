import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Col, Row, Carousel, Typography, Button } from 'antd';
import FooterComponent from '../components/footer'; // Asegúrate de que el nombre sea correcto

// Importación de imágenes
import Akira from '../img/Akira.jpg';
import cAkira from '../img/cAkira.png';
import Titanic from '../img/titanic.jpg';
import cTitanic from '../img/cTitanic.png';
import cMagoOz from '../img/cMagoOZ.png';
import VolverAlFuturo from '../img/volverAlFuturo.jpg';
import cVolverAlFuturo from '../img/cVolveralFuturo.png';
import cPulpFiction from '../img/cPulpFiction.png';
import ElPadrino from '../img/padrinovich.jpeg';
import peli2001 from '../img/2001.jpg';
import IndianaJones from '../img/Indiana_Jones.jpg';
import superCombo from '../img/superCombo.png';
import superCombo2 from '../img/superCombo2.png';
import superCombo3 from '../img/superCombo3.png';
import promo1 from '../img/promo1.jpg';
import promo2 from '../img/promo2.jpg';
import promo3 from '../img/promo4.jpg';
import red1 from '../img/face.png';
import red2 from '../img/insta.png';
import red3 from '../img/x.png';

import '../css/Inicio.css'; 

const { Title } = Typography;

const contentStyle: React.CSSProperties = {
  height: '100%',
  color: '#fff',
  lineHeight: '200px',
  textAlign: 'center',
  objectFit: 'cover',
  width: '100%',
  backgroundColor: 'black',
};

function Inicio() {
  const [showGallery, setShowGallery] = useState('Cartelera');

  return (
    <div className="background">

          <Navbar />

      {/* Carrusel principal */}
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col xs={24} sm={24} md={12} lg={16} xl={18}>
          <div style={{ padding: '2%' }}>
            <Carousel autoplay arrows>
              <div>
                <Link to="/Cartelera">
                  <img src={cAkira} alt="Imagen 1" style={contentStyle} />
                </Link>
              </div>
              <div>
                <Link to="/Cartelera">
                  <img src={cMagoOz} alt="Imagen 3" style={contentStyle} />
                </Link>
              </div>
              <div>
                <Link to="/Cartelera">
                  <img src={cPulpFiction} alt="Imagen 3" style={contentStyle} />
                </Link>
              </div>
              <div>
                <Link to="/Cartelera">
                  <img src={cTitanic} alt="Imagen 2" style={contentStyle} />
                </Link>
              </div>
              <div>
                <Link to="/Cartelera">
                  <img src={cVolverAlFuturo} alt="Imagen 4" style={contentStyle} />
                </Link>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
      
      {/* Sección de selección de galería */}
      <Row justify="center" style={{ marginTop: '20px', alignItems: 'flex-start' }}>
        <Col xs={24} md={16} lg={12} xl={12} style={{ marginLeft: '2%' }}>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <Title level={4} style={{ color: 'red' }}>
              ¡Echa un vistazo a nuestra selección!
            </Title>
            {/* Botones para cambiar entre galerías */}
            <div style={{ marginBottom: '20px' }}>
              <Button 
                type="primary" danger 
                onClick={() => setShowGallery('Cartelera')} 
                style={{ marginRight: '10px' }}
              >
                Cartelera
              </Button>
              <Button 
                type="primary" danger 
                onClick={() => setShowGallery('Proximamente')}
              >
                Próximamente
              </Button>
            </div>
            {/* Galerías */}
            {showGallery === 'Cartelera' && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2%' }}>
                <a href="/Cartelera" style={{ width: '33%' }}>
                  <img src={Akira} alt="Imagen 1" className="gallery-img" style={{ width: '101%', borderRadius: '8px', objectFit: 'cover' }} />
                </a>
                <a href="/Cartelera" style={{ width: '34%' }}>
                  <img src={Titanic} alt="Imagen 2" className="gallery-img" style={{ width: '97%', borderRadius: '8px', objectFit: 'cover' }} />
                </a>
                <a href="/Cartelera" style={{ width: '33%' }}>
                  <img src={VolverAlFuturo} alt="Imagen 3" className="gallery-img" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                </a>
              </div>
            )}
            {showGallery === 'Proximamente' && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2%' }}>
                <a href="/Proximamente" style={{ width: '34%' }}>
                  <img src={ElPadrino} alt="Imagen 1" className="gallery-img" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                </a>
                <a href="/Proximamente" style={{ width: '32.2%' }}>
                  <img src={peli2001} alt="Imagen 2" className="gallery-img" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                </a>
                <a href="/Proximamente" style={{ width: '34%' }}>
                  <img src={IndianaJones} alt="Imagen 3" className="gallery-img" style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
                </a>
              </div>
            )}
          </div>
        </Col>
        <Col xs={24} md={8} lg={6} xl={6} style={{ paddingLeft: '0' }}>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <Title level={4} style={{ color: 'red' }}>
              ¡Las mejores Promociones!
            </Title>
            <Link to="/Promociones">
              <img src={promo1} alt="Imagen 1" style={{ width: '65%', marginBottom: '10px', borderRadius: '8px' }} />
            </Link>
            <Link to="/Promociones">
              <img src={promo2} alt="Imagen 2" style={{ width: '65%', marginBottom: '10px', borderRadius: '8px' }} />
            </Link>
            <Link to="/Promociones">
              <img src={promo3} alt="Imagen 3" style={{ width: '65%', borderRadius: '8px' }} />
            </Link>
          </div>
        </Col>
      </Row>

      {/* Carrusel de combos */}
      <Row justify="center" style={{ marginTop: '20px', alignItems: 'flex-start' }}>
        <Col xs={24} md={16} lg={12} xl={12} style={{ marginLeft: '2%' }}>
          <Carousel autoplay effect="fade" dots>
            <div>
              <h3 style={contentStyle}>
                <Link to="/Combos">
                  <img src={superCombo} alt="Imagen 1" style={contentStyle} />
                </Link>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Link to="/Combos">
                  <img src={superCombo2} alt="Imagen 2" style={contentStyle} />
                </Link>
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Link to="/Combos">
                  <img src={superCombo3} alt="Imagen 3" style={contentStyle} />
                </Link>
              </h3>
            </div>
          </Carousel>
        </Col>
        <Col xs={24} md={8} lg={6} xl={6} style={{ paddingLeft: '0' }}>
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <Title level={4} style={{ color: 'red' }}>
              Síguenos en nuestras redes sociales
            </Title>
            <img src={red1} alt="Imagen 1" style={{ width: '70%', marginBottom: '10px' }} />
            <img src={red2} alt="Imagen 2" style={{ width: '70%', marginBottom: '10px' }} />
            <img src={red3} alt="Imagen 3" style={{ width: '70%' }} />
          </div>
        </Col>
      </Row>

      <FooterComponent />
    </div>
  );
}

export default Inicio;
