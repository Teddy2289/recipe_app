import React from "react";
import {Headers, NavbarLinks, Logo, Nav} from "../../styled/HeaderStyled/HeaderStyled";
import {Link} from "react-router-dom";
function Header() {
return(
    <Headers>
        <Logo>App</Logo>
        <Nav>
            <NavbarLinks>
                <Link to="#">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">Menu</Link>
                <Link to="#">Contact</Link>
            </NavbarLinks>
        </Nav>
    </Headers>
)
}

export default Header;
