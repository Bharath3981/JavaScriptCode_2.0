import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import "./CollapsibleSection.scss";
import PropTypes from 'prop-types'
import { IoIosArrowForward } from 'react-icons/io';


function CollapsibleSection( props:any ) {
    const [showSection, setShowSection] = useState( true );
    
    
  return (
    <div>
        <a href='#' className="expander-button text-decoration-none"
            onClick={() => setShowSection(!showSection)}
            aria-expanded={showSection}
           ><IoIosArrowForward className='expander-icon' style={{fontSize: "23px"}}/>
           <span className='fw-bolder ps-2'>{props.title}</span>
        </a>
        
        <hr />
        <Collapse in={showSection}>
            <div>{props.children}</div>
        </Collapse>
    </div>
    
  );
}

CollapsibleSection.propTypes = {
    children: PropTypes.element,
    title: PropTypes.string
}

export default CollapsibleSection;
