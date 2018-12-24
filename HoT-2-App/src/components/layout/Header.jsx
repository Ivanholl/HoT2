import React from 'react';
import {Navbar , Nav, NavItem} from 'react-bootstrap';
import LoginModal from '../login/LoginModal.jsx';

class Header extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            openLogin: false
        }
    }
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Heroes Of Trebichenburg</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem>
                            Link
                        </NavItem>
                        <NavItem>
                            Link
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem>
                            Link Right
                        </NavItem>
                        <NavItem onClick={() => this.setState({openLogin: !this.state.openLogin})}>
                            Login
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
                <LoginModal showModal={this.state.openLogin}/>
            </ Navbar>
        )
    }
}

export default Header;
