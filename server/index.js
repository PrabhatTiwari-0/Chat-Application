import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors"
import helmet from "helmet";
import morgan from "morgan";
import dotenv from 'dotenv';
import  OpenAI  from 'openai';




/*Configuration*/
dotenv.config();
const app= express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));
app.use(cors());
import OpenAiRoutes from "./routes/openai.js";


/*OPEN AI CONFIGURATION*/
export const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY // This is the default and can be omitted
});

/*routes*/
app.use('/openai',OpenAiRoutes);

/*SERVER SETUP*/
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Example app is running at port http://localhost:${PORT}`);
})
