import React from 'react';
import { Col, Row, Card, Typography, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import bannerNovedader from '../img/novedades.png';
import MagoOz from '../img/elMagodeOz.png';
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
              marginBottom: '2.5%',
              border: '0.5px solid #c7c7c7',
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                  <img
                    src={MagoOz}
                    alt="MagoOz"
                    style={{
                      width: '80%',
                      borderRadius: '8px'
                    }}
                  />
              </Col>
              <Col xs={24} md={16}>
                <div style={{ textAlign: 'left' }}>
                    <Title
                      level={1}
                      style={{
                        marginTop: '3%',
                        marginLeft: '5%',
                        color: 'red',
                        fontWeight: '300'
                      }}
                    >
                      El mago de Oz (1939)
                    </Title>
                  <p
                    style={{
                      marginTop: '3%',
                      marginLeft: '5%',
                      marginRight: '20%',
                      fontSize: '16px',
                      lineHeight: '1.5'
                    }}
                  >
                    En su viaje por este mundo maravilloso, Dorothy conoce a nuevos amigos: el Espantapájaros, que desea tener un cerebro; el Hombre de Hojalata, que anhela un corazón; y el León Cobarde, que busca valor. Juntos, emprenden un camino hacia la Ciudad Esmeralda para encontrar al Mago de Oz, quien supuestamente tiene el poder de concederles sus deseos. En el camino, enfrentan varios desafíos y peligros, principalmente provocados por la Malvada Bruja del Oeste, quien busca vengarse de Dorothy por la muerte de su hermana, la Malvada Bruja del Este.                  
                    </p>
                  <ul style={{ marginTop: '5px', fontSize: '16px', lineHeight: '1.5', listStyleType: 'none', paddingLeft: '5%' }}>
                    <li><strong>Género:</strong> Fantasía, musical</li>
                    <li><strong>Director:</strong> Victor Fleming</li>
                    <li><strong>Protagonistas:</strong> Judy Garland, Frank Morgan, Ray Bolger, Bert Lahr, Jack Haley</li>
                    <li><strong>Nacionalidad:</strong> Estados Unidos</li>
                    <li><strong>Calificación:</strong> Apta para todos los públicos</li>
                    <li><strong>Duración:</strong> 102 minutos</li>
                    <li><strong>Distribuidora:</strong> Metro-Goldwyn-Mayer (MGM)</li>
                  </ul>
                </div>
                <Card
                  style={{
                    width: '80%',
                    borderRadius: '8px',
                    padding: '1%',
                    marginTop: '20px',
                    marginLeft: '5%',
                    marginBottom: '2.5%',
                    border: '0.5px solid #c7c7c7'
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
                      <strong style={{fontSize:'125%'}}>Lunes</strong>
                      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>16:00 - 17:30</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>17:30 - 19:00</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>19:00 - 20:30</Link></li>
                      </ul>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                      <strong style={{fontSize:'125%'}}>Martes</strong>
                      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>16:00 - 17:30</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>17:30 - 19:00</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>19:00 - 20:30</Link></li>
                      </ul>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                      <strong style={{fontSize:'125%'}}>Jueves</strong>
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
              marginBottom: '2.5%',
              border: '0.5px solid #c7c7c7',
            }}
          >
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src="https://www.youtube.com/embed/H_3T4DGw10U" // Cambia el URL por el del video que quieras mostrar
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                allowFullScreen
                title="Trailer de El Mago de Oz"
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
