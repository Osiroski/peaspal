/* eslint-disable jsx-a11y/anchor-is-valid */

import './prob1.css';
import { Checkpoints } from './Data';
import React from 'react';
import Explainer from '../Modal/Explainer';

const Problem1 = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [modalTitle, setModalTitle] = React.useState('');
    const setModalData=(title:string)=>{
        setModalShow(true);
        setModalTitle(title);
    }
    return (
        <section id="services" className="services section-bg">
            <div className="container aos-init aos-animate" data-aos="fade-up">

                <div className="section-title">
                    <h2>Implementing A secure WebServer</h2>
                    <p>Design a basic HTTP web-server application which can listen on a configurable TCP port and serve both static HTML and dynamically generated HTML . It is acceptable for this server application to support only a restricted subset of HTTP, such as GET or POST requests Content-Type and Content-Length.</p>
                </div>

                <div className='text-center'>
                    <h2 >Checklist</h2>
                    <h5 className='text-info mb-2'>Click on title to see code</h5>
                </div>

                <div className="row gy-4">
                    <div id='1' className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box iconbox-blue">
                            <div className="icon">
                                <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke="none" strokeWidth="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                                </svg>
                                <i className="bi bi-server"></i>
                            </div>
                            <h4><a href="#1" onClick={() => setModalData("ExpressJs")}>ExpressJs</a></h4>
                            <p>Using NodeJs and express libary,I made a <code>src/server</code> directory with an index.ts file that will contain your Express server.<br />
                                This is our basic server that is responsible for serving all content including this frontend app.</p>
                        </div>
                    </div>
                    {
                        Checkpoints.map((checkpoint) => (
                            <div id={checkpoint.id} key={checkpoint.id} className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay={checkpoint.delay}>
                                <div className={checkpoint.iconBox}>
                                    <div className="icon">
                                        <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke="none" strokeWidth="0" fill="#f5f5f5" d={checkpoint.path}></path>
                                        </svg>
                                        <i className={checkpoint.icon}></i>
                                    </div>
                                    <h4><a href={`#${checkpoint.id}`} onClick={() => setModalData(checkpoint.title)}>{checkpoint.title}</a></h4>
                                    <p>{checkpoint.summary}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Explainer
                    title={modalTitle}
                    show={modalShow}
                    hide={() => setModalShow(false)} />
            </div>
        </section>
    )
}

export default Problem1
