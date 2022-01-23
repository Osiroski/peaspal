

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Required External Modules
 */
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const scrap_1 = require("./scrap");
const path_1 = __importDefault(require("path"));
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10);
const app = (0, express_1.default)();
/**
 *  App Configuration
 */
// get reference to the client build directory
const buildDir = path_1.default.join(__dirname + '..', '..', 'client', 'build');
app.use(express_1.default.static(buildDir));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)({
    methods: ['GET', 'POST']
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.get("/", function (req, res) {
    res.sendFile(path_1.default.join(buildDir + 'public', "index.html"));
});
// Handling POST request 
app.post("/scrap", (req, res) => {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        const browser = yield puppeteer_1.default.launch({
            headless: true
        });
        const page = (yield browser.pages())[0];
        yield page.goto(req.body.url);
        const extractedText = yield page.$eval('*', (el) => {
            var _a;
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNode(el);
            selection === null || selection === void 0 ? void 0 : selection.removeAllRanges();
            selection === null || selection === void 0 ? void 0 : selection.addRange(range);
            return (_a = window.getSelection()) === null || _a === void 0 ? void 0 : _a.toString();
        });
        res.status(200).json({
            text: (0, scrap_1.getText)(extractedText)
        });
        yield browser.close();
    }))()
        .catch((error) => {
        res.status(400);
    });
});
/**
 * Server Activation
 */
console.log("Checking Port...");
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
