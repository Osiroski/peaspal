/**
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
    console.log(`Listening on port ${PORT}`);
});