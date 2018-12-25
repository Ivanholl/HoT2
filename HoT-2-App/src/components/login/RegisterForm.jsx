import React from 'react'
import { connect } from 'react-redux';
import {FormGroup, ControlLabel, FormControl, Button, Alert} from 'react-bootstrap';

class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            repeatPass: ''
        }
    }

    render() {
        return(
            <form>
                <FormGroup controlId="email">
                    <ControlLabel>Email address</ControlLabel>
                    <FormControl  type="email" placeholder="Enter email" onChange={e => this.setState({email: e.target.value})}/>
                </FormGroup>
                <FormGroup controlId="pass">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl  type="password" placeholder="Enter password" onChange={e => this.setState({pass: e.target.value})}/>
                </FormGroup>
                <FormGroup controlId="pass">
                    <ControlLabel>Repeat Password</ControlLabel>
                    <FormControl  type="password" placeholder="Enter password" onChange={e => this.setState({repeatPass: e.target.value})}/>
                </FormGroup>
                {this.props.auth.error &&
                    <Alert bsStyle="danger"><strong>Error: </strong>{this.props.auth.error}</Alert>
                }
                <Button onClick={() => this.props.onRegister({email: this.state.email, pass:this.state.pass, repeatPass:this.state.pass})}>Submit</Button>
            </form>
        )
    }
}

export default connect(state => ({ auth: state.auth }))(RegisterForm);
