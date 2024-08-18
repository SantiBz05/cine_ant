import React from 'react';
import { Col, Row, Typography, Card, Button } from 'antd';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/footer';
import bannerCombos from '../img/combossection.png';
import superCombo1 from '../img/superCombo.png';
import superCombo2 from '../img/superCombo2.png';
import superCombo3 from '../img/superCombo3.png';
import grandesPochoclos from '../img/Grandes.png'; 
import medianosPochoclos from '../img/Medianos.png'; 
import chicosPochoclos from '../img/Chicos.png';
import cocaCola from '../img/CocaCola.png';
import cocaZero from '../img/CocaZero.png';
import sprite from '../img/Sprite.png';
import fanta from '../img/Fanta.png';
import pasoToro from '../img/PasoToro.png';
import agua from '../img/Water.png';
import '../css/combos.css'; 

const { Title, Text } = Typography;

function Combos() {
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
                        <img src={bannerCombos} alt="Banner" style={{ width: '100%' }} />
                    </div>
                </Col>
            </Row>
            <Row justify="center" style={{ marginTop: '20px' }}>
                <Col xs={24} md={20} lg={16} style={{ textAlign: 'center' }}>
                    <Title level={1} style={{ color: 'black', marginTop: '3%', marginBottom: '4%',fontSize: '4rem', fontWeight: 300 }}>
                        ¡Combos Especiales!
                    </Title>
                    <Text style={{ fontSize: '1.5rem', marginBottom: '4%' }}>
                        ¡Listos para disfrutar en familia o con amigos!
                    </Text>
                </Col>
            </Row>
            {/* combos armados */}
            <Row justify="center" style={{ marginTop: '20px' }}>
                <Col xs={24} md={20} lg={16}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={superCombo1} alt="" style={{ width: '100%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Combo Titanic</Title>
                        <Text>$13800</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} md={20} lg={16}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={superCombo2} alt="" style={{ width: '100%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Combo Mago de Oz</Title>
                        <Text>$17500</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} md={20} lg={16}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={superCombo3} alt="" style={{ width: '100%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Combo Family</Title>
                        <Text>$17000</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>
            
            <Row justify="center" style={{ marginTop: '30px' }}>
                <Col xs={24} md={20} lg={16} style={{ textAlign: 'center' }}>
                    <Text style={{ fontSize: '1.5rem', marginTop: '-20px', display: 'block' }}>
                        ¿No convencido?
                    </Text>
                    <Title level={1} style={{ color: 'black', marginTop: '20px', marginBottom: '40px',fontSize: '3rem', fontWeight: 300 }}>
                        ¡Personaliza tu Propio Combo!
                    </Title>
                </Col>
            </Row>

            {/* combos personalizados */}

            {/* pochoclos */}
            <Row gutter={[16, 16]} justify="center" style={{ marginTop: '20px' }}>
                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={grandesPochoclos} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Pochoclos Grandes</Title>
                        <Text>$4500</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={medianosPochoclos} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Pochoclos Medianos</Title>
                        <Text>$4300</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>
                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={chicosPochoclos} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Pochoclos Chicos</Title>
                        <Text>$3700</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>

                {/* bebidas */}
                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={cocaCola} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Coca-Cola</Title>
                        <Text>$2500</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={cocaZero} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Coca-Cola Zero</Title>
                        <Text>$2500</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={sprite} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Sprite</Title>
                        <Text>$2500</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={fanta} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Fanta</Title>
                        <Text>$2500</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={pasoToro} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Paso del Toro</Title>
                        <Text>$3000</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>

                <Col xs={24} sm={12} md={8} lg={8}>
                    <Card className="transparent-card" style={{ width: '100%', padding: '1%', marginBottom: '2.5%',textAlign: 'center',}}>
                        <img src={agua} alt="" style={{ width: '50%',marginBottom: '10px',borderRadius: '8px' }} />
                        <Title level={4} style={{ marginBottom: '5px' }}>Agua Mineral</Title>
                        <Text>$2000</Text>
                        <div style={{ marginTop: '10px' }}>
                            <Button type="warning"style={{ backgroundColor: '#ffc107', borderColor: '#ffc107',color: 'black' }}>
                                Agregar
                            </Button>
                        </div>
                    </Card>
                </Col>
            </Row>

            {/* Resumen de Compra ahre */}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Title level={3} style={{ marginBottom: '20px' }}>Resumen de Compra</Title>

                <Text style={{ fontSize: '1.25rem', marginTop: '20px', display: 'block' }}>
                    <strong>Total: <span id="total">0</span>$</strong>
                </Text>
                <div style={{ marginTop: '20px' }}>
                    <Button type="danger"style={{ backgroundColor: '#bd0231', borderColor: '#bd0231',color: 'white' }}>Vaciar</Button>
                </div>
            </div>
            
            {/* Volver */}
            <Row justify="start" style={{ marginTop: '40px', padding: '0 16px' }}>
                <Col xs={24} md={20} lg={16}>
                    <Button
                        type="default"
                        style={{ width: '8%', height: '120%', backgroundColor: '#454a46', borderColor: '#d9d9d9', color: 'white' }}>
                        Volver
                    </Button>
                </Col>
            </Row>
            <FooterComponent />
        </div>
    );
}
export default Combos;
