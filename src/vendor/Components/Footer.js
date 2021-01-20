import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, Button } from 'react-bootstrap';
import Info from './Info';

class Footer extends Component {
  render() {
    return (
      <div className="Footer container">
        <Grid className="Footer-Grid">
          <Row className="">
            <Col md={4} className="">
              <Row>
                <h3>Helpful Links</h3>
                <Col sm={6} xs={12}>
                  <ul>
                    <li>About us</li>
                    <li>Delivery and Return policy</li>
                    <li>Help & FAQ</li>
                    <li>Service for professionals</li>
                  </ul>
                </Col>
                <Col sm={6} xs={12}>
                  <ul>
                    <li>About us</li>
                    <li>Delivery and Return policy</li>
                    <li>Help & FAQ</li>
                    <li>Service for professionals</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="">
              <Row>
                <h3>Contact Info</h3>
                <Col sm={6} xs={12}>
                  <ul>
                    <li><h5>Oxford(UK)</h5></li>
                    <li>1-3 Abbey Street</li>
                    <li>Eynsham</li>
                    <li>Oxford</li>
                    <li>OX29 4TB</li>
                  </ul>
                </Col>
                <Col sm={6} xs={12}>
                  <ul>
                    <li><h5>Wlanut, CA(USA)</h5></li>
                    <li>340 S Lemon Ave #3358</li>
                    <li>Walnut</li>
                    <li>California 91789</li>
                    <li>USA</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md={4} className="Form-Col">
              <h4>Sign Up Now
              </h4>
              <FormGroup controlId="form1">
                <FormControl className="Form-Control" type="text" placeholder="Name" />
                <FormControl className="Form-Control" type="text" placeholder="Email" />
                <Button className="Form-Button" type="submit">Sign Up Now</Button>
              </FormGroup>
            </Col>
          </Row>
        </Grid>
        <Info />
      </div>
    );
  }
}

export default Footer;