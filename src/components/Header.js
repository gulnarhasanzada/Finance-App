import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => (
    <div>
        <div>
            <h3>Departments</h3>
        </div>
        <div>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home | </NavLink>
            <NavLink to="/add" activeClassName="is-active">Add  |  </NavLink>
            <NavLink to="/table" activeClassName="is-active">Table  |  </NavLink>
            <NavLink to="/settings" activeClassName="is-active">Settings  | </NavLink>
        </div>
        
    </div>
);

export default Header;