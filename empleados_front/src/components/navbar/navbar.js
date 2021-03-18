import React, { Component } from 'react';
import {Navbar,Nav,DropdownButton,Dropdown, Row, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

export default class TopMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    logout()
    {
        cookies.remove("_s")
        window.location.reload();
    }

    render() { 
        return (  
            <Navbar fixed="top" id="navbar" bg="primary" variant="dark">
            <Navbar.Brand href="#home">RH <span id="navbar-sub-brand">Recursos Humanos</span> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              {/*  <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>*/}               
              </Nav>             
                    <DropdownButton drop="left">
                    <Dropdown.Header id="Dropdown-header">
                        <Row>
                        <FontAwesomeIcon icon={faUserCircle} />
                        </Row>
                        <Row>
                            #USERNAME#
                        </Row>                    
                    </Dropdown.Header> 
                    <Dropdown.Divider></Dropdown.Divider>
                    <Dropdown.Item 
                        onClick={ () => this.logout()}                 
                    >Cerrar Sesión</Dropdown.Item>
                    {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </DropdownButton>
            </Navbar.Collapse>
          </Navbar> 
        );
    }
}
 
 