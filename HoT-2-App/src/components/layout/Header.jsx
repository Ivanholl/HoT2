import React from 'react';
import {Navbar , Nav, NavItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import LoginModal from '../login/LoginModal.jsx';
import UserDropdown from '../login/UserDropdown.jsx';
import authActions from '../../actions/auth.actions.js';
class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            openLogin: false,
            user: ""
        }

    }
    componentDidUpdate(prevProps) {
        if (this.props.auth !== prevProps.auth) {
            this.setState({user: this.props.auth})
            if (this.props.auth.email) {
                 this.setState({openLogin: false})
            }
        }
    }
    onLogout = () => {
        const { dispatch } = this.props;
        dispatch(authActions.logout())
    }
    render() {
        return (
            <Navbar inverse collapseOnSelect id="site-header">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Heroes Of Trebichenburg</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {this.state.user && this.state.user.email
                            ?
                            <UserDropdown user={this.state.user} onLogout={this.onLogout}/>
                            :
                            <NavItem onClick={() => this.setState({openLogin: !this.state.openLogin})}>
                                Login
                            </NavItem>
                        }
                    </Nav>
                </Navbar.Collapse>
                <LoginModal showModal={this.state.openLogin}/>
            </ Navbar>
        )
    }
}

export default connect(state => ({ auth: state.auth }))(Header);
