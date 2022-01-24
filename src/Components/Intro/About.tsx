import { Container, Row, Image } from 'react-bootstrap';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import image from '../../images/about.jpg';
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000
    })
  }, [])
  return (
    <section id="about" className="about">
      <Container>
        <Row>
          <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
            <Image fluid src={image} alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content aos-init aos-animate" data-aos="fade-right">
            <h3>Interactive Documentation</h3>
            <p className="fst-italic">
              This web applicantion serves as both proof of concept and documentation of the solutions to the challanges. It showcases case example to deploy the applications in a practical setting.<br/>
              The main Challanges solved include:
            </p>
            <ul>
              <li><i className="bi bi-check-circle"></i>Implementing a Secure Webserver</li>
              <li><i className="bi bi-check-circle"></i>Re-routing/forwarding communication. </li>
              <li><i className="bi bi-check-circle"></i>Markdown Generator</li>
              
            </ul>
            <a href="https://github.com/Osiroski/peaspal" className="read-more"><i className="bi bi-github"></i>Source Code </a>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default About
