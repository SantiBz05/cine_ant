import React from 'react';
import {Col, Row} from 'antd';
import Navbar from '../components/Navbar';
import perfil from '../img/XD.jpeg';

function Perfil() {
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
              <img src={perfil} alt="Banner"  />
            </div>
            </Col>
          </Row>
        </div>
      );
}


export default Perfil;
