import './intro.css';
import image from '../../images/hero-img.png';
import { Container,Row,Image } from 'react-bootstrap';
const Introduction = () => {
    return (
        <section id="hero" className="d-flex align-items-center">

            <Container fluid className="aos-init aos-animate" data-aos="fade-up">
                <Row className="row justify-content-center">
                    <div className="col-xl-5 col-lg-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <h1>Application Solutions by Noel Osiro</h1>
                        <h2>Solutions to the exercise assesment for Junior Developer Role</h2>
                        <div><a href="#about" className="btn-get-started scrollto">Get Started</a></div>
                    </div>
                    <div className="col-xl-4 col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
                        <Image fluid src={image} className="animated" alt="" />
                    </div>
                </Row>
            </Container>
        </section>
    )
}

export default Introduction
