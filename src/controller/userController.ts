import { Request, Response, NextFunction } from "express";

export const createUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json("User registration Route");
};

export const getSingleUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Get single User Route");
};
export const updateUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("update User Route");
};
export const deleteUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Delete User Route");
};
export const loginUsers = (req: Request, res: Response, next: NextFunction) => {
  console.log("Login User Route");
};
export const getAllUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Get User Route");
};
export const logoutUsers = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Logout User Route");
};
