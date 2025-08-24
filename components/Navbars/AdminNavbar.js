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

import { Link } from "react-router-dom";
// Importing components from reactstrap
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media
} from "reactstrap";

// AdminNavbar Component
// ----------------------
// This component creates the main navigation bar for the admin panel.
// Features include:
//   - A dynamic brand title passed via props
//   - A search bar visible on medium+ screen sizes
//   - A user dropdown with profile, settings, activity, support, and logout options
//
// Notes:
//   - The user name ("Divyansh Kumar") is currently hardcoded but can be replaced with dynamic user data.
//   - The logout link is a placeholder and currently prevents default behavior.
const AdminNavbar = (props) => {
  return (
    <>
      <Navbar classN
