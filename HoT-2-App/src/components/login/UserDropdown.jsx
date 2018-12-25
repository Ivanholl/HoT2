import React from 'react';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

const UserDropdown = (props) => (
    <ButtonToolbar>
        <DropdownButton title={props.user.email} id="account-dropdown">
            <MenuItem>Action</MenuItem>
            <MenuItem>Another action</MenuItem>
            <MenuItem>Something else here</MenuItem>
            <MenuItem divider={true}/>
            <MenuItem onClick={() => props.onLogout()}>Log out!</MenuItem>
        </DropdownButton>
    </ButtonToolbar>
)

export default UserDropdown;
