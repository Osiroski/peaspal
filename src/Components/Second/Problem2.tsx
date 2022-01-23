import image from '../../images/client.png';
import './prob2.css';
import { Container, Row, Image } from 'react-bootstrap';
import React from 'react';
import Explainer from './Explainer';
import { Checkpoints } from './Data';

const Problem2 = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState('');
    const setModalData = (title: string) => {
        setModalShow(true);
        setModalTitle(title);
    }
    return (
        <section id="features" className="features section-bg">
            <Container className="aos-init aos-animate" data-aos="fade-up">
                <div className="section-title">
                    <h2>Re-routing/forwarding communication.</h2>
                    <p>To design a client/server pair of applications that can forward communication. The communication must be secured end-to-end using asymmetric key cryptography.</p>
                    <p>This web app you are using right now is based on this concept.The client frontend (React) on <code>tcp port: 3000 </code>communicates to the backend on <code>tcp port: 5000</code></p>
                    <h5 className='text-info pt-2'>Click on title to see code</h5>
                </div>

                <Row>
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column align-items-lg-center">
                        {
                            Checkpoints.map((checkpoint) => (
                                <div key={checkpoint.href} id={checkpoint.href} className="icon-box mt-5  aos-init aos-animate" data-aos="fade-up" data-aos-delay={checkpoint.delay}>
                                    <i className={checkpoint.icon}></i>
                                    <h4><a href={`#${checkpoint.href}`} onClick={() => setModalData(checkpoint.Modaltitle)}>{checkpoint.title}</a></h4>
                                    <p>{checkpoint.summary}</p>
                                </div>
                            ))
                        }

                    </div>
                    <div className="image col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                        <Image fluid src={image} alt="" height='200px' />
                    </div>
                </Row>
                <Explainer
                    title={modalTitle}
                    show={modalShow}
                    hide={() => setModalShow(false)} />

            </Container>
        </section>
    )
}

export default Problem2
