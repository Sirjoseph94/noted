import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response, NextFunction } from "express";
import prisma from "../prisma";

dotenv.config();
const key = process.env.AUTH_SECRET as string;
export function generateAccessToken(id: string) {
  const key = process.env.AUTH_SECRET as string;
  const token = jwt.sign({ user_id: id }, key, {
    expiresIn: "24h",
  });
  return token;
}

export async function auth(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  if (!authorization)
    return res.status(401).send("Access Denied, no token Provided");
  try {
    const token = authorization.slice(7, authorization.length);
    const decoded = jwt.verify(token, key);
    if (!decoded) {
      res.status(401).send("Unauthorized");
    }
    const { user_id } = decoded as { [key: string]: number };

    const user = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });

    if (!user) {
      res.status(401).send("not verified");
    }
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).send(error);
  }
}
