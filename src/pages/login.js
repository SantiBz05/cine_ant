import React from 'react';
import {Col, Row} from 'antd';
import login from '../img/grrr.jpeg'

function Cartelera() {
    return (
        <div className="background">
          <Row>
            <Col xs={24}>
                <div>
                    <h1>
                        CUIDADOOOOOOOOOOOOO
                    </h1>
                </div>
            </Col>
          </Row>
          <Row>
            <Col xs={24}>
            <div>
              <img src={login} alt="Banner" />
            </div>
            </Col>
          </Row>
        </div>
      );
}


export default Cartelera;
