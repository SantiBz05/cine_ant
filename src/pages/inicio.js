import React from 'react';
import {Col, Row} from 'antd';
import Navbar from '../components/Navbar';

function Inicio() {
    return (
        <Row>
            <Col xs={24}>    
                <Navbar />
            </Col>
        </Row>
    );
}


export default Inicio;
