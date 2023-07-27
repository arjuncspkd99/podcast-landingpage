import { Col, Menu, Row } from 'antd'
import './Navbar.css';

// eslint-disable-next-line no-empty-pattern
const Navbar = ({ }) => {
  return (
    <div className='top-bar'>
      <Row style={{ marginTop: '2%', width: '90%' }}>
        <Col xs={24} sm={6}  >
          <span className='demo-logo'>Logo</span>
        </Col>
        <Col xs={17} sm={16} style={{ display: 'flex', paddingLeft: '30%' }}>
          <Menu mode="horizontal" className='transparent' style={{ width: '100%', display: 'flex' }}>
            <Menu.Item key="about" className=' menu-item' style={{ marginRight: '35%', display: 'flex' }} >
              About
            </Menu.Item>
            <Menu.Item key="pricing" className='menu-item' style={{ marginRight: '35%', display: 'flex' }}>
              Pricing
            </Menu.Item>
            <Menu.Item key="reviews" className='menu-item' >
              Reviews
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  );
};

export default Navbar;


