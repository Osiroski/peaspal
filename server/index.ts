/**
 * Required External Modules
 */
import * as dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import puppeteer from 'puppeteer';
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
      text: extractedText
    })
    await browser.close();
  })()
  .catch((error:any)=>{
    res.status(400);
  }); 
  
})

app.get("/", function (req, res) {
  res.sendFile(path.join(buildDir,'index.html'));
  });



/**
 * Server Activation
 */
console.log("Checking Port...");
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});