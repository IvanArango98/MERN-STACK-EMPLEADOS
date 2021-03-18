import React from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import { request } from '../../helpers/helpers'
import Loading from '../../loading/loading'
import MessagePrompt from '../../prompts/message'
import ConfirmationPrompt from '../../prompts/confirmar'

export default  class EmpleadosEditar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            idEmpleado: this.props.getIdEmpleado(),
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
            },
            confirmation: {
                titulo:"Modificar Empleado",
                texto:"¿Deseas modificar el empleado?",
                show:false               
            }
        }
        this.onExitedMessage = this.onExitedMessage.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
    }

    componentDidMount()
    {
        this.getIdEmpleado()
    }

    onCancel()
    {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false
            }
        })
    }
    onConfirm()
    {
        this.setState({
            confirmation: {
                ...this.state.confirmation,
                show: false
            }
        },  this.guardarEmpleado());   
    }
   
    getIdEmpleado()
    {
        this.setState({loading: true})
        request.get(`/empleados/${this.state.idEmpleado}`).then( response => {          
            this.setState({
                 empleado: response.data
                ,loading: false
            })
            console.log(response)
        }).catch(err => {
            console.error(err)
            this.setState({loading: false})
        })        
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
        request.put(`/empleados/${this.state.idEmpleado}`,this.state.empleado).then( response => 
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
   

    render() { 
        return ( 
            <Container id="empleados-crear-container">
                <MessagePrompt
                    text= {this.state.message.text}
                    show= {this.state.message.show}
                    duration={2500}
                    onExited= {this.onExitedMessage}
                />         

                <ConfirmationPrompt
                    show={this.state.confirmation.show}
                    titulo={this.state.confirmation.titulo}
                    texto={this.state.confirmation.texto}
                    onCancel={ this.onCancel }
                    onConfirm={ this.onConfirm }
                />
                
                <Loading
                show = {this.state.loading}
                />

            <Row>
                <h1>Editar empleado</h1>
            </Row> 
            <Row>
            <Form>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control                 
                value={this.state.empleado.nombre}
                onChange= { e => this.setValue("nombre",e.target.value)}
                />                
            </Form.Group>

            <Form.Group>
                <Form.Label>Apellido Paterno</Form.Label>
                <Form.Control                 
                 value={this.state.empleado.apellido_p}
                 onChange= { e => this.setValue("apellido_p",e.target.value)}
                 />  
            </Form.Group>

            <Form.Group>
                <Form.Label>Apellido Materno</Form.Label>
                <Form.Control                 
                value={this.state.empleado.apellido_m}
                onChange= { e => this.setValue("apellido_m",e.target.value)}
                />  
            </Form.Group>

            <Form.Group>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control                 
                value={this.state.empleado.telefono}
                onChange= { e => this.setValue("telefono",e.target.value)}
                />  
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control                 
                value={this.state.empleado.mail}
                onChange= { e => this.setValue("mail",e.target.value)}
                />  
            </Form.Group>

            <Form.Group>
                <Form.Label> Dirección</Form.Label>
                <Form.Control                
                value={this.state.empleado.direccion}
                onChange= { e => this.setValue("direccion",e.target.value)}
                />  
            </Form.Group>
 
            <Button 
            variant="primary" 
            onClick = { () => 
                this.setState({ confirmation: {
                    ...this.state.confirmation, show: true
                }})

                //this.guardarEmpleado()                
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
 
