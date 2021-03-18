import React from 'react';
import {request} from '../../helpers/helpers'
import { Container, Row, Col} from 'react-bootstrap'
import '../../empleados/empleados.css'
import DataGrid from '../../grid/grid'
import ConfirmationPrompt from '../../prompts/confirmar'
import Loading from '../../loading/loading'
import MessagePrompt from '../../prompts/message'
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';


const columns = [{
  dataField: '_id',
  text: 'ID',
  hidden: true
}, {
  dataField: 'nombre',
  text: 'Nombre'
}, {
  dataField: 'apellido_p',
  text: 'Apellido paterno'
}
, {
    dataField: 'apellido_m',
    text: 'Apellido materno'
  }
  , {
    dataField: 'telefono',
    text: 'Télefono'
  }
  , {
    dataField: 'mail',
    text: 'Correo electronico'
  }
  , {
    dataField: 'direccion',
    text: 'Dirección'
  }
];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
          confirmation: {
            titulo:"Eliminar Empleado",
            texto:"¿Deseas eliminar el empleado?",
            show:false               
        },
        idEmpleado: null,
        loading: false,
        message: {
          text:"",
          show:false
      }

        }

        this.onClickEditButton = this.onClickEditButton.bind(this)
        this.onClickDeleteButton = this.onClickDeleteButton.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onConfirm = this.onConfirm.bind(this)
        
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
        },  this.eliminarEmpleado());   
    }
        onClickEditButton(row)
        {
          console.log(row)
          this.props.setIdEmpleado(row._id)
          this.props.changeTab("editar")
        }
        onClickDeleteButton(row)
        {
          this.setState({
            idEmpleado: row._id,
            confirmation: {
              ...this.state.confirmation,
              show: true
            }
          });
        }

        eliminarEmpleado()
        {
          this.setState({loading: true})
          request.delete(`/empleados/${this.state.idEmpleado}`).then( Response => {
            this.setState({
              message: {
                text: Response.data.msg,
                show: true
              },
              loading: false              
            })            

            if( Response.data.exito )
              {
                  this.realoadPage()
              }

          }).catch( err => {
            console.error(err)
            this.setState({loading: false})
          })
        }

        realoadPage()
        {
          setTimeout( () => {
            window.location.reload()
          }, 2500 );
        }

    render() { 

    
        return (  

            <Container id="empleados-buscar-container">
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
              <MessagePrompt
                    text= {this.state.message.text}
                    show= {this.state.message.show}
                    duration={2500}
                    onExited= {this.onExitedMessage}
                /> 
            <Row>
                <h1>Buscar empleado</h1>
            </Row>        
            
            <Row>           
            <DataGrid
                url="/empleados"
                columns={columns}
                showEditButton= {true}
                showDeleteButton= {true}
                onClickEditButton={this.onClickEditButton}
                onClickDeleteButton={this.onClickDeleteButton}
            />
            </Row>

            </Container>


        );
    }
}
 

