import React, { useState } from 'react';
import { Col, Row, Card, Button, Input, message, Layout } from 'antd';
import Navbar from '../components/Navbar'; // Asegúrate de que la ruta sea correcta
import FooterComponent from '../components/footer'; // Asegúrate de que el nombre sea correcto
import '../css/miperfil.css'; // Agrega estilos específicos si es necesario

// Imágenes importadas
import bannerPerfil from '../img/perfil.png';
import fondoImg from '../img/fondito.png';

const { Content } = Layout;

const Perfil = () => {
  const [editing, setEditing] = useState({
    nombre: false,
    apellido: false,
    contraseña: false,
    telefono: false,
    dni: false,
  });

  const handleEdit = (field) => {
    setEditing((prev) => ({ ...prev, [field]: true }));
  };

  const handleSave = (field) => {
    setEditing((prev) => ({ ...prev, [field]: false }));
    message.success('Datos guardados exitosamente');
  };

  return (
    <Layout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar /> {/* Aquí se importa y se usa el Navbar */}
      <div style={{ width: '100%' }}>
        <img 
          src={bannerPerfil} 
          alt="Perfil" 
          style={{ 
            width: '100%', 
            marginBottom: 24, 
            display: 'block' 
          }} 
        />
      </div>
      <Content 
        style={{ 
          padding: '24px', 
          backgroundImage: `url(${fondoImg})`, // Corregir la sintaxis aquí
          backgroundSize: 'cover', 
          backgroundRepeat: 'no-repeat', 
          backgroundAttachment: 'fixed', 
          flex: 1 
        }}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              {['nombre', 'apellido', 'contraseña', 'telefono', 'dni'].map((field) => (
                <div key={field} style={{ marginBottom: 16 }}>
                  <h5>{field.charAt(0).toUpperCase() + field.slice(1)}:</h5>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Input type={field === 'contraseña' ? 'password' : 'text'} readOnly={!editing[field]} />
                    {!editing[field] ? (
                      <Button
                        type="warning"
                        style={{ backgroundColor: '#ffc107', borderColor: '#ffc107', color: 'black', marginLeft: 8 }}
                        onClick={() => handleEdit(field)}
                      >
                        Editar
                      </Button>
                    ) : (
                      <>
                        <Button
                          type="primary"
                          style={{ backgroundColor: '#28a745', borderColor: '#28a745', color: 'white', marginLeft: 8 }}
                          onClick={() => handleSave(field)}
                        >
                          Guardar
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
              <div style={{ marginBottom: 16 }}>
                <h5>Email:</h5>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Input type="email" readOnly />
                </div>
              </div>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Historial de Butacas">
              {/* Aquí puedes cargar las butacas seleccionadas */}
            </Card>
          </Col>
        </Row>
      </Content>
      <FooterComponent /> {/* Aquí se importa y se usa el FooterComponent */}
    </Layout>
  );
};

export default Perfil;
