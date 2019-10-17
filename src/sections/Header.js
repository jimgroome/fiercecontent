import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar color="light" light expand="md" fixed="top">
      <NavbarBrand href="/">
        <img
          src={process.env.PUBLIC_URL + "/fierce-content-logo-square.png"}
          alt="Fierce Content"
          className="site-logo mr-4"
        />
        Fierce Content
      </NavbarBrand>
      <Nav className="ml-auto header-links" navbar>
        <NavItem>
          <NavLink href="mailto:chelsea@fierce-content.com">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://uk.linkedin.com/company/fierce-content">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://twitter.com/fierce_content">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;
