import { useState, useEffect } from 'react';
import "./NavMenu.scss";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import Collapse from 'react-bootstrap/Collapse';
import items from '../../data/sidebar.json';

function NavMenu() {
  const [open, setOpen] = useState(false);
    
      
    useEffect(() => {
        
    });
  return (
    <div>
      {/* <ul className='list-unstyled ps-0'>
        <li className='mb-1'>
          <div onClick={() => setOpen(!open)}
            aria-expanded={open}>
              <span>click</span>
          <BsChevronDown />
            </div>
          
          <Collapse in={open}>
            <ul className='btn-toggle-nav list-unstyled fw-normal pb-1 small'>
              <li><a className="link-dark rounded">Updates</a></li>
              <li><a className="link-dark rounded">Overview</a></li>
              <li><a className="link-dark rounded">Reports</a></li>
            </ul>
          </Collapse>
        </li>
      </ul> */}
      {/* <div className='sidebar'>
        <ul className={open? 'sidebar-item open': 'sidebar-item'}>
          <li onClick={() => setOpen(!open)}  className="sidebar-title active">
            <span>
              <AiOutlineHome />
              Generals
            </span>
            <span><BsChevronDown className='toggle-button' /></span>
            <ul className="sidebar-content">
              <li>hello</li>
            </ul>
          </li>
          
        </ul>
      </div> */}

<div className="aside-menu overflow-hidden ps">
            
            <nav id="stacked-menu" className="stacked-menu stacked-menu-has-collapsible">
              
              <ul className="menu">
                <li className="menu-item has-active">
                  <a href="index-2.html" className="menu-link"><span className="menu-icon fas fa-home"></span> <span className="menu-text">Dashboard</span></a>
                </li>
                <li  className={open? 'menu-item has-child has-open': 'menu-item has-child'}>
                  <a onClick={() => setOpen(!open)} href="#" className="menu-link"><span className="menu-icon far fa-file"></span> <span className="menu-text">App Pages</span></a>
                  <ul className="menu"><li className="menu-subhead">App Pages</li>
                    <li className="menu-item">
                      <a href="page-clients.html" className="menu-link" tabIndex={-1}>Clients</a>
                    </li>
                    <li className="menu-item">
                      <a href="page-teams.html" className="menu-link" tabIndex={-1}>Teams</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="menu-link" tabIndex={-1}>Team</a>
                      
                    </li>
                    <li className="menu-item">
                      <a href="#" className="menu-link" tabIndex={-1}>Project</a>
                      
                    </li>
                    <li className="menu-item">
                      <a href="page-calendar.html" className="menu-link" tabIndex={-1}>Calendar</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="menu-link" tabIndex={-1}>Invoices</a>
                      
                    </li>
                  </ul>
                </li>
                <li  className={open? 'menu-item has-child has-open': 'menu-item has-child'}>
                  <a onClick={() => setOpen(!open)} href="#" className="menu-link"><span className="menu-icon far fa-file"></span> <span className="menu-text">App Pages</span></a>
                  <ul className="menu"><li className="menu-subhead">App Pages</li>
                    <li className="menu-item">
                      <a href="page-clients.html" className="menu-link" tabIndex={-1}>Clients</a>
                    </li>
                    <li className="menu-item">
                      <a href="page-teams.html" className="menu-link" tabIndex={-1}>Teams</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="menu-link" tabIndex={-1}>Team</a>
                      
                    </li>
                    <li className="menu-item">
                      <a href="#" className="menu-link" tabIndex={-1}>Project</a>
                      
                    </li>
                    <li className="menu-item">
                      <a href="page-calendar.html" className="menu-link" tabIndex={-1}>Calendar</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="menu-link" tabIndex={-1}>Invoices</a>
                      
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
    </div>
  );
}

export default NavMenu;
