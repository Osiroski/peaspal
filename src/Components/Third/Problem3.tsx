/* eslint-disable no-useless-escape */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Spinner, Image } from 'react-bootstrap';
import './prob3.css';
import React, { ChangeEvent } from 'react';
import axios from 'axios';
import ProductTable from './Table';
import image from '../../images/puppet.png';
import image2 from '../../images/download.png'
import './prism.css';
import Prism from "prismjs";
interface IState {
  Url: string;
  Data: {
    id: number
    word: string,
    count: number,
    isEnglish: string
  }[];
  isLoading: boolean;

}

const initialState: IState = {
  Url: '',
  Data: [],
  isLoading: false
}
const Problem3 = () => {
  const [{ Url, Data, isLoading }, setState] = React.useState(initialState);
  const clearState = () => {
    setState({ ...initialState })
  }
  const setisLoading = (value: boolean) => {
    setState(prevState => ({ ...prevState, isLoading: value }))
  }
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setState(prevState => ({ ...prevState, Url: value }));
  }

  const getUrl = (url: string) => {
    setisLoading(true);
    axios.post('/scrap', { url: url }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        if (response.status === 200) {
          setState(prevState => ({ ...prevState, Data: response.data.text }))
        }
        else {
          clearState();
        }
        setState(prevState => ({ ...prevState, isLoading: false }))
      })
      .catch((error: any) => {
        clearState();
        window.alert("Error : Cannot scrap website")
      })
  }
  React.useEffect(() => {
    if (isLoading) {
      getUrl(Url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading, Url]);
  React.useEffect(() => {
    // Update the document title using the browser API
    Prism.highlightAll();
  });
  return (
    <section id="faq" className="faq">
      <div className="container aos-init aos-animate" data-aos="fade-up">

        <div className="section-title">
          <h2>Dictionary WebScrapping</h2>
          <p>A scrapping tool that grabs the text of a site and enters the word count.</p>
        </div>
        <div className='row  mt-2 mb-3'>
          <div className="col-8 form-group " style={{ marginLeft: 'auto', width: '50%' }}>
            <input type="text" className="form-control ml-auto mr-auto"
              name="subject" id="subject" placeholder="Enter Url"
              required value={Url}
              onChange={handleChange} />
          </div>
          <div className='col-4'>
            <Button
              variant="dark"
              disabled={isLoading}
              onClick={!isLoading ? () => setisLoading(true) : () => null}
            ><i className="bi bi-lightbulb"></i> {isLoading ? 'Loading…' : 'Get Text'}</Button>
          </div>
        </div>
        <div className="faq-list">
          <ul>
            <li data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">
                {
                  isLoading ? `Displaying resutls for ${Url} ...` : 'Found Words( Click to see)'
                }
                <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                {
                  (Data.length > 1) ? <ProductTable newData={Data} /> : ''
                }
                {
                  isLoading ? <Spinner variant='warning' animation={'border'} /> : ''
                }
              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="200" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Web Scrapping using Puppeteer <i className="bx bx-chevron-down icon-show"></i>
                <i className="bx bx-chevron-up icon-close"></i>
              </a>
              <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                <div className='row'>
                  <div className='col-6'>
                    <Image fluid src={image} />
                  </div>
                  <div className='col-6'>
                    <p>Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol. Puppeteer runs headless by default, but can be configured to run full (non-headless) Chrome or Chromium.</p>
                    <pre>
                      <code className="language-javascript">
                        {`import puppeteer from 'puppeteer';
(async ()=>{
  const browser= await puppeteer.launch({
    headless: true
  });
  const page= (await browser.pages())[0];
  await page.goto(req.body.url);
  const extractedText = await page.$eval('*',(el)=>{
    const selection= window.getSelection();
    const range= document.createRange();
    range.selectNode(el);
    selection?.removeAllRanges();
    selection?.addRange(range);
    return window.getSelection()?.toString();
    
  }) as string`}
                      </code>
                    </pre>
                  </div>
                </div>


              </div>
            </li>

            <li data-aos="fade-up" data-aos-delay="300" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Scrapping Code <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                <div className='row'>
                  <div className='col-6'>
                    <p>In <code>server/index.ts</code> I use the async function to start a browser and pass the url for navigation.,then select all text (Ctrl A) and return string</p>
                    <pre>
                      <code className="language-javascript">
                        {`
(async ()=>{
  //launch headless browser
  const browser= await puppeteer.launch({
    headless: true
  });
  const page= (await browser.pages())[0];
  //go to url
  await page.goto(req.body.url);
  //select and grab all text, equivalent to pressing Ctrl + !A on keyboard
  const extractedText = await page.$eval('*',(el)=>{
    const selection= window.getSelection();
    const range= document.createRange();
    range.selectNode(el);
    selection?.removeAllRanges();
    selection?.addRange(range);
    return window.getSelection()?.toString();
  })
  //Return the transformed response
  res.status(200).json({
    text: getText(extractedText)
  })`}
                      </code>
                    </pre>
                  </div>
                  <div className='col-6'>
                    <p>In <code>server/scrap.ts</code> the function <code>getText</code> uses the 'is-word' to check each word after digits and punctuation marks have been stripped off. </p>
                    <pre>
                      <code className="language-javascript">
                        {`
(async ()=>{
  const englishWords = isWord('british-english');

//services
const calcWordFreq=(s:string)=> {
    // Normalize
    s = s.toLowerCase();
    // Strip quotes and brackets
    s = s.replace(/["“”[{}\])]|\B['‘]([^'’]+)['’]/g, '$1');
    // Strip dashes and ellipses
    s = s.replace(/[‒–—―…]|--|\.\.\./g, ' ');
    // Strip punctuation marks
    s = s.replace(/[!?;:.,&-]\B/g, '');
    //Strip digits
    s=s.replace(/\d+/g, '');
    return s.match(/\S+/g)!.reduce((oFreq:any, sWord:any)=>{
        if (oFreq.hasOwnProperty(sWord)) ++oFreq[sWord];
        else oFreq[sWord] = 1;
        return oFreq;
      },{});
  }
  `}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </li>
            <li data-aos="fade-up" data-aos-delay="400" className="aos-init aos-animate">
              <i className="bx bx-help-circle icon-help"></i>
              <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Why it takes a long time<i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
              <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                <div className='row'>
                  <div className='col-6'>
                    <Image fluid src={image2} />
                  </div>
                  <div className='col-6'>
                    <p className='lead'>Each word is checked against a regex to determine whether it is english or not. So generally the more 'wordy' a page is the more time it takes to parse the text </p>
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

export default Problem3
