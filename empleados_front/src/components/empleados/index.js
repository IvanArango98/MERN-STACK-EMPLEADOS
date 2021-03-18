import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';
import './empleados.css'
import EmpleadosBuscar from './crud/buscar'
import EmpleadosCrear from './crud/crear'
import EmpleadosEditar from './crud/editar'

export default class Empleados extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            currentTab: "buscar",
            _id: null
        }
        this.changeTab = this.changeTab.bind(this)
        this.setIdEmpleado = this.setIdEmpleado.bind(this)
        this.getIdEmpleado = this.getIdEmpleado.bind(this)
    }

    changeTab(tab)
    {
        this.setState({ currentTab: tab });
    }

    setIdEmpleado(id)
    {
        this.setState({_id: id});
    }

    getIdEmpleado()
    {
        return this.state._id
    }

    render() { 
        return (  
            <Container id = "empleados-container">
             <Row>
             <Nav 
             fill variant="tabs" 
             defaultActiveKey="/buscar"
             onSelect= { eventKey => this.setState({ currentTab: eventKey  })}
             >
                
                <Nav.Item>
                    <Nav.Link eventKey="buscar">Buscar</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="crear">Crear Usuario</Nav.Link>
                </Nav.Item>              
                </Nav>
             </Row>             
             <Row>
            {
                this.state.currentTab === "buscar" ?
                <EmpleadosBuscar  changeTab = {this.changeTab} setIdEmpleado={this.setIdEmpleado}/> :
                 this.state.currentTab === "crear" ? <EmpleadosCrear  changeTab = {this.changeTab} /> :                 
                <EmpleadosEditar changeTab = {this.changeTab} getIdEmpleado={this.getIdEmpleado} />

            }
             </Row>

            </Container>
        );
    }
}
 
