import { Request, Response, NextFunction } from "express";
// import {Prisma} from '../prisma';

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
export const updateUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //   const postData = await Prisma.user.findUnique({
    //     where: { id: Number(id) },
    //     data: {
    //       published: true,
    //     },
    //   })

    // const { id } = req.params
    //   const updatedUser = await Prisma.user.update({
    //     where: { id: Number(id) || undefined },
    //     data: {  email:"email",
    //         username:"username",
    //         password:"password",
    //         isAdmin:true },
    //   })
    await res.status(200).json({ msg: "updated" });
    // res.status(200).json({updatedUser})
  } catch (error) {
    res
      .status(500)
      .json({
        error: `Post with ID ${req.params.id} does not exist in the database`,
      });
  }
};

export const deleteUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const { id } = req.params
  // const post = await Prisma.user.delete({
  //   where: {
  //     id: Number(id),
  //   },
  // })
  await res.status(200).json({ msg: "deleted" });
  // res.status(200).json({post})
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

// import express from 'express';
// import router
// const router = express.Router()

// router.put('/:id', async (req, res) => {
//     const { id } = req.params

//     try {
//     //   const postData = await Prisma.user.findUnique({
//     //     where: { id: Number(id) },
//     //     data: {
//     //       published: true,
//     //     },
//     //   })

//       const updatedPost = await Prisma.user.update({
//         where: { id: Number(id) || undefined },
//         data: {  email:"email",
//             username:"username",
//             password:"password",
//             isAdmin:true },
//       })
//       res.json(updatedPost)
//     } catch (error) {
//       res.json({ error: `Post with ID ${id} does not exist in the database` })
//     }
//   })

// router.delete(`/:id`, async (req, res) => {
//  )
