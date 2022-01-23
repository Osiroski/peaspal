





export const dynamic = ` //We use switch case to generate dynamic content depending on link you clicked
switch(props.title){
  case 'ExpressJs':
    setcode(express);
    break;
  case "Configurable TCP port":
    setcode(tcp);
    break;
  case "Dynamic HTML":
    setcode(tcp);
    break;
  case "Static HTML":
    setcode(tcp);
    break;
  case "HTTP Requests":
    setcode(tcp);
    break;
  case "Secure Protocol":
    setcode(tcp);
    break;
}`
export const Dynamic = () => {

  return (
    <div>
      <code>src/client/Components/Modal/Code.tsx</code>
    <pre>
      <code className="language-javascript">
        {`//We use switch case to generate dynamic content depending on link you clicked
<div>
{
  {
    "ExpressJs":<ExpressJs/>,
    "Configurable TCP port":<Tcp/>,
    "Dynamic HTML":<Dynamic/>,
    "Static HTML":<Stat/>,
    "HTTP Requests":<Req/>
  }[props.title]
}
</div>`}
      </code>
    </pre>
    </div>
  )
}


export const Stat = () => {

  return (
    <div>
      <code>src/server/index.ts</code>
    <pre>
      <code className="language-javascript">
        {`//Serve static files 
// get reference to the client build directory
const buildDir =path.join(__dirname, '../../client/build')
const staticFiles = express.static(buildDir)

// pass the static files (react app) to the express app. 
app.use(staticFiles)
`}
      </code>
    </pre>
    </div>
  )
}


export const Req = () => {

  return (
    <div>
      <code>server/index.ts</code>
    <pre>
      <code className="language-javascript">
        {`//http GET request serves the index.html file
        app.get("/", function (req, res) {
          res.sendFile(path.join(buildDir+"index.html"));
          });
// Handling POST request 
app.post("/scrap", (req, res) => {
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
        
      }) as string
      res.status(200).json({
        text: getText(extractedText)
      })
      await browser.close();
    })()
    .catch((error:any)=>{
      res.status(400);
    }); 
    
  })`}
      </code>
    </pre>
    </div>
  )
}

export const Tcp = () => {

  return (
    <div>
      <code>server/index.ts</code>
    <pre>
      <code className="language-javascript">
        {`//Set the port to 5000 saved as ana environment variable(configurable)
//.env file
PORT=5000

//In server/index.ts we check if port number is availble and parsed as ana integer.

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);
/**
 * Server Activation
 */
console.log("Checking Port...");
app.listen(PORT, () => {
    console.log('Listening on port {PORT}');
});`}
      </code>
    </pre>
    </div>
  )
}

export const ExpressJs = () => {

  return (
    <div>
      <code onClick={()=>console.log('Express')}>server/index.ts</code>
    <pre>
      <code className="language-javascript">
        {`/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import puppeteer from 'puppeteer';
import cors from "cors";
import helmet from "helmet";
import { getText } from "./scrap";
import path from "path";

dotenv.config();

/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */
// get reference to the client build directory
const buildDir =path.join(__dirname, '../../client/build')
const staticFiles = express.static(buildDir)
// pass the static files (react app) to the express app. 
app.use(staticFiles)

app.use(helmet());
app.use(cors({
    methods:['GET','POST']
}));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", function (req, res) {
  res.sendFile(path.join(buildDir+"index.html"));
  });

// Handling POST request 
app.post("/scrap", (req, res) => {
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
        
      }) as string
      res.status(200).json({
        text: getText(extractedText)
      })
      await browser.close();
    })()
    .catch((error:any)=>{
      res.status(400);
    }); 
    
  })

/**
 * Server Activation
 */
console.log("Checking Port...");
app.listen(PORT, () => {
    console.log('Listening on port {PORT}');
});`}
      </code>
    </pre>
    </div>
  )
}


