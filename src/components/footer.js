// FooterComponent.js
import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent = () => (
  <Footer style={{ backgroundColor: '#333', color: 'white', textAlign: 'left', padding: '10px 20px', height: '70px', lineHeight: '60px', marginTop: 'auto' }}>
    <div style={{ marginLeft: '20px' }}>© 2024. Todos los derechos reservados.</div>
  </Footer>
);

export default FooterComponent;
