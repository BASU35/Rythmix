/*!

=========================================================
* Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)


* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Importing UI components from reactstrap
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

// Header Component
// ----------------
// This component is responsible for rendering the top section
// of the dashboard interface. It provides space for:
//   - Page titles
//   - Statistics cards
//   - Action buttons or summaries
//   - Gradient background styling for a modern look
//
// Currently, it only renders the container with the background
// and reserved space. You can extend it to include cards, charts,
// or quick-access information.
const Header = () => {
  return (
    <>
      {/* Header with gradient background and padding */}
      <div className="header bg-gradient-info pb-6 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Placeholder for statistics cards, titles, or actions */}
          </div>
        </Container>
      </div>
    </>
  );
};

// Exporting Header so it can be used across the application
export default Header;

