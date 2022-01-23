
export const EncryptApp = () => {

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


export const SecureComm = () => {

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

export const ServerApp = () => {

  return (
    <div>
      <code>server/index.ts</code>
    <pre>
      <code className="language-javascript">
        {`{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "build": "npx tsc --project ./",
    "start:prod": "tsc & node .",
    "start:dev": "tsc  & nodemon .",
    "tsc": "tsc",
    "postinstall": "npm run tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
   
  },
  "devDependencies": {
    
  }
}
`}
      </code>
    </pre>
    </div>
  )
}

export const ClientApp = () => {

  return (
    <div>
      <code onClick={()=>console.log('Express')}>client/package.json</code>
    <pre>
      <code className="language-javascript">
        {`{
  "name": "client",
  "version": "0.1.0",
  "proxy": "http://localhost:5000",
  "private": true,
  "dependencies": {
    
    "aos": "^2.3.4",
    "axios": "^0.25.0",
    "bootstrap": "^5.1.3",
    "prismjs": "^1.26.0",
    "react": "^17.0.2",
    "react-bootstrap": "^2.1.1",
    "react-dom": "^17.0.2",
    "react-scripts": "5.0.0",
    "typescript": "^4.5.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      
    ]
  },
  "devDependencies": {
    "@types/aos": "^3.0.4",
    "@types/prismjs": "^1.16.6"
  }
}`}
      </code>
    </pre>
    </div>
  )
}


