import { Container, Col, Form } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import BackOfficeNav from "./BackOfficeNav";

const ActivateRegistration = ({ tournament }) => {
  return (
    <Container fluid>
      <Col lg={2}>
        <BackOfficeNav data={tournament} />
      </Col>
      <Col lg={10}>
        <h3 className="d-flex mb-5">Registration Settings</h3>

        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Acivation">
            {/* <Sonnet /> */}
            <span>Enable Registration?</span>
            <div>
              <Form>
                <div className="mb-3">
                  <Form.Check type="radio" label="Yes" />

                  <Form.Check type="radio" label="No" />
                </div>
              </Form>
            </div>
          </Tab>
          <Tab eventKey="profile" title="Options">
            {/* <Sonnet /> */}
          </Tab>
          <Tab eventKey="contact" title="Customization" disabled>
            {/* <Sonnet /> */}
          </Tab>
        </Tabs>
      </Col>
    </Container>
  );
};
export default ActivateRegistration;
