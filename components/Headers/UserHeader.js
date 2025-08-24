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

// Importing components from reactstrap for layout and buttons
import { Button, Container, Row, Col } from "reactstrap";

// UserHeader Component
// --------------------
// This component creates the profile page header section.
// Features included:
//   - A background cover image with gradient overlay
//   - A welcome message with the user's name
//   - A short description or status message
//   - An "Edit Profile" button (currently disabled with preventDefault)
//
// You can customize this further by:
//   - Dynamically rendering the username instead of hardcoding it
//   - Linking the button to a profile editing form/page
//   - Changing the background image for different users
const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Gradient overlay for better text readability */}
        <span className="mask bg-gradient-default opacity-8" />
        
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              {/* User greeting */}
              <h1 className="display-2 text-white">Hello Jesse</h1>

              {/* Description / instructions */}
              <p className="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks.
              </p>

              {/* Edit profile button */}
              <Button
                color="info"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                Edit profile
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

// Exporting UserHeader so it can be reused on profile-related pages
export default UserHeader;
