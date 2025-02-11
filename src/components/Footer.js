import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} className="text-center">
            <div className="social-icons-container">
              <a href="https://www.linkedin.com/in/zainab-mirza99" className="social-circle">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://en-gb.facebook.com/zainab.mirza99" className="social-circle">
                <img src={navIcon2} alt="Twitter" />
              </a>
              <a href="https://www.instagram.com/zaiinab.miirza" className="social-circle">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
