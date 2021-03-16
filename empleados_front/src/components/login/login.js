import React from 'react';
import axios from 'axios'
import './login.css';
import { Container,Form ,Button, Row,Col} from 'react-bootstrap';
import {APIHOST as host} from '../../App.json'
import { isNull } from 'util'
import Cookies from 'universal-cookie'
import { calculaExpiracionSesion } from '../helpers/helpers'
import Loading from '../loading/loading'

const cookies = new Cookies();

export default class Login extends React.Component 
{
    constructor(props) {
        super(props);
        this.state = {
            usuario: "",
            pass: "",
            loading:false
        }     
    }

    iniciarSesion()
    {
        this.setState({loading:true});
        axios.post(`${host}/usuarios/login`, 
        {usuario: this.state.usuario,
            pass: this.state.pass
        }).then( response => {
            if(isNull(response.data.token))
            {
                alert("Usuario y/o contraseña invalido")
            }
            else{
                cookies.set("_s",response.data.token,{
                    path: "/", 
                    expires: calculaExpiracionSesion()
                })

                this.props.history.push("/empleados")
            }
            this.setState({loading:false});
        }).catch(err => {
            console.error(err)
            this.setState({loading:false});
        })
               
    }
    render() { 
        return (
            <Container id = "login-container">
                <Loading
                show = {this.state.loading}
                />
                <Row>
                    <Col
                    sm="12"
                    xs="12"
                    >
                    <Row>
                        <h2>Iniciar sesión</h2>
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
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" 
                             onChange={ e => this.setState({ usuario: e.target.value } ) }                         
                            />                                            

                            </Form.Group>
                            <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Enter password" 
                            onChange={ e => this.setState({ pass: e.target.value } ) }                         
                            />
                        
                            </Form.Group>                
                            <Button variant="primary" 
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
 
 