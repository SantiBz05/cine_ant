import React from 'react';
import {Col, Row} from 'antd';
import Navbar from '../components/Navbar';
import bannerPromos from '../img/promociones.png'


function Promos() {    
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
              <img src={bannerPromos} alt="Banner" style={{ width: '100%'}} />
            </div>
            </Col>
          </Row>
        </div>
      );
}

export default Promos;
