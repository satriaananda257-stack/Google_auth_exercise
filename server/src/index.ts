import express, { Request, Response } from "express";
import { clerkMiddleware, getAuth } from "@clerk/express";
import { createClerkClient } from "@clerk/backend";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 5000;

const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
});

app.use(clerkMiddleware());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World - Google auth");
});

app.get("/google-auth", async (req: Request, res: Response) => {
  const { userId } = getAuth(req);

  if (!userId) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const user = await clerk.users.getUser(userId);

  return res.status(200).json({
    success: true,
    message: "Google-Auth successfully",
    user: user,
  });
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
