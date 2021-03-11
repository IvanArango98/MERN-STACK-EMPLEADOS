import React from 'react';
import './login.css';
import { Container,Form ,Button, Row,Col} from 'react-bootstrap';


export default class Login extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            pass: ""
        }     
    }

    iniciarSesion()
    {
        alert(`Usuario: ${this.state.usuario} - Password: ${this.state.pass}`)
    }
    render() { 
        return (
            <Container id = "login-container">
                <Row>
                    <Col
                    sm="12"
                    xs="12"
                    >
                    <Row>
                        <h2 style={{width: "100%"}}>Iniciar sesión</h2>
                    </Row>
                        <Row>  
                            <Col
                            sm="12"
                            xs="12"
                            md={{span: 4, offset: 4}}
                            lg={{span: 4, offset: 4}}
                            xl={{span: 4, offset: 4}}
                            >     
                            <Form style={{width: "100%"}}>                    
                            <Form.Group>
                            <Form.Label style= {{float:"left"}}>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" 
                             onChange={ e => this.setState({ usuario: e.target.value } ) }                         
                            />                                            

                            {
                                this.state.usuario
                            }   

                            </Form.Group>
                            <Form.Group>
                            <Form.Label style= {{float:"left"}}>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" 
                            onChange={ e => this.setState({ pass: e.target.value } ) }                         
                            />
                            {
                                this.state.pass
                            }
                            </Form.Group>                
                            <Button variant="primary" style= {{width:"100%"}}
                             onClick={() => this.iniciarSesion() }
                            >
                            Iniciar Sesion
                            </Button>
                            </Form>

                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
             
            </Container>

        );
    }
}
 
 