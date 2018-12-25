import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import LoginForm from './LoginForm.jsx';
import authActions from '../../actions/auth.actions.js'
// const Login = () => (

class LoginModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false
        };
        // debugger
    }
    componentDidUpdate(prevProps) {
        if (this.props.showModal !== prevProps.showModal) {
            this.setState({show:this.props.showModal})
        }
    }
    handleClose = () => {
        this.setState({ show: false });
    }

    handleShow = () => {
        this.setState({ show: true });
    }
    onLogin = (credentials) => {
        const { dispatch } = this.props;
        dispatch(authActions.login(credentials))
    }
    render () {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm onLogin={this.onLogin}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connect()(LoginModal);
