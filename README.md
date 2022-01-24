# Junior Developer Solutions


<p>
This project was bootstrapped with [Create React App] , Nodejs, ExpressJs and Typescript </br> 
<a href="https://pesapaldev.herokuapp.com/"><b>Live Demo App</b></a>
<h3>Tech stack</h3>
<p>
  <img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
  <img alt="Webpack" src="https://img.shields.io/badge/-Webpack-8DD6F9?style=flat-square&logo=webpack&logoColor=white" />
  <img alt="github actions" src="https://img.shields.io/badge/-Github_Actions-2088FF?style=flat-square&logo=github-actions&logoColor=white" />
  <img alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" />
  <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" />
  <img alt="git" src="https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white" /> 
  <img alt="npm" src="https://img.shields.io/badge/-NPM-CB3837?style=flat-square&logo=npm&logoColor=white" />
  <img alt="html5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img alt="Nodejs" src="https://img.shields.io/badge/-Nodejs-43853d?style=flat-square&logo=Node.js&logoColor=white" />
</p>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Available Scripts

In the project root directory, you can run:

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
cd client
npm install
```

```
cd server
npm install
```

### `npm start`

```javascript
npm start
```
Change server/package.json script from 
```javascript
'start':'ts-node index.ts
```
to
```javascript
'start':'nodemon index.ts
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Code Structure
The repo is a compound solution solving three problems:


### Secure WebServer
Express is the most popular Node.JS framework to handle multiple different HTTP requests at a specific URL.
<b>GET</b> method in Express to serve <b>STATIC Files</b> in the build folder compiled created after build
```javascript
// get reference to the client build directory
const buildDir =path.join(__dirname , '..','build')
app.use(express.static(buildDir));
app.get("/", function (req, res) {
  res.sendFile(path.join(buildDir,'index.html'));
  });
```
<b>POST</b> method in Express to access Markdown API calls 
```javascript
// Handling POST request 
app.post("/mark", (req, res) => {
    res.status(200).json({
      text: req.body.data
    }) 
})
```
<b>Configurable</b> TCP port. For Dvelopment case, port 5000 was used stored in as a environment variable in .env file
```javascript
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
.....
/**
 * Server Activation
 */
console.log("Checking Port...");
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
```
<b>Static and Dynamic</b> are both handled by Express 
<b>Secure HTTPS and SSL</b> are handled by the external vendor <img alt="Heroku" src="https://img.shields.io/badge/-Heroku-430098?style=flat-square&logo=heroku&logoColor=white" /> for free as a Quality Assurance feature. Evidenced by the 'https' url in the <a href="https://pesapaldev.herokuapp.com/"><b>Live Demo App</b></a>

### Forwarding/Rerouting Communication
client/server pair of applications that can forward communication. The communication must be secured end-to-end using asymmetric key cryptography.

This web app you are using right now is based on this concept.The client frontend (React) on tcp port: 3000 communicates to the backend on tcp port: 5000
![a building](https://www.google.com/url?sa=i&url=https%3A%2F%2Fdev.to%2Fsanamumtaz%2Fwebpack-dev-server-setting-up-proxy-59bk&psig=AOvVaw0oHpK7E1WtHr_8nbyY8shQ&ust=1643081663525000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCmx7O6yfUCFQAAAAAdAAAAABAD)


