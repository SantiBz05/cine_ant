import React from 'react';
import { Col, Row, Card, Typography, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import bannerNovedader from '../img/novedades.png';
import Akira from '../img/Akira.jpg';
import cTitanic from '../img/cTitanic.png';
import cPulpFiction from '../img/cPulpFiction.png';
import cVolverAlFuturo from '../img/cVolveralFuturo.png';

const { Title } = Typography;

function Cartelera() {
  return (
    <div>
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col xs={24} style={{ textAlign: 'center' }}>
          <img
            src={bannerNovedader}
            alt="bannerNovedader"
            style={{
              width: '70%',
              display: 'block',
              margin: '20px auto',
              objectFit: 'cover'
            }}
          />
          <Carousel
            autoplay
            arrows
            dots
            style={{
              width: '70%',
              margin: '0 auto',
              marginBottom: '20px'
            }}
          >
            <div>
              <Link to="/Cartelera">
                <img
                  src={cTitanic}
                  alt="cTitanic"
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Link>
            </div>
            <div>
              <Link to="/Cartelera">
                <img
                  src={cPulpFiction}
                  alt="cPulpFiction"
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Link>
            </div>
            <div>
              <Link to="/Cartelera">
                <img
                  src={cVolverAlFuturo}
                  alt="cVolverAlFuturo"
                  style={{
                    width: '100%',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </Link>
            </div>
          </Carousel>
          <div>
            <Title
              level={1}
              style={{
                color: 'black',
                textAlign: 'center',
                marginTop: '3%',
                marginBottom: '4%',
                fontSize: '3rem',
                fontWeight: 300,
                maxWidth: '75%',
                margin: '0 auto'
              }}
            >
              <strong>Ficha Técnica</strong>
            </Title>
          </div>
          <Card
            style={{
              width: '70%',
              borderRadius: '8px',
              padding: '1%',
              margin: '0 auto',
              marginBottom: '2.5%'
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Link to="/CarteleraAkira">
                  <img
                    src={Akira}
                    alt="Akira"
                    style={{
                      width: '80%',
                      borderRadius: '8px'
                    }}
                  />
                </Link>
              </Col>
              <Col xs={24} md={16}>
                <div style={{ textAlign: 'left' }}>
                  <Link to="/CarteleraAkira">
                    <Title
                      level={1}
                      style={{
                        marginTop: '3%',
                        marginLeft: '5%',
                        color: 'red',
                        fontWeight: '300'
                      }}
                    >
                      Akira (1988)
                    </Title>
                  </Link>
                  <p
                    style={{
                      marginTop: '3%',
                      marginLeft: '5%',
                      marginRight: '20%',
                      fontSize: '16px',
                      lineHeight: '1.5'
                    }}
                  >
                    La trama sigue a Kaneda, el líder de una banda de motociclistas, y a su amigo Tetsuo, quien adquiere poderes psíquicos después de un accidente con un misterioso niño de apariencia envejecida. A medida que Tetsuo lucha por controlar sus nuevas habilidades, su poder crece de manera descontrolada, poniendo en peligro a la ciudad y a sus habitantes. Kaneda intenta salvar a su amigo y detener su destructiva evolución, mientras una serie de secretos gubernamentales y experimentos relacionados con un proyecto conocido como "Akira" salen a la luz.
                  </p>
                  <ul style={{ marginTop: '5px', fontSize: '16px', lineHeight: '1.5', listStyleType: 'none', paddingLeft: '5%' }}>
                    <li><strong>Género:</strong> Ciencia ficción, acción, animación</li>
                    <li><strong>Director:</strong> Katsuhiro Otomo</li>
                    <li><strong>Protagonistas:</strong> Mitsuo Iwata, Nozomu Sasaki, Miki Fujitani</li>
                    <li><strong>Nacionalidad:</strong> Japón</li>
                    <li><strong>Calificación:</strong> Apta para mayores de 16 años</li>
                    <li><strong>Duración:</strong> 124 minutos</li>
                    <li><strong>Distribuidora:</strong> Kōsokyoku (en Japón) y varias distribuidoras internacionales</li>
                  </ul>
                </div>
                <Card
                  style={{
                    width: '80%',
                    borderRadius: '8px',
                    padding: '1%',
                    marginTop: '20px',
                    marginLeft: '5%',
                    marginBottom: '2.5%'
                  }}
                >
                  <Title
                    level={1}
                    style={{
                      marginTop: '3%',
                      marginLeft: '5%',
                      color: 'red',
                      fontWeight: '300'
                    }}
                  >
                    Horarios
                  </Title>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                      <strong>Viernes</strong>
                      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>16:00 - 17:30</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>17:30 - 19:00</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>19:00 - 20:30</Link></li>
                      </ul>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                      <strong>Sábado</strong>
                      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>16:00 - 17:30</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>17:30 - 19:00</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>19:00 - 20:30</Link></li>
                      </ul>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                      <strong>Domingo</strong>
                      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>16:00 - 17:30</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>17:30 - 19:00</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>19:00 - 20:30</Link></li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
          <Title
              level={1}
              style={{
                color: 'black',
                textAlign: 'center',
                marginTop: '3%',
                marginBottom: '4%',
                fontSize: '3rem',
                fontWeight: 300,
                maxWidth: '75%',
                margin: '0 auto'
              }}
            >
              <strong>Trailer</strong>
            </Title>
          <Card
            style={{
              width: '70%',
              borderRadius: '8px',
              margin: '0 auto',
              marginBottom: '2.5%'
            }}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/4I3C5Q19eDM?si=Roiy7Q3GBVyKJmhZ" // Cambia el URL por el del video que quieras mostrar
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: '0'
                }}
                allowFullScreen
                title="Trailer de Akira"
              />
            </div>
          </Card>
        </Col>
      </Row>
      <FooterComponent />
    </div>
  );
}

export default Cartelera;
