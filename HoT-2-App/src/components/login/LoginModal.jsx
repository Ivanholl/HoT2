import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';

import authActions from '../../actions/auth.actions.js';

class LoginModal extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            show: false,
            isLogin: true

        };
    }
    componentDidUpdate(prevProps) {
        if (this.props.showModal !== prevProps.showModal) {
            this.setState({show: this.props.showModal})
        }
    }

    handleClose = () => this.setState({ show: false })
    handleShow = () =>  this.setState({ show: true })

    onLogin = (credentials) => {
        if (credentials && credentials.email && credentials.pass) {
            const { dispatch } = this.props;
            dispatch(authActions.login(credentials))
        }
    }
    onRegister = (credentials) => {
        if (credentials && credentials.email && credentials.pass && credentials.repeatPass && (credentials.pass === credentials.repeatPass)) {
            const { dispatch } = this.props;
            dispatch(authActions.register(credentials))
        }
    }
    render () {
        return (
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.isLogin
                        ?
                        <LoginForm onLogin={this.onLogin}/>
                        :
                        <RegisterForm onRegister={this.onRegister}/>
                    }
                </Modal.Body>
                <Modal.Footer>
                    {this.state.isLogin
                        ?
                        <Button onClick={() => this.setState({isLogin:false})}>Go To Register</Button>
                        :
                        <Button onClick={() => this.setState({isLogin:true})}>Go To Login</Button>
                    }
                    <Button onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connect()(LoginModal);
