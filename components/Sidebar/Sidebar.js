/*!

=========================================================
* Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/

import { useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// Node.js library to validate prop types
import { PropTypes } from "prop-types";

// Importing UI components from reactstrap
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col
} from "reactstrap";

var ps;

// Sidebar Component
// -----------------
// This component is responsible for rendering the sidebar navigation.
// Features include:
//   - Collapsible navigation for smaller screens
//   - Dynamic active route highlighting
//   - Rendering navigation links based on a routes configuration array
//   - Support for both internal links (using react-router-dom) and external links
//
// Current state: Only structure and helper functions exist; the JSX output is empty.
const Sidebar = (props) => {
  const [collapseOpen, setCollapseOpen] = useState();

  // Checks if the given route is active based on the current pathname
  const activeRoute = (routeName) => {
    return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };

  // Toggles the sidebar collapse state
  const toggleCollapse = () => {
    setCollapseOpen((data) => !data);
  };

  // Closes the sidebar collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };

  // Generates navigation links from the routes prop
  const createLinks = (routes) => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  // Extracting props
  const { bgColor, routes, logo } = props;
  let navbarBrandProps;

  // Handling logo link logic
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link
    };
  } else if (logo && logo.outterLink) {
    navbarBrandProps = {
      href: logo.outterLink,
      target: "_blank"
    };
  }

  return (
    <>
      {/* Sidebar layout will be implemented here in future */}
    </>
  );
};

// Default props for Sidebar
Sidebar.defaultProps = {
  routes: [{}]
};

// Prop type validation for Sidebar
Sidebar.propTypes = {
  // Links that will be displayed in the sidebar
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for navigation within the app (<Link to="...">)
    innerLink: PropTypes.string,
    // outterLink is for navigation outside the app (<a href="...">)
    outterLink: PropTypes.string,
    // Logo image source
    imgSrc: PropTypes.string.isRequired,
    // Alternative text for the logo
    imgAlt: PropTypes.string.isRequired
  })
};

// Exporting Sidebar for use across the application
export default Sidebar;
