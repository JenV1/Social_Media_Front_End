import React from 'react';
import PropTypes from 'prop-types';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import './Footer.css';
  
  const Footer = () => {
    return (

      <footer id='Footer' >
      <MDBFooter className="font-small pt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className='footer-text'>FakeBook </h5>
              <p id = "footer-intro">
                Meet new and interesting friends nearby
              </p>
            </MDBCol>
            <MDBCol md="6" className='footer-text'>
              <h5 className="title">Team Members</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://github.com/JenV1">Jenna Vlahos</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://github.com/Ziqiongg">Ziqiong Li</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://github.com/katyagr">Katya Grenier </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://github.com/JStillman1">James Stillman </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://reactjs.org/"> React </a>
          </MDBContainer>
        </div>
      </MDBFooter>
      </footer>
    );
  }
  

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
