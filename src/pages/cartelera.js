import React from 'react';
import { Col, Row, Card, Typography, Button  } from 'antd';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import bannerCartelera from '../img/cartelera.png';
import Akira from '../img/Akira.jpg';
import MagoOz from '../img/elMagodeOz.png';
import LoQueElVientoSeLlevo from '../img/loQelVientoseLlevo.jpg';
import PulpFiction from '../img/pulpFiction.jpg';
import Titanic from '../img/titanic.jpg';
import VolverAlFuturo from '../img/volverAlFuturo.jpg';

const { Title } = Typography;

function Cartelera() {
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
            <img src={bannerCartelera} alt="Banner" style={{ width: '100%' }} />
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
          marginTop: '2%', 
          marginBottom: '3%',
          fontSize: '4rem', 
          fontWeight: 300, // Asegúrate de que este estilo se aplique
          maxWidth: '100%', // Limita el ancho del título
          }}>
            ¡Las mejores películas de todos los tiempos en un solo lugar!
          </Title>
          </div>
          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7'}}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Link to="/CarteleraAkira#ficha-tecnica">
                  <img
                    src={Akira}
                    alt="Akira"
                    style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                  />
                </Link>
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Link to="/CarteleraAkira#ficha-tecnica">
                    <Title level={1} style={{ marginTop: '5px', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                      Akira (1988)
                    </Title>
                  </Link>
                  <p style={{ marginTop: '5px', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                    La trama sigue a Kaneda, el líder de una banda de motociclistas, y a su amigo Tetsuo, quien adquiere poderes psíquicos después de un accidente con un misterioso niño de apariencia envejecida. A medida que Tetsuo lucha por controlar sus nuevas habilidades, su poder crece de manera descontrolada, poniendo en peligro a la ciudad y a sus habitantes. Kaneda intenta salvar a su amigo y detener su destructiva evolución, mientras una serie de secretos gubernamentales y experimentos relacionados con un proyecto conocido como "Akira" salen a la luz.
                  </p>
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Link to="/CarteleraMagoOz">
                  <img
                    src={MagoOz}
                    alt="MagoOz"
                    style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                  />
                </Link>
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Link to="/CarteleraMagoOz">
                    <Title level={1} style={{ marginTop: '1%', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                      El mago de Oz (1939)
                    </Title>
                  </Link>
                  <p style={{ marginTop: '1%', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                    En su viaje por este mundo maravilloso, Dorothy conoce a nuevos amigos: el Espantapájaros, que desea tener un cerebro; el Hombre de Hojalata, que anhela un corazón; y el León Cobarde, que busca valor. Juntos, emprenden un camino hacia la Ciudad Esmeralda para encontrar al Mago de Oz, quien supuestamente tiene el poder de concederles sus deseos. En el camino, enfrentan varios desafíos y peligros, principalmente provocados por la Malvada Bruja del Oeste, quien busca vengarse de Dorothy por la muerte de su hermana, la Malvada Bruja del Este.
                  </p>
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Link to="/CarteleraLoQueElVientoSeLevo">
                  <img
                    src={LoQueElVientoSeLlevo}
                    alt="LoQueElVientoSeLlevo"
                    style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                  />
                </Link>
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Link to="/CarteleraLoQueElVientoSeLevo">
                    <Title level={1} style={{ marginTop: '1%', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                      Lo que el viento se llevó (1939)
                    </Title>
                  </Link>
                  <p style={{ marginTop: '1%', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                    La trama sigue la vida de Scarlett O'Hara, la obstinada y decidida hija de un acaudalado terrateniente de Georgia. La película comienza con Scarlett viviendo en la plantación de su familia, Tara, y narra su lucha por sobrevivir a la guerra y la caída del Sur. En el centro de la historia está el turbulento romance entre Scarlett y Rhett Butler, un aventurero sin escrúpulos pero encantador.                  </p>
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Link to="/CarteleraPulpFiction">
                  <img
                    src={PulpFiction}
                    alt="PulpFiction"
                    style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                  />
                </Link>
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Link to="/CarteleraPulpFiction">
                    <Title level={1} style={{ marginTop: '1%', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                      Pulp Fiction (1994)
                    </Title>
                  </Link>
                  <p style={{ marginTop: '1%', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                    La película sigue a diferentes personajes, incluyendo a Vincent Vega y Jules Winnfield, dos asesinos a sueldo que trabajan para el gánster Marsellus Wallace. Vincent recibe la misión de cuidar a Mia, la esposa de Marsellus, lo que lleva a una serie de eventos inesperados. Otra trama sigue a Butch Coolidge, un boxeador que intenta escapar de la venganza de Marsellus después de no cumplir con un acuerdo.                  </p>
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Link to="/CarteleraTitanic">
                  <img
                    src={Titanic}
                    alt="Titanic"
                    style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                  />
                </Link>
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Link to="/CarteleraTitanic">
                    <Title level={1} style={{ marginTop: '1%', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                      Titanic (1997)
                    </Title>
                  </Link>
                  <p style={{ marginTop: '1%', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                    La trama sigue a Jack Dawson, un joven artista sin dinero, y Rose DeWitt Bukater, una joven de la alta sociedad atrapada en un compromiso infeliz. A pesar de las diferencias de clase, Jack y Rose se enamoran durante el viaje. Sin embargo, su romance se ve abruptamente interrumpido cuando el Titanic choca con un iceberg y comienza a hundirse. Mientras luchan por sobrevivir, la tragedia del desastre se desarrolla a su alrededor, llevándolos a tomar decisiones que definirán sus vidas para siempre.                  </p>
                </div>
              </Col>
            </Row>
          </Card>

          <Card style={{ width: '105%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7' }}>
            <Row gutter={[16, 16]}>
              <Col xs={24} md={8}>
                <Link to="/CarteleraVolverAlFuturo">
                  <img
                    src={VolverAlFuturo}
                    alt="VolverAlFuturo"
                    style={{ width: '80%', marginTop: '-5%', marginBottom: '-5%', borderRadius: '8px' }}
                  />
                </Link>
              </Col>
              <Col xs={24} md={16}>
                <div>
                  <Link to="/CarteleraVolverAlFuturo">
                    <Title level={1} style={{ marginTop: '1%', marginRight: '20%', color: 'red', fontWeight: '300' }}>
                      Volver al futuro (1985)
                    </Title>
                  </Link>
                  <p style={{ marginTop: '1%', marginRight: '25%', fontSize: '16px', lineHeight: '1.5' }}>
                    Marty se encuentra en 1955, donde conoce a sus futuros padres y debe asegurarse de que se enamoren, o corre el riesgo de alterar el curso de su propia historia y desaparecer. Al mismo tiempo, debe encontrar una manera de regresar a su tiempo con la ayuda de una versión más joven de Doc Brown. En su aventura, Marty enfrenta varios desafíos, incluyendo la intervención del bully local, Biff Tannen, y las complicaciones de interactuar con sus jóvenes padres.                  </p>
                </div>
              </Col>
            </Row>
          </Card>

          <Row justify="left">
            <Col xs={24} md={20} lg={16}>
              <Link to="/">
                <Button
                  type="default"
                  style={{ width: '8%', height:'120%', backgroundColor: '#454a46', borderColor: '#d9d9d9', color: 'white' }}
                >
                  Volver
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <FooterComponent />
    </div>
  );
}

export default Cartelera;