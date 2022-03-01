import { useState, useEffect } from 'react';
import "./NavMenu.scss";
import { Container, Row, Col, Card, Button, Spinner} from 'react-bootstrap';
import Collapse from 'react-bootstrap/Collapse';

function NavMenu() {
  const [open, setOpen] = useState(false);
    
      
    useEffect(() => {
        
    });
  return (
    <div>
      <ul className='list-unstyled ps-0'>
        <li className='mb-1'>
          <button className="btn btn-toggle align-items-center"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
           >click
          </button>
          <Collapse in={open}>
            <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
              <li><a href="#" className="link-dark rounded">Updates</a></li>
              <li><a href="#" className="link-dark rounded">Overview</a></li>
              <li><a href="#" className="link-dark rounded">Reports</a></li>
            </ul>
          </Collapse>
        </li>

        <li className='mb-1'>
          <button className="btn btn-toggle align-items-center"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
           >click
          </button>
          <Collapse in={open}>
            <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
              <li><a href="#" className="link-dark rounded">Updates</a></li>
              <li><a href="#" className="link-dark rounded">Overview</a></li>
              <li><a href="#" className="link-dark rounded">Reports</a></li>
            </ul>
          </Collapse>
        </li>
      </ul>
    </div>
  );
}

export default NavMenu;
