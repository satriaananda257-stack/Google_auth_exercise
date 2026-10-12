import {  clerkMiddleware } from '@clerk/express';
import express, { Request, Response } from 'express';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

app.use(clerkMiddleware());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World - Google auth');
});

app.get('/google-auth', async (req: Request, res: Response) => {

    return res.status(200).json({
        success: true,
        message: "Google-Auth successfully"

    });
});

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});