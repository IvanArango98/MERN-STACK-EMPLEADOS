import React from 'react';
import { Row, Col } from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,{PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { request } from '../helpers/helpers'
import Loading from '../loading/loading'

const { SearchBar } = Search;

export default class DataGrid  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            rows: [],
            loading:false
        }
    }
    componentDidMount()
    {
        this.getData()
    }
    getData()
    {
        this.setState({loading:true});
        request.get(this.props.url).then( response => {
            this.setState({rows: response.data })
            this.setState({loading:false});
        }).catch(err => {
            console.error(err)
            this.setState({loading:false});
        })
    }
    render() { 

        const options = {
            custom: true,
            totalSize: this.state.rows.lenght
        };

        return (  
            <>
             <Loading
                show = {this.state.loading}
                />

<ToolkitProvider
            keyField="tp"
            data={this.state.rows}
            columns={this.props.columns}
            search
            >
                {
                    props => 
                 (
                    <>                                                                    
                        <PaginationProvider 
                            pagination={ paginationFactory(options) }
                    >
                        {
                        ({
                            paginationProps,
                            paginationTableProps
                        }) => (
                                <>    
                                <Row style={{width: "100%"}}   >
                                    <Col> 
                                    <SizePerPageDropdownStandalone
                                { ...paginationProps}                              
                                />
                                    </Col>
                                    <Col> 
                                    <SearchBar { ...props.searchProps}    /> 
                                    </Col>
                                </Row>
                                                                   
                                <BootstrapTable
                                keyField="bt"
                                data={this.state.rows}
                                columns= { this.props.columns }
                                { ...paginationTableProps}    
                                { ...props.baseProps}                                                        
                                />                                                  
                                <PaginationListStandalone
                                { ...paginationProps}
                                />
                        </>
                         )
                        }                    
                    </PaginationProvider>                      
                    </>
    )
                }
                
            </ToolkitProvider>

            </>
        
        );
    }
}
 
