import React from 'react';
import { Col, Row, Card, Typography, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import bannerNovedader from '../img/novedades.png';
import VolverAlFuturo from '../img/volverAlFuturo.jpg';
import cTitanic from '../img/cTitanic.png';
import cPulpFiction from '../img/cPulpFiction.png';
import cAkira from '../img/cAkira.png';

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
                  src={cAkira}
                  alt="cAkira"
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
                    src={VolverAlFuturo}
                    alt="VolverAlFuturo"
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
                      Volver al futuro (1985)
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
                    Marty se encuentra en 1955, donde conoce a sus futuros padres y debe asegurarse de que se enamoren, o corre el riesgo de alterar el curso de su propia historia y desaparecer. Al mismo tiempo, debe encontrar una manera de regresar a su tiempo con la ayuda de una versión más joven de Doc Brown. En su aventura, Marty enfrenta varios desafíos, incluyendo la intervención del bully local, Biff Tannen, y las complicaciones de interactuar con sus jóvenes padres.
                    </p>
                  <ul style={{ marginTop: '5px', fontSize: '16px', lineHeight: '1.5', listStyleType: 'none', paddingLeft: '5%' }}>
                    <li><strong>Género:</strong> Ciencia ficción, aventura, comedia</li>
                    <li><strong>Director:</strong> Robert Zemeckis</li>
                    <li><strong>Protagonistas:</strong> Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover</li>
                    <li><strong>Nacionalidad:</strong> Estados Unidos</li>
                    <li><strong>Calificación:</strong> Apta para mayores de 12 años</li>
                    <li><strong>Duración:</strong> 116 minutos</li>
                    <li><strong>Distribuidora:</strong> Universal Pictures</li>
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
                      <strong style={{fontSize:'125%'}}>Viernes</strong>
                      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>16:00 - 17:30</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>17:30 - 19:00</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>19:00 - 20:30</Link></li>
                      </ul>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                      <strong style={{fontSize:'125%'}}>Sábado</strong>
                      <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>16:00 - 17:30</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>17:30 - 19:00</Link></li>
                        <li style={{ margin: '10px 0' }}><Link to="/Boleteria" style={{ textDecoration: 'underline' }}>19:00 - 20:30</Link></li>
                      </ul>
                    </div>
                    <div style={{ flex: '1', textAlign: 'center' }}>
                      <strong style={{fontSize:'125%'}}>Domingo</strong>
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
                src="https://www.youtube.com/embed/qvsgGtivCgs" // Cambia el URL por el del video que quieras mostrar
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                allowFullScreen
                title="Trailer de Volver al Futuro"
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
