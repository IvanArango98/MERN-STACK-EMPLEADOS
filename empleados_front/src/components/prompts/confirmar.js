import React from 'react';
import { Modal, Button } from 'react-bootstrap'

export default class ConfirmationPrompt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            show: false,
            titulo: "",
            texto: ""
        }
    }

    componentWillReceiveProps(nextProps)
    {            
            this.setState({ 
                show: nextProps.show,
                titulo: nextProps.titulo,
                texto: nextProps.texto,
            });        
    }

    render() { 
        return (  
            <Modal
            show={this.state.show}
            centered
            onHide= {() => this.props.onCancel()}
            >
            <Modal.Header closeButton>
                <Modal.Title>{this.state.titulo}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            {this.state.texto}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"
                onClick={() => this.props.onCancel() }
                >Cancelar</Button>
                <Button variant="primary"
                onClick={() => this.props.onConfirm()}
                >Confirmar</Button>
            </Modal.Footer>
            </Modal>
        );
    }
}
 
