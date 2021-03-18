import React from 'react';
import {request} from '../../helpers/helpers'
import { Container, Row, Col} from 'react-bootstrap'
import '../../empleados/empleados.css'
import DataGrid from '../../grid/grid'

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
        this.state = {  }
    }

        componentDidMount(){          
        }

    render() { 

    
        return (  

            <Container id="empleados-buscar-container">
            <Row>
                <h1>Buscar empleado</h1>
            </Row>        
            
            <Row>           
            <DataGrid
                url="/empleados"
                columns={columns}
            />
            </Row>

            </Container>


        );
    }
}
 

