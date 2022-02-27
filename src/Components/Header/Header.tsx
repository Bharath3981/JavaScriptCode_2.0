import { useState, useEffect } from 'react';
import {Nav, Navbar, NavDropdown, Container, Offcanvas, Collapse } from 'react-bootstrap';

import "./Header.scss";
//import { getApplicationBanner } from '../../Util/utilHelper';
//const getApplicationBanner:any = lazy(() => import("../../Util/utilHelper") as any);

function Header() {
    const [headerMenus, setHeaderMenus]:any = useState([]);
    const [show, setShow] = useState(false);
    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);

    const handleClose = () => setShowOffCanvas(false);
    const handleShow = () => setShowOffCanvas(!showOffCanvas);
    
      
    useEffect(() => {
        
    });
  return (
    <div>
        <Navbar fixed='top'>
            <Container fluid>
                <Navbar.Brand href="#">
                {/* <img
                    src={require("../../assets/images/incredit_logo.png")}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    alt="Incredit logo"/> */}
                    {' '}<span className='logo-text'>InCredit</span>
                </Navbar.Brand>
                <button type="button" className={showOffCanvas?"d-block d-sm-none navbar-toggle":"d-block d-sm-none navbar-toggle collapsed"} onClick={handleShow}>
                   <span className="icon-bar top-bar"></span>
                   <span className="icon-bar middle-bar"></span>
                   <span className="icon-bar bottom-bar"></span>
               </button>
                 <Nav className='max-width-575 main-menus'
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                </Nav>
                <Offcanvas onHide={handleClose} backdrop={true} 
                id="offcanvasNavbar" className="d-block d-sm-none"
                aria-labelledby="offcanvasNavbarLabel"
                show={showOffCanvas} 
                >
                    <Offcanvas.Body>
                        test
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    </div>
  );
}

export default Header;
