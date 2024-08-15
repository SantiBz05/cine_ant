import React from 'react';
import { Col, Row } from 'antd';
import Navbar from '../components/Navbar';
import bannerCartelera from '../img/cartelera.png'

function Cartelera() {
  return (
    <div>
      <Row>
        <Col xs={24}>
          <Navbar />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
        <div>
          <img src={bannerCartelera} alt="Banner" style={{ width: '100%'}} />
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default Cartelera;
