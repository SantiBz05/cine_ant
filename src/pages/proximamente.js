import React from 'react';
import { Col, Row, Card, Typography, Button } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import bannerProximamente from '../img/proximamente.png';
import elPadrino from '../img/elpadrino.jpg';
import indianaJones from '../img/Indiana_Jones.jpg';
import peli2001 from '../img/2001.jpg';

const { Title } = Typography;

function Proximamente() {
  return (
    <div className="background">
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          <div>
            <img src={bannerProximamente} alt="Banner" style={{ width: '100%' }} />
          </div>
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px', gap: '20px' }}>
        <Col xs={24} md={20} lg={16}>
          <div>
            <Title level={1} 
              style={{ 
                color: 'black', 
                textAlign: 'center', 
                marginTop: '3%', 
                marginBottom: '4%',
                fontSize: '4rem', 
                fontWeight: 300, 
                maxWidth: '100%', 
                margin: '0 auto' 
              }}>
              ¡No te pierdas las próximas películas que se transmitirán en nuestro cine!
            </Title>
          </div>
          
          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '2px solid #c7c7c7'}} >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <img
                  src={elPadrino}
                  alt=""
                  style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                />
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Title level={1} style={{ marginTop: '5px', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                  El Padrino (1972)
                  </Title>
                  <p style={{ marginTop: '5px', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                  Las familias mafiosas de Nueva York entran en conflicto cuando el capo de una de las más poderosas, Vito Corleone, se opone a que la Cosa Nostra entre en el negocio del tráfico de drogas. Como consecuencia, sufre un atentado que le deja al borde de la muerte. Para vengar el golpe y salvar a la familia, Michael Corleone, su hijo predilecto, quien siempre había estado al margen de los negocios de la familia, debe meterse de lleno en el sucio mundo del crimen.
                  </p>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '10px' }}>
                    <li><strong>Género:</strong> Crimen/Acción</li>
                    <li><strong>Director:</strong> Francis Ford Coppola</li>
                    <li><strong>Calificación:</strong> +16</li>
                    <li><strong>Duración:</strong> 2h 55m</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '2px solid #c7c7c7'}} >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <img
                  src={indianaJones}
                  alt=""
                  style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                />
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Title level={1} style={{ marginTop: '1%', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                  Indiana Jones: En busca del arca perdida (1981)
                  </Title>
                  <p style={{ marginTop: '1%', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                  Indiana Jones es un profesor de arqueología, dispuesto a correr peligrosas aventuras con tal de conseguir valiosas reliquias históricas. Después de una infructuosa misión en Sudamérica, el gobierno estadounidense le encarga la búsqueda del Arca de la Alianza, donde se conservan las Tablas de la Ley que Dios entregó a Moisés. Según la leyenda, quien las posea tendrá un poder absoluto, razón por la cual también la buscan los nazis.
                  </p>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '10px' }}>
                    <li><strong>Género:</strong> Aventura/Acción</li>
                    <li><strong>Director:</strong> Steven Spielberg</li>
                    <li><strong>Calificación:</strong> Apta para todo público</li>
                    <li><strong>Duración:</strong> 1h 55m</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '2px solid #c7c7c7'}} >
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <img
                  src={peli2001}
                  alt=""
                  style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                />
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Title level={1} style={{ marginTop: '1%', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                  2001: Una odisea del espacio (1968)
                  </Title>
                  <p style={{ marginTop: '1%', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                  La película de ciencia-ficción por excelencia de la historia del cine narra los diversos periodos de la historia de la humanidad, no sólo del pasado, sino también del futuro. Hace millones de años, antes de la aparición del "homo sapiens", unos primates descubren un monolito que los conduce a un estadio de inteligencia superior. Millones de años después, otro monolito, enterrado en una luna, despierta el interés de los científicos. Por último, durante una misión de la NASA, HAL 9000, una máquina dotada de inteligencia artificial, se encarga de controlar todos los sistemas de una nave espacial tripulada.
                  </p>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '10px' }}>
                    <li><strong>Género:</strong> Ciencia ficción/Aventura</li>
                    <li><strong>Director:</strong> Stanley Kubrick</li>
                    <li><strong>Calificación:</strong>Apta para todo público</li>
                    <li><strong>Duración:</strong> 2h 29m</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Card>

          <Row justify="left">
            <Col xs={24} md={20} lg={16}>
              <Button
                type="default"
                style={{ width: '8%', height:'120%', backgroundColor: '#454a46', borderColor: '#d9d9d9', color: 'white' }}
              >
                Volver
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <FooterComponent />
    </div>
  );
}

export default Proximamente;
