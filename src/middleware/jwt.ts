import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
dotenv.config();

export function generateAccessToken(id: string) {
  const key = process.env.AUTH_SECRET as string;
  const token = jwt.sign(id, key, { expiresIn: "1d" });
  console.log(token);
}

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.token;
  if (!token) return res.status(401).send("Access Denied, no token Provided");
  try {
    const key = process.env.ACCESS_TOKEN as string;
    const decoded = jwt.verify(token, key);
    req.body = decoded;
    next();
  } catch (error) {
    res.status(400).send(error);
  }
}
