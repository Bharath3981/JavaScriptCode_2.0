import { useEffect } from 'react';
import "./MainContent.scss";
import { Container, Row, Col} from 'react-bootstrap';
import NavMenu from '../NavMenu/NavMenu';
import Card from 'react-bootstrap/Card';
import CollapsibleSection from "../Util/CollapsibleSection/CollapsibleSection";

function MainContent() {
    //const [headerMenus, setHeaderMenus]:any = useState([]);
    
      
    useEffect(() => {
        
    });
  return (
    <div>
        <Container fluid className='pt-3'>
            <Row>
                <Col md={2} className="d-none d-sm-none d-md-block">
                   
                        <NavMenu></NavMenu>
                    
                </Col>
                <Col sm={12} md={10}>
                    <Card>
                        <Card.Body>
                            <CollapsibleSection>
                                <div>Content</div>
                            </CollapsibleSection>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        
    </div>
  );
}

export default MainContent;
