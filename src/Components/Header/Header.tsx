import { useState, useEffect } from 'react';
import {Navbar, Container, Offcanvas } from 'react-bootstrap';
import NavMenu from '../NavMenu/NavMenu';

import "./Header.scss";
//import { getApplicationBanner } from '../../Util/utilHelper';
//const getApplicationBanner:any = lazy(() => import("../../Util/utilHelper") as any);

function Header() {
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    const handleClose = () => setShowOffCanvas(false);
    const handleShow = () => setShowOffCanvas(!showOffCanvas);
    
      
    useEffect(() => {
        
    });
  return (
    <div>
        <Navbar className='shadow-sm'>
            <Container fluid>
                <Navbar.Brand href="#">
                {/* <img
                    src={require("../../assets/images/incredit_logo.png")}
                    width="35"
                    height="35"
                    className="d-inline-block align-top"
                    alt="Incredit logo"/> */}
                    {' '}<span className='logo-text'>JavaScript Code</span>
                </Navbar.Brand>
                <button type="button" className={showOffCanvas?"d-block d-sm-block d-md-none navbar-toggle":"d-block d-sm-block d-md-none navbar-toggle collapsed"} onClick={handleShow}>
                   <span className="icon-bar top-bar"></span>
                   <span className="icon-bar middle-bar"></span>
                   <span className="icon-bar bottom-bar"></span>
               </button>
                 
                <Offcanvas onHide={handleClose} backdrop={true} 
                id="offcanvasNavbar" className="d-block d-sm-block d-md-none"
                aria-labelledby="offcanvasNavbarLabel"
                show={showOffCanvas} 
                >
                    <Offcanvas.Body>
                        <NavMenu></NavMenu>
                    </Offcanvas.Body>
                </Offcanvas>
            </Container>
        </Navbar>
    </div>
  );
}

export default Header;
