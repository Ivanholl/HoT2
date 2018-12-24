import React from 'react'
import {FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

const LoginForm = (props) => (
    <form>
        <FormGroup controlId="email">
            <ControlLabel>Email address</ControlLabel>
            <FormControl  type="email" placeholder="Enter email"/>
        </FormGroup>
        <FormGroup controlId="pass">
            <ControlLabel>Password</ControlLabel>
            <FormControl  type="password" placeholder="Enter password"/>
        </FormGroup>
        <Button onClick={() => props.onLogin({email:"test", pass:'pass'})}>Submit</Button>
    </form>
)

export default LoginForm;
