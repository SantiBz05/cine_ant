import React from 'react';
import {Col, Row} from 'antd';
import Navbar from '../components/Navbar';
import bannerProx from '../img/proximamente.png'

function Proximamente() {
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
              <img src={bannerProx} alt="Banner" style={{ width: '100%'}} />
            </div>
            </Col>
          </Row>
        </div>
      );
}


export default Proximamente;
