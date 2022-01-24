/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Spinner, Image, ButtonGroup, ToggleButton } from 'react-bootstrap';
import './prob3.css';
import React, { ChangeEvent } from 'react';
import axios from 'axios';
import image from '../../images/puppet.png';
import image2 from '../../images/download.png'
import './prism.css';
import Prism from "prismjs";
interface IState {
    text: string;
    isLoading: boolean;
    Data:string

}
const initialState: IState = {
    text: '',
    Data:'',
    isLoading: false
}
const Problem4 = () => {
    const [{ text,Data, isLoading }, setState] = React.useState(initialState);
    
    const [radioValue, setRadioValue] = React.useState('language-html');

    const radios = [
        { name: 'HTML', value: 'language-html' },
        { name: 'CSS', value: 'language-css' },
        { name: 'Javascript', value: 'language-javascript' },
        { name: 'Python', value: 'language-python' },
    ];
    const setisLoading = (value: boolean) => {
        setState(prevState => ({ ...prevState, isLoading: value }))
    }
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = event.target;
        setState(prevState => ({ ...prevState, text: value }));
    }
    React.useEffect(() => {
        if (isLoading) {
            setState(prevState => ({ ...prevState, Data: text }));
            setisLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, text]);
    React.useEffect(() => {
        // Update the document title using the browser API
        Prism.highlightAll();
    });
    return (
        <section id="faq" className="faq">
            <div className="container aos-init aos-animate" data-aos="fade-up">

                <div className="section-title">
                    <h2>Mark Down Engine</h2>
                    <p>An application that takes in Markdown and outputs HTML, LaTeX, or any other standard document format based on the input.</p>
                    <p>Most fo the code snippets have been generated by this arkdown engine</p>

                </div>
                <div className='row  mt-2 mb-3'>
                    <div className="col-12 form-group " style={{ width: '100%' }}>
                        <textarea className="form-control ml-auto mr-auto"
                            name="subject" id="subject" placeholder="Enter Text"
                            required value={text}
                            onChange={handleChange} />
                    </div>

                </div>
                <div className='row  mt-2 mb-3' style={{alignItems:'end'}}>
                    <div className='col-8'>
                       <p className='lead'>Select the mark-up to generate</p> 
                        <ButtonGroup>
                            {radios.map((radio, idx) => (
                                <ToggleButton key={idx}
                                    id={`radio-${idx}`} type="radio"
                                    variant={idx % 2 ? 'outline-dark' : 'outline-warning'}
                                    name="radio" value={radio.value}
                                    checked={radioValue === radio.value}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                >
                                    {radio.name}
                                </ToggleButton>
                            ))}
                        </ButtonGroup>
                    </div>
                    <div className='col-4'>
                        <Button
                            variant="dark"
                            disabled={isLoading}
                            onClick={!isLoading ? () => setisLoading(true) : () => null}
                        ><i className="bi bi-lightbulb"></i> {isLoading ? 'Loading…' : 'Get Markdown'}</Button>
                    </div>
                </div>
                <div className="faq-list">
                    <ul>
                        <li data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
                            <i className="bx bx-help-circle icon-help"></i>
                            <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">
                                {
                                    isLoading ? `Displaying resutls for ${text} ...` : 'Found Words( Click to see)'
                                }
                                <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-chevron-up icon-close"></i></a>
                            <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                <pre>
                                    <code className={radioValue}>
                                        {`${Data}`}
                                    </code>
                                </pre>
                                {
                                    isLoading ? <Spinner variant='warning' animation={'border'} /> : ''
                                }
                            </div>
                        </li>

                        <li data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
                            <i className="bx bx-help-circle icon-help"></i>
                            <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">MarkDown Generator using Prismjs <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-chevron-up icon-close"></i>
                            </a>
                            <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                <div className='row'>
                                    <div className='col-6'>
                                        <Image fluid src={image} />
                                    </div>
                                    <div className='col-6'>
                                        <p>Prism is a lightweight, extensible syntax highlighter, built with modern web standards in mind. It’s used in millions of websites, including some of those you visit daily.</p>
                                        <pre>
                                            <code className="language-javascript">
                                                {`const radios = [
        { name: 'HTML', value: 'language-html' },
        { name: 'CSS', value: 'language-css' },
        { name: 'Javascript', value: 'language-javascript' },
        { name: 'Python', value: 'language-python' },
    ];
    //response from server is dynamically set
    <pre>
        <code className={radioValue}>
            {'{Data}'}
        </code>
    </pre>`}
                                            </code>
                                        </pre>
                                    </div>
                                </div>


                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}

export default Problem4
