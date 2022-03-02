import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import "./CollapsibleSection.scss";
import PropTypes from 'prop-types'


function CollapsibleSection( props:any ) {
    const [showSection, setShowSection] = useState( true );
    
    
  return (
    <div>
        <button className="btn btn-toggle align-items-center"
            onClick={() => setShowSection(!showSection)}
            aria-expanded={showSection}
           >click
          </button>
        <Collapse in={showSection}>
            <div>{props.children}</div>
        </Collapse>
    </div>
    
  );
}

CollapsibleSection.propTypes = {
    children: PropTypes.element
}

export default CollapsibleSection;
