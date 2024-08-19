// la razon de por que comento el codigo es porque es todo nuevo y se me hace mas facil su funcionamiento asi :)


import React from 'react'; // importa React para utilizar JSX y componentes React
import { Col, Row, Button, Typography, Space, Layout, Card } from 'antd'; // importa componentes de Ant Design
import Navbar from '../components/NavbarBoleteria'; // importa el componente Navbar desde la ruta especificada
import { Link } from 'react-router-dom'; // importa el componente Link para la navegación entre páginas
import FooterComponent from '../components/footer'; // importa el componente Footer desde la ruta especificada

const { Title, Text } = Typography; // desestructura los componentes Title y Text de Typography
const { Content } = Layout; // desestructura el componente Content de Layout

function Boleteria() { // define el componente funcional Boleteria
  return (
    <Layout className="background"> {/* layout general con clase 'background' */}
      <Row>
        <Col span={24}> {/* columna que ocupa todo el ancho de la fila */}
          <Navbar /> {/* incluye el componente Navbar */}
        </Col>
      </Row>

      <Content style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '24px' }}> 
        {/* usa flexbox para centrar el contenido vertical y horizontalmente, con un padding de 24px */}
        <Card 
          style={{ 
            width: '100%', 
            maxWidth: '500px', 
            textAlign: 'center', 
            backgroundColor: '#dac178', 
            boxShadow: '0px 20px 50px rgba(0, 0, 0, 0.6)' // estilos para el Card
          }} 
          bodyStyle={{ padding: '20px' }} // estilo del cuerpo del Card: padding de 20px
          bordered={false} // sin borde alrededor del Card
        >
          
          {/* Contenedor de la "Pantalla" */}
          <div style={{ marginBottom: '20px', textAlign: 'center' }}> 
            {/* Contenedor con margen inferior y centrado */}
            <div style={{ width: '80%', height: '30px', backgroundColor: '#6c757d', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {/* Barra de pantalla con color de fondo, centrado y tamaño específico */}
              <Title level={3} style={{ color: '#242424', fontSize: '16px', margin: 0 }}>Pantalla</Title> 
              {/* titulo con color y tamaño específicos */}
            </div>
          </div>

          {/* Indicadores de estado */}
          <div style={{ textAlign: 'left', marginBottom: '20px', width: '100%' }}> 
            {/* contenedor de indicadores con alineación a la izquierda y margen inferior */}
            <Space direction="vertical" style={{ display: 'flex', alignItems: 'flex-start' }}> 
              {/* espacio vertical con alineación a la izquierda */}
              <Space style={{ display: 'flex', alignItems: 'center' }}> 
                {/* espacio para el indicador de estado "Seleccionado" */}
                <div style={{ width: '10px', height: '10px', backgroundColor: '#28a745', borderRadius: '50%' }}></div> 
                {/* indicador de color verde */}
                <Text strong style={{ marginLeft: '8px' }}>Seleccionado</Text> 
                {/* texto "Seleccionado" con estilo fuerte y margen a la izquierda */}
              </Space>
              <Space style={{ display: 'flex', alignItems: 'center' }}> 
                {/* espacio para el indicador de estado "Ocupado" */}
                <div style={{ width: '10px', height: '10px', backgroundColor: '#dc3545', borderRadius: '50%' }}></div> 
                {/* indicador de color rojo */}
                <Text strong style={{ marginLeft: '8px' }}>Ocupado</Text> 
                {/* texto "Ocupado" con estilo fuerte y margen a la izquierda */}
              </Space>
            </Space>
          </div>

          {/* Botones de asientos */}
          <div>
            {['A', 'B', 'C', 'D'].map(row => (
              <Row key={row} justify="center" gutter={[16, 16]} style={{ marginBottom: '8px' }}> 
                {/* fila para cada fila de asientos con separación y margen inferior */}
                {[1, 2, 3, 4, 5].map(seat => (
                  <Col key={`${row}${seat}`}>
                    <Button 
                      type="default" 
                      style={{ 
                        borderRadius: '4px', 
                        width: '40px', 
                        height: '40px', 
                        marginBottom: '8px', 
                        backgroundColor: '#aaa8a8', 
                        borderColor: '#000', 
                        color: '#000', 
                        fontWeight: 'bold' // texto en negrita
                      }} 
                    >
                      {`${row}${seat}`}
                    </Button>
                  </Col>
                ))}
              </Row>
            ))}
          </div>
        </Card>

        {/* Botones de navegación */}
        <Row justify="space-between" style={{ width: '100%', maxWidth: '600px', marginTop: '20px' }}>
          {/* fila para los botones de navegación con separación entre ellos */}
          <Col>
            <Link to="/cartelera">
              <Button 
                type="default" 
                style={{ 
                  backgroundColor: '#242424', 
                  color: '#fff', 
                  borderColor: '#242424', 
                  fontWeight: 'bold' // texto en negrita
                }} 
              >
                Atrás
              </Button>
            </Link>
          </Col>
          <Col>
            <Link to="/recibo">
              <Button 
                type="default" 
                style={{ 
                  backgroundColor: '#242424', 
                  color: '#fff', 
                  borderColor: '#242424', 
                  fontWeight: 'bold' // texto en negrita
                }} 
              >
                Siguiente
              </Button>
            </Link>
          </Col>
        </Row>
      </Content>

      <FooterComponent /> {/* incluye el componente Footer */}
    </Layout>
  );
}

export default Boleteria; // exporta el componente Boleteria para su uso en otras partes de la aplicación
