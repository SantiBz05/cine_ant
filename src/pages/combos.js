import React from 'react';
import {Col, Row} from 'antd';
import Navbar from '../components/Navbar';
import bannerCombos from '../img/combossection.png'

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
              <img src={bannerCombos} alt="Banner" style={{ width: '100%'}} />
            </div>
            </Col>
          </Row>
        </div>
      );
}


export default Combos;
