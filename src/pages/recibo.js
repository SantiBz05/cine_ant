// la razon de por que comento el codigo es porque es todo nuevo y se me hace mas facil su funcionamiento asi :)

import React from 'react'; // importa React para utilizar JSX y componentes React
import { Col, Row, Layout } from 'antd'; // Importa componentes de Ant Design para diseño y estructura
import Navbar from '../components/Navbar'; // Importa el componente Navbar desde la ruta especificada
import FooterComponent from '../components/footer'; // Importa el componente Footer desde la ruta especificada
import { Link } from 'react-router-dom'; // Importa el componente Link para la navegación entre páginas

import reciboimg from '../img/recibo3.png'; // Importa la imagen 'recibo3.png' para su uso en el componente

const { Content } = Layout; // Desestructura el componente Content de Layout para su uso en la página

function Recibo() { // Define el componente funcional Recibo
  return (
    <Layout className="background"> {/* Usa Layout para estructurar la página con la clase 'background' */}
      <Navbar /> {/* Incluye el componente Navbar para la navegación superior */}

      <Content style={{ padding: '50px 50px', textAlign: 'center' }}> 
        {/* Estilo de Content: padding de 50px en los cuatro lados y centrado del texto */}
        <Row justify="center"> 
          {/* Usa Row para la disposición de los elementos, con alineación centrada */}
          <Col xs={24}> 
            {/* Columna que ocupa todo el ancho en pantallas extra pequeñas */}
            <img src={reciboimg} alt="Recibo" style={{ maxWidth: '100%', height: 'auto' }} /> 
            {/* Muestra la imagen importada con un tamaño máximo del 100% del contenedor y altura automática */}
            <div style={{ marginTop: '20px' }}> 
              {/* Contenedor con margen superior de 20px */}
              <Link to="/cartelera"> 
                {/* Link para la navegación a la página de '/cartelera' */}
                <button 
                  style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#242424', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: '4px' 
                  }}
                >
                  Volver
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      </Content>

      <FooterComponent /> {/* Incluye el componente Footer al final de la página */}
    </Layout>
  );
}

export default Recibo; // Exporta el componente Recibo para su uso en otras partes de la aplicación
