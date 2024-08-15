import React from 'react';
import {Col, Row} from 'antd';
import Navbar from '../components/Navbar';
import bannerNos from '../img/nosotros.png';

function sobreNosotros() {
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
              <img src={bannerNos} alt="Banner" style={{ width: '100%'}} />
            </div>
            </Col>
          </Row>
        </div>
      );
}



export default sobreNosotros;
