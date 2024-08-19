// la razon de por que comento el codigo es porque es todo nuevo y se me hace mas facil su funcionamiento asi :)


import React from 'react'; // Importa React para poder usar JSX y crear componentes.
import { Col, Row, Card, Typography, List } from 'antd'; // Importa componentes de Ant Design para diseño y presentación.
import Navbar from '../components/Navbar'; // Importa el componente Navbar.
import FooterComponent from '../components/footer'; // Importa el componente FooterComponent.

// Importación de imágenes
import bannerNos from '../img/nosotros.png'; // Importa la imagen para el banner.
import sala from '../img/sala.jpg'; // Importa la imagen de la sala de cine.
import santi from '../img/ñaez.png'; // Importa la imagen de Santiago Baez.
import rebe from '../img/rebe.png'; // Importa la imagen de Rebeca López.
import mile from '../img/mile.png'; // Importa la imagen de Milena Sivit.
import alejo from '../img/alejo.png'; // Importa la imagen de Alejo Pinatti.
import agus from '../img/agustin.png'; // Importa la imagen de Agustin Fasano.
import mascota from '../img/mascota.jpg'; // Importa la imagen de la mascota del cine.

const { Title, Paragraph } = Typography; // Desestructura los componentes Title y Paragraph de Typography para usarlos en el código.

function SobreNosotros() {
  // Array que contiene las razones para elegir el cine.
  const razonesParaElegirnos = [
    "Proyecciones de alta calidad",
    "Sonido envolvente",
    "Ambiente acogedor",
    "Variedad de snacks",
    "Eventos especiales y maratones",
  ];

  return (
    <div className='background'>
      {/* Barra de navegación */}
      <Row>
        <Col xs={24}>
          <Navbar /> {/* Muestra el componente Navbar en toda la columna */}
        </Col>
      </Row>

      {/* Banner de la página */}
      <Row>
        <Col xs={24}>
          <div>
            <img src={bannerNos} alt="Banner" style={{ width: '100%' }} /> {/* Muestra la imagen del banner con ancho completo */}
          </div>
        </Col>
      </Row>

      {/* Contenido principal */}
      <Row justify="center"  style={{ padding: '40px 0' }}>
        <Col xs={24} md={20}>
          <div style={{ padding: '16px', borderRadius: '8px' }}>
            <Row gutter={[16, 16]}>
              {/* Sección con la imagen de la sala y la historia */}
              <Col xs={24} md={12}>
                <img src={sala} alt="Sala de cine" style={{ width: '100%', height: '75%' , borderRadius: '8px' }} /> {/* Imagen de la sala con ajuste de altura y bordes redondeados */}
              </Col>
              <Col xs={24} md={12}>
                <Title level={3}>Nuestra Historia</Title> {/* Título de la sección */}
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.6', backgroundColor: 'white'}}>
                  {/* Texto descriptivo sobre el cine */}
                  Nuestro Cine Retro nació en el corazón de la ciudad con el objetivo de traer de vuelta la nostalgia de las películas clásicas de los años 2000/90/80.
                  Desde comedias icónicas hasta épicos de acción, nuestro cine ofrece una experiencia única para los amantes de obras de todas las edades.
                </Paragraph>
                <Title level={4}>¿Por Qué Elegirnos?</Title> {/* Subtítulo para la lista de razones */}
                <List
                  bordered
                  dataSource={razonesParaElegirnos} 
                  renderItem={item => (
                    <List.Item>
                      {item} {/* Renderiza cada razón como un ítem en la lista */}
                    </List.Item>
                  )}
                  style={{ backgroundColor: 'white', borderRadius: '8px', padding: '10px' }} // Estilos adicionales para fondo blanco
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Sección Nuestro Equipo */}
      <Row justify="center" style={{ padding: '10px 0' }}>
        <Col xs={24} md={20}>
          <Title level={2} style={{ textAlign: 'center' }}>Nuestro Equipo</Title> {/* Título de la sección de equipo */}
          <Row gutter={[16, 16]} justify="center">
            {/* Muestra una lista de miembros del equipo con imagen, nombre y puesto */}
            {[
              { img: santi, nombre: "Santiago Baez", puesto: "Director General" },
              { img: mile, nombre: "Milena Sivit", puesto: "Gerente de Operaciones" },
              { img: rebe, nombre: "Rebeca López", puesto: "Jefa de Proyecciones" },
              { img: alejo, nombre: "Alejo Pinatti", puesto: "Jefe de Finanzas" },
              { img: agus, nombre: "Agustin Fasano", puesto: "Programador" },
              { img: mascota, nombre: "Pop Corn", puesto: "Mascota del cine" },
            ].map((persona, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={4}>
                <Card style={{ textAlign: 'center', border: 'none' }} bodyStyle={{ padding: 0 }}>
                  <div className="team-member">
                    <img src={persona.img} alt={persona.nombre} className="team-img" /> {/* Imagen del miembro del equipo */}
                    <Title level={4}>{persona.nombre}</Title> {/* Nombre del miembro del equipo */}
                    <Paragraph>{persona.puesto}</Paragraph> {/* Puesto del miembro del equipo */}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <FooterComponent /> {/* Muestra el componente FooterComponent */}

      {/* Estilos adicionales */}
      <style jsx>{`
        .team-member {
          transition: transform 0.3s ease; /* Transición para el efecto de hover */
        }
        .team-member:hover {
          transform: translateY(-10px); /* Desplazamiento hacia arriba al hacer hover */
        }
        .team-img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 16px;
          transition: transform 0.3s ease; /* Transición para el efecto de hover */
        }
        .team-member:hover .team-img {
          transform: scale(1.1); /* Escalado de la imagen al hacer hover */
        }
      `}</style>
    </div>
  );
}

export default SobreNosotros; // Exporta el componente para que pueda ser utilizado en otras partes de la aplicación.