





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
const buildDir =path.join(__dirname, '..//build')
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
// We use POST request to submit input as shown in the MarkDown Engine Example
// The backend process the code and return a highlighted syntax 
// Handling POST request 
app.post("/mark", (req, res) => {
    res.status(200).json({
      text: req.body.data
    }) 
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
import helmet from "helmet";
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
const buildDir =path.join(__dirname , '..','build')
app.use(express.static(buildDir));

app.use(helmet());

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
// Handling POST request 
app.post("/mark", (req, res) => {
    res.status(200).json({
      text: req.body.data
    }) 
})


app.get("/", function (req, res) {
  res.sendFile(path.join(buildDir,'index.html'));
  });



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
export const Secure = () => {

  return (
    <div>
      <a href="https://devcenter.heroku.com/articles/ssl">Heroku free SSL and Https Cert </a>
    <pre>
      <code className="language-javascript">
        {`Apps using paid dynos (Hobby, Standard-1X, Standard-2X, Performance-M, and Performance-L) can use the provided *.herokuapp.com certificate, Automated Certificate Management (ACM), or manually uploaded certificates.`}
      </code>
    </pre>
    </div>
  )
}


