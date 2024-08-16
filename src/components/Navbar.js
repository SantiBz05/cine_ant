import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación
import 'antd/dist/reset.css'; // Para la versión 5.x de Ant Design
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import mascota from '../img/mascota.jpg';
import tickettt from '../img/tickettt.webp';
import '../css/Navbar.css'; // Importa después del CSS de Ant Design

const { Header } = Layout;

function Navbar() {
  const dropdownMenu = (
    <Menu>
      <Menu.Item key="1"><Link to="/MiPerfil">Mi Perfil</Link></Menu.Item>
      <Menu.Item key="2"><Link to="/Ayuda">Ayuda</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/Login">Login</Link></Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="custom-header">
        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} className="custom-menu">
          <Menu.Item key="1" className="custom-nav-button">
            <Link to="/">
              <img src={tickettt} alt="Ticket" className="header-logo" />
            </Link>
          </Menu.Item>
          <Menu.Item key="2" className="custom-nav-button">
            <Link to="/Cartelera">Cartelera</Link>
          </Menu.Item>
          <Menu.Item key="5" className="custom-nav-button">
            <Link to="/Proximamente">Próximamente</Link>
          </Menu.Item>
          <Menu.Item key="6" className="custom-nav-button">
            <Link to="/Combos">Combos</Link>
          </Menu.Item>
          <Menu.Item key="7" className="custom-nav-button">
            <Link to="/Promociones">Promociones</Link>
          </Menu.Item>
          <Menu.Item key="8" className="custom-nav-button">
            <Link to="/SobreNosotros">Sobre Nosotros</Link>
          </Menu.Item>
        </Menu>
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
          <Avatar
            className="img-rounded"
            size={40} // Ajusta el tamaño si es necesario
            src={mascota}
            style={{ verticalAlign: 'middle' , marginRight: '1%'}} // Alineación vertical
          />
        </Dropdown>
      </Header>
    </Layout>
  );
}

export default Navbar;
