import React from 'react';
import { Tree, Col, Row, Typography, Card } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import bannerPromos from '../img/promociones.png';
import Grassi from '../img/promo1.jpg';
import CompagnucciSocial from '../img/promo3.jpg'; 
import PersonalPay from '../img/promo5.jpg'; 
import Favacard from '../img/promo11.jpg'; 
import HappyHour from '../img/promo12.jpg'; 
import TarjetaNaranja from '../img/promo4.jpg'; 
import BancoProvincia from '../img/promo7.jpg'; 
import BancoNacion from '../img/promo6.jpg'; 
import MiercolesRebajas from '../img/promo13.jpg'; 
import PuntoServiclub from '../img/promo2.jpg'; 
import Suscripcion from '../img/promo8.png'; 
import Trabajo from '../img/promo9.jpg'; 

const { Title } = Typography;

const treeData = [
  {
    title: 'Entradas 2x1',
    key: '0-0',
    children: [
      { title: 'Farmacia Grassi', key: '0-0-0' },
      { title: 'Compagnucci Social', key: '0-0-1' },
      { title: 'PersonalPay', key: '0-0-2' },
      { title: 'Favacard', key: '0-0-3' },
      { title: 'Happy Hour!', key: '0-0-4' },
    ],
  },
  {
    title: 'Descuentos',
    key: '0-1',
    children: [
      { title: 'Tarjeta Naranja', key: '0-1-0' },
      { title: 'Banco Provincia', key: '0-1-1' },
      { title: 'Banco Nación', key: '0-1-2' },
      { title: 'Miércoles de Rebajas!', key: '0-1-3' },
    ],
  },
  {
    title: 'Beneficios Varios',
    key: '0-2',
    children: [
      { title: 'Puntos Serviclub', key: '0-2-0' },
      { title: 'Suscripción', key: '0-2-1' },
      { title: 'Solicitud de Trabajo', key: '0-2-2' },
    ],
  },
];

