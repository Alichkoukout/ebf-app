import Nav from 'react-bootstrap/Nav';
import './Nav.css';

function NavbarBr() {
  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
       
        <Nav.Item >
          <Nav.Link eventKey="link-1" className='tt1'>Informations générales</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" className='tt2'>Liste des étudiants</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
    
  );
};
export default NavbarBr;