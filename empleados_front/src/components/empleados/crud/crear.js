import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../../helpers/helpers'
import Loading from '../../loading/loading'
import MessagePrompt from '../../prompts/message'
import {isUndenfined, isNull } from 'util'

export default  class EmpleadosCrear extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            redirect: false,
            message: {
                text:"",
                show:false
            },
            loading: false,
            empleado: {
                nombre:"",
                apellido_p:"",                
                apellido_m: "",                
                telefono:"",                
                mail:"",                
                direccion:""                
            }
        }
        this.onExitedMessage = this.onExitedMessage.bind(this)
    }

    setValue(index, value)
    {
        this.setState({
            empleado: {
                ...this.state.empleado,
                [index]: value
            }        
        })
    }

    guardarEmpleado()
    {   
        this.setState({loading: true})
        request.post("/empleados",this.state.empleado).then( response => 
            {
                this.setState({loading: false})

                if(response.data.exito)
                {                 
                 this.setState({
                     redirect: response.data.exito,
                    message: {
                        //mensaje que viene del backend
                        text: response.data.msg,
                        show:true
                    }

                 })

                }
                                
            }).catch(err => 
                {
                    this.setState({loading: false})
                    console.error(err)
                })
    }

    onExitedMessage()
    {
        if(this.state.redirect)
        {
            this.props.changeTab("buscar")
        }
    }

    onExited()
    {
        if( !isUndenfined(this.props.onExited) && !isNull(this.props.onExited))
        {
            this.props.onExited()
        }
    }

    render() { 
        return ( 
            <Container id="empleados-crear-container">
                <MessagePrompt
                    text= {this.state.message.text}
                    show= {this.state.message.show}
                    duration={2500}
                    onExited= {this.onExitedMessage}
                />                              
                <Loading
                show = {this.state.loading}
                />

            <Row>
                <h1>Crear empleado</h1>
            </Row> 
            <Row>
            <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                type="text" 
                onChange= { e => this.setValue("nombre",e.target.value)}
                />                
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control
                 type="text" 
                 onChange= { e => this.setValue("apellido_p",e.target.value)}
                 />  
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control 
                type="text" 
                onChange= { e => this.setValue("apellido_m",e.target.value)}
                />  
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control 
                type="text" 
                onChange= { e => this.setValue("telefono",e.target.value)}
                />  
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control 
                type="text" 
                onChange= { e => this.setValue("mail",e.target.value)}
                />  
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label> Dirección</Form.Label>
                <Form.Control 
                type="text" 
                onChange= { e => this.setValue("direccion",e.target.value)}
                />  
            </Form.Group>
 
            <Button 
            variant="primary" 
            onClick = { () => 
                this.guardarEmpleado()                
            }            
            >
                Crear usuario
            </Button>
            </Form>


            </Row>
            </Container>

         );
    }
}
 