const Promos: React.FC = () => {
  const onSelect = (selectedKeys: React.Key[]) => {
    const key = selectedKeys[0];
    if (typeof key === 'string') {
      const element = document.getElementById(key);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      <Row>
        <Col span={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <img src={bannerPromos} alt="Banner" style={{ width: '100%' }} />
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '20px', gap: '20px' }}>
        <Col span={24} md={20} lg={16}>
          <Title
            level={1}
            style={{
              color: 'black',
              textAlign: 'center',
              marginTop: '2%',
              marginBottom: '8%',
              fontSize: '4rem',
              fontWeight: 300,
              width: '105%',
            }}
          >
            ¡Descuentos increíbles que no querrás perderte! ¡Aprovecha ahora y sorpréndete!
          </Title>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={24} md={12}>
          <Tree
            treeData={treeData}
            onSelect={onSelect}
            style={{ fontSize: '1.2rem', paddingLeft: '30%', color:'blue' }} // Ajusta padding según diseño
          />
        </Col>
        <Col xs={24} md={12}>
          <Title id="0-0" level={1} style={{color: 'black', textAlign: 'start', marginBottom: '1%', marginLeft: -300, fontSize: '2.5rem', fontWeight: 300, width: '105%'}}>
            <strong>Entradas 2x1</strong>
          </Title>
          <Card id="0-0-0" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={Grassi}
              alt="Grassi"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Promoción 2x1</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos socio de una obra social o prepaga, a través de su app, podés obtener los códigos para acceder al beneficio 2x1 en entradas de cine todos los días. El beneficio aplica tanto para la compra de entradas online como presencial, y el 2x1 se aplica sobre el valor de la entrada general del cine. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>2x1 en entrada de cine todos los días.</strong></p>
          </Card>

          <Card id="0-0-1" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={CompagnucciSocial}
              alt="CompagnucciSocial"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Promoción 2x1</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos socio de una obra social o prepaga, a través de su app, podés obtener los códigos para acceder al beneficio 2x1 en entradas de cine todos los días. El beneficio aplica tanto para la compra de entradas online como presencial, y el 2x1 se aplica sobre el valor de la entrada general del cine. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>2x1 en entrada de cine todos los días.</strong></p>
          </Card>

          <Card id="0-0-2" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={PersonalPay}
              alt="PersonalPay"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Promoción 2x1</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos socio de una obra social o prepaga, a través de su app, podés obtener los códigos para acceder al beneficio 2x1 en entradas de cine todos los días. El beneficio aplica tanto para la compra de entradas online como presencial, y el 2x1 se aplica sobre el valor de la entrada general del cine. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>2x1 en entrada de cine todos los días.</strong></p>
          </Card>

          <Card id="0-0-3" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={Favacard}
              alt="Favacard"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Promoción 2x1</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos socio de una obra social o prepaga, a través de su app, podés obtener los códigos para acceder al beneficio 2x1 en entradas de cine todos los días. El beneficio aplica tanto para la compra de entradas online como presencial, y el 2x1 se aplica sobre el valor de la entrada general del cine. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>2x1 en entrada de cine todos los días.</strong></p>
          </Card>

          <Card id="0-0-4" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={HappyHour}
              alt="HappyHour"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Promoción 2x1</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos socio de una obra social o prepaga, a través de su app, podés obtener los códigos para acceder al beneficio 2x1 en entradas de cine todos los días. El beneficio aplica tanto para la compra de entradas online como presencial, y el 2x1 se aplica sobre el valor de la entrada general del cine. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>2x1 en entrada de cine todos los días.</strong></p>
          </Card>

          <Title id="0-1" level={1} style={{color: 'black', textAlign: 'start', marginBottom: '1%', marginLeft: -300, fontSize: '2.5rem', fontWeight: 300, width: '105%'}}>
            <strong>Descuentos</strong>
          </Title>

          <Card id="0-1-0" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={TarjetaNaranja}
              alt="TarjetaNaranja"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Descuento Tarjeta Naranja</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos socio de Tarjeta Naranja, podés obtener un 20% de descuento en entradas de cine todos los días. El beneficio aplica tanto para la compra de entradas online como presencial. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>20% de descuento con Tarjeta Naranja.</strong></p>
          </Card>

          <Card id="0-1-1" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={BancoProvincia}
              alt="BancoProvincia"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Descuento Banco Provincia</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos cliente del Banco Provincia, podés obtener un 15% de descuento en entradas de cine todos los días. El beneficio aplica tanto para la compra de entradas online como presencial. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>15% de descuento con Banco Provincia.</strong></p>
          </Card>

          <Card id="0-1-2" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={BancoNacion}
              alt="BancoNacion"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Descuento Banco Nación</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos cliente del Banco Nación, podés obtener un 10% de descuento en entradas de cine todos los días. El beneficio aplica tanto para la compra de entradas online como presencial. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>10% de descuento con Banco Nación.</strong></p>
          </Card>

          <Card id="0-1-3" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={MiercolesRebajas}
              alt="MiercolesRebajas"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Miércoles de Rebajas</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Todos los miércoles tenés un 50% de descuento en la compra de entradas de cine. El beneficio aplica tanto para la compra de entradas online como presencial. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>50% de descuento los miércoles.</strong></p>
          </Card>

          <Title id="0-2" level={1} style={{color: 'black', textAlign: 'start', marginBottom: '1%', marginLeft: -300, fontSize: '2.5rem', fontWeight: 300, width: '105%'}}>
            <strong>Beneficios Varios</strong>
          </Title>

          <Card id="0-2-0" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={PuntoServiclub}
              alt="PuntoServiclub"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Puntos Serviclub</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si sos miembro del programa Serviclub, podés canjear tus puntos por entradas de cine. El beneficio aplica tanto para la compra de entradas online como presencial. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>Canjea tus puntos Serviclub.</strong></p>
          </Card>

          <Card id="0-2-1" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={Suscripcion}
              alt="Suscripcion"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Suscripción</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Suscribite a nuestro boletín y obtené beneficios exclusivos en entradas de cine. El beneficio aplica tanto para la compra de entradas online como presencial. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>Beneficios exclusivos con suscripción.</strong></p>
          </Card>

          <Card id="0-2-2" style={{width: '100%', borderRadius: '8px', padding: '1%', marginBottom: '2.5%', border: '0.5px solid #c7c7c7', marginLeft: -300}}>
            <img
              src={Trabajo}
              alt="Trabajo"
              style={{ width: '31%'}}
            />
            <Title level={2} style={{color: 'black', textAlign: 'left', marginTop: '2%', marginBottom: '1%', fontSize: '1.3rem', fontWeight: 300, width: '100%'}}>
              <strong>Solicitud de Trabajo</strong>
            </Title>
            <p style={{fontSize: '1rem'}}>
              <strong>Condiciones generales:</strong> Si estás buscando trabajo, revisá nuestras ofertas de empleo y obtené beneficios en la compra de entradas de cine. El beneficio aplica tanto para la compra de entradas online como presencial. No es combinable con otras promociones. Sujeto a la capacidad de la sala, aforos permitidos y posibles restricciones de las distribuidoras de películas.
            </p>
            <p style={{marginBottom:'-2%'}}><strong>Beneficios para solicitantes de trabajo.</strong></p>
          </Card>
        </Col>
      </Row>
      <FooterComponent />
    </div>
  );
};

export default Promos;
