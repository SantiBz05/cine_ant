import React from 'react';
import {Col, Row} from 'antd';
import Navbar from '../components/Navbar';
import ayuda from '../img/descarga (5).jpeg';

function Ayuda() {
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
              <img src={ayuda} alt="Banner"  />
            </div>
            </Col>
          </Row>
        </div>
      );
}


export default Ayuda;
