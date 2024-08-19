import React from 'react';
import { Col, Row, Collapse, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import Mapa2 from '../img/Mapa_2.png';
import '../css/Ayuda.css';

const { Panel } = Collapse;
const { Title } = Typography;

const LinkWithTitle = ({ to, children }) => (
  <div className="link-container">
    <Link to={to} className="link-title">
      <Title level={5} style={{ margin: 0, color: 'blue', fontWeight: 'normal', fontSize: '14px' }}>
        {children}
      </Title>
    </Link>
  </div>
);

const Ayuda = () => {
  return (
    <div>
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>
      
      <div className="preguntas">
        <Collapse
          expandIconPosition="right"
          expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
        >
          <Panel header={<span className="header-style">Preguntas Frecuentes</span>} key="1">
            <Collapse
              expandIconPosition="right"
              expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            >
              <Panel header={<span className="header-style">¿Cómo comprar Entradas?</span>} key="1-1">
                <ol>
                  <li>
                    <b>Navega a nuestra página web:</b> 
                    Ve al sitio de "Cartelera" o usa el link de abajo.
                    <br />
                    <Link to="/Cartelera">Cartelera</Link>
                  </li>
                  <br />
                  <li>
                    <b>Selecciona tu película:</b> Busca la película que deseas ver.
                  </li>
                  <br />
                  <li>
                    <b>Elige la Función:</b> Una vez que encuentres la película, selecciona
                    el horario que más te convenga. Disponemos de múltiples horarios para cada
                    película.
                  </li>
                  <br />
                  <li>
                    <b>Selecciona tus asientos:</b> Dependiendo de la disponibilidad, podrás elegir tus
                    asientos preferidos en el mapa interactivo del cine.
                  </li>
                  <br />
                  <li>
                    <b>Añade entradas:</b> Indica cuántas entradas necesitas. Puedes seleccionar
                    entradas regulares, para estudiantes, para personas mayores, o cualquier otra opción
                    disponible.
                  </li>
                  <br />
                  <li>
                    <b>Revisa tu selección:</b> Verifica los detalles de tu compra,
                    incluyendo la película, el horario y los asientos seleccionados.
                  </li>
                  <br />
                  <li>
                    <b>Realiza el pago:</b> Introduce tus datos de pago. Aceptamos tarjetas
                    de crédito, débito y otros métodos de pago en línea como PayPal y Apple Pay.
                  </li>
                  <br />
                  <li>
                    <b>Confirma la compra:</b>
                    Una vez completado el pago, recibirás una confirmación por
                    correo electrónico con un código QR o un enlace para descargar tus
                    entradas.
                  </li>
                  <br />
                  <li>
                    <b>Presenta tu entrada:</b> En el cine, presenta el código QR desde tu
                    dispositivo móvil o lleva una copia impresa de la entrada para acceder a la sala.
                  </li>
                </ol>
              </Panel>
              <Panel header={<span className="header-style">¿Puedo cambiar mis entradas una vez compradas?</span>} key="1-2">
                <p>
                  Si, puedes cambiar tus entradas hasta 24 horas antes de la funcion. Se debe ir personalmente al cine para hacer el cambio de entradas.
                </p>
              </Panel>
              <Panel header={<span className="header-style">¿Hay descuentos disponibles?</span>} key="1-3">
                <p>
                  Ofrecemos descuentos para estudiantes, personas mayores y grupos grandes, Los detalles y las condiciones de estos descuentos están disponibles en la página de compra de entradas.
                </p>
              </Panel>
              <Panel header={<span className="header-style">¿Qué metodos de pago aceptan?</span>} key="1-4">
                <p>
                  Aceptamos tarjetas de credito, debito y pagos a travez de servicios como PayPal y Apple Pay.
                </p>
              </Panel>
              <Panel header={<span className="header-style">¿Puedo reservar entradas sin pagar por adelantado?</span>} key="1-5">
                <p>
                  No, para garantizar tu asiento debes realizar el pago al momento de la reserva.
                </p>
              </Panel>
              <Panel header={<span className="header-style">¿Puedo llevar comida y bebida de fuera al cine?</span>} key="1-6">
                <p>
                  Por razones de higiene y seguridad, no permitimos la entrada de comida y bebida del exterior en nuestras instalaciones. Sin embargo, nuestra confitería ofrece
									una amplia variedad de opciones para que disfrutes durante la película.
                </p>
              </Panel>
              <Panel header={<span className="header-style">¿Tienen sesiones especiales para niños o familias?</span>} key="1-7">
                <p>
                  Sí, ofrecemos sesiones matinales y vespertinas especialmente diseñadas para
									niños y familias. Estas funciones suelen incluir películas animadas o familiares
									y se programan durante los fines de semana y vacaciones escolares. Consulta
									nuestra cartelera para más información sobre las próximas sesiones familiares.
                </p>
              </Panel>
              <Panel header={<span className="header-style">¿Ofrecen opciones de asientos especiales para personas con discapacidades?</span>} key="1-8">
                <p>
                  Sí, nuestro cine está completamente equipado para recibir a personas con
									discapacidades. Contamos con asientos accesibles para personas con movilidad
									reducida y ofrecemos servicios adicionales como audífonos para personas con
									problemas auditivos. Puedes seleccionar estos asientos al momento de comprar tus
									entradas en línea.
                </p>
              </Panel>
            </Collapse>
          </Panel>
        </Collapse>
      </div>

      <LinkWithTitle to="/precios-y-descuentos">Precios y Descuentos</LinkWithTitle>
      <LinkWithTitle to="/proyeccion-y-horarios">Proyección y Horarios</LinkWithTitle>

      <div className="link-container">
        <Title level={4}>Rembolsos y Cambios</Title>
        <Title level={5}>Rembolsos</Title>
        <ul>
          <li>Los reembolsos solo están disponibles para entradas compradas en línea y deben solicitarse al menos 24 horas antes de la función programada.</li>
          <li>Para solicitar un reembolso, visita la sección "Mi Cuenta" en nuestra web y sigue las instrucciones en la sección de historial de compras.</li>
        </ul>
        <Title level={5}>Cambios</Title>
        <ul>
          <li>Puedes cambiar tus entradas para otra función o película hasta 24 horas antes de la función original.</li>
          <li>Para cambiar tus entradas, inicia sesión en tu cuenta, selecciona la entrada que deseas cambiar y sigue las instrucciones en pantalla.</li>
        </ul>
      </div>

      <div className="link-container">
        <Title level={4}>Servicios Adicionales</Title>
        <Title level={5}>Servicios</Title>
        <p><b>Alquiler de Membresía:</b> Únete a nuestro programa de membresía y disfruta de beneficios exclusivos como descuentos en entradas, acceso a eventos especiales y promociones en la confitería.</p>
        <p><b>Concesiones y Snacks:</b> Nuestra confitería ofrece una amplia variedad de snacks y bebidas, incluyendo opciones saludables y para personas con dietas especiales.</p>
        <p><b>Accesibilidad:</b> Contamos con asientos accesibles para personas con movilidad reducida y servicios para personas con discapacidades auditivas y visuales.</p>
      </div>

      <div className="link-container">
        <Title level={4}>Seguridad y Salud</Title>
        <Title level={5}>Medidas de Seguridad</Title>
        <ul>
          <li>Realizamos limpiezas profundas y desinfecciones regulares en todas nuestras instalaciones.</li>
          <li>Se han instalado estaciones de desinfección de manos en puntos clave del cine.</li>
          <li>Solicitamos a todos los visitantes el uso de mascarillas en las áreas comunes.</li>
          <li>Mantenemos el distanciamiento social en las filas y áreas de espera.</li>
          <li>Nuestro personal está capacitado para manejar emergencias de salud y primeros auxilios.</li>
        </ul>
      </div>

      <div className="link-container">
        <Title level={4}>Mapa y Ubicación</Title>
        <Title level={5}>Calle:</Title>
        <p>Av. Int. Dr. Jaime Gil</p>
        <Title level={5}>Ciudad:</Title>
        <p>Rio Cuarto, Córdoba</p>
        <a 
          href="https://www.google.com.ar/maps/place/Paseo+Ribera+Shopping/@-33.1180173,-64.3463074,18z/data=!4m6!3m5!1s0x95d50414805fc239:0x57ed0a7dcebd23f5!8m2!3d-33.1176207!4d-64.3457034!16s%2Fg%2F11c2qjcpl4?entry=ttu" 
          target="_blank"
          rel="noreferrer"
          className="map-link"
        >
          <img src={Mapa2} className="mapa" alt="Mapa" />
        </a>
      </div>

      <FooterComponent />
    </div>
  );
};

export default Ayuda;
