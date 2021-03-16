import React from 'react';
import {request} from '../helpers/helpers'
import { Container, Row } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,{PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import './empleados.css'

const products = [
    {
        id: 1,
        name: "producto 1",
        price: 1000
    },
    {
        id: 2,
        name: "producto 2",
        price: 1000
    },
    {
        id: 3,
        name: "producto 3",
        price: 1000
    },
    {
        id: 4,
        name:"producto 4",
        price: 1000
    },
    {
        id: 5,
        name: "producto 5",
        price: 1000
    },
    {
        id: 6,
        name: "producto 6",
        price: 1000
    },
    {
        id: 1,
        name: "producto 1",
        price: 1000
    },
    {
        id: 2,
        name: "producto 2",
        price: 1000
    },
    {
        id: 3,
        name: "producto 3",
        price: 1000
    },
    {
        id: 4,
        name:"producto 4",
        price: 1000
    },
    {
        id: 5,
        name: "producto 5",
        price: 1000
    },
    {
        id: 6,
        name: "producto 6",
        price: 1000
    },

];
const columns = [{
  dataField: 'id',
  text: 'Product ID'
}, {
  dataField: 'name',
  text: 'Product Name'
}, {
  dataField: 'price',
  text: 'Product Price'
}];

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

        componentDidMount(){
            request.get("/empleados").then( response => {
                console.log(response.data)
            }).catch(err => {
                console.error(err)
            })
        }

    render() { 

        const options = {
            custom: true,
            totalSize: products.lenght
        };
        return (  

            <Container id="empleados-buscar-container">
            <Row>
                <h1>Buscar empleado</h1>
            </Row>        
            <Row>
               
                <PaginationProvider pagination={ paginationFactory(options) }
                >
                    {
                      ({
                          paginationProps,
                          paginationTableProps
                      }) => (
                                <>  
                              <SizePerPageDropdownStandalone
                              { ...paginationProps}                              
                              />
                              <BootstrapTable
                              keyField="id"
                              data={products}
                              columns= { columns }
                              { ...paginationTableProps}                                                            
                              />                                                  
                               <PaginationListStandalone
                              { ...paginationProps}
                              />
                       </>
                      )
                    }                    
                </PaginationProvider>

                
            </Row>

            </Container>


        );
    }
}
 
 