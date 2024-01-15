import dotenv from 'dotenv';
import path from 'path';
import express from 'express';
import {prisma} from "./db/prisma.js";
import { fileURLToPath } from 'url';
import {routeHandler} from "./routes/routes.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3001;

dotenv.config();

app.use(express.static(path.join(__dirname, '../client/build')));

routeHandler(app);

// This serves the React app in production
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});