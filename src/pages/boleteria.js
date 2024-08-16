import React from 'react';
import {Col, Row} from 'antd';
import Navbar from '../components/Navbar';
import Xd from '../img/XD.jpeg'

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
              <img src={Xd} alt="Banner" style={{ width: '4S0%'}} />
            </div>
            </Col>
          </Row>
        </div>
      );
}


export default Combos;
