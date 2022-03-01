import { useState, useEffect } from 'react';
import "./MainContent.scss";
import { Container, Row, Col, Card, Button, Spinner} from 'react-bootstrap';
import NavMenu from '../NavMenu/NavMenu';

function MainContent() {
    //const [headerMenus, setHeaderMenus]:any = useState([]);
    
      
    useEffect(() => {
        
    });
  return (
    <div>
        <Container fluid>
            <Row>
                <Col md={3} className="d-none d-sm-none d-md-block">
                    <NavMenu></NavMenu>
                </Col>
                <Col sm={12} md={9}>main content</Col>
            </Row>
        </Container>
        
    </div>
  );
}

export default MainContent;
