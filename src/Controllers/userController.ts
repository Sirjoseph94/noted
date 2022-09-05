import z from "zod";
import prisma from "../prisma";

const updateUserSchema = z.object({
  
  email: z.string().email().optional(),
  username: z.string().min(2).max(15).optional(),
  password: z.string().min(6).optional(),
  isAdmin: z.string().transform((input => Boolean(input))).optional(),

});

export async function updateUsers(userId:number, data: unknown) {
  const validate = updateUserSchema.safeParse(data)
  if(!validate.success) throw validate;

 const user = prisma.user.update({
  where:{
    id: userId
  },
  data:{
    email: validate.data.email,
    username: validate.data.username,
    password: validate.data.password,
    isAdmin: validate.data.isAdmin
  }
 })
 return user
}

export async function deleteUser(id: number, userId:number) {
  const admin = await prisma.user.findFirst({
    where: {
      id: userId,
      isAdmin: true
    }
  })
 
  if(!admin?.isAdmin) throw "not authorized"
  const deletedUser = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
  if (!deletedUser) throw "Error occured, please try again";
  return ("User account removed successfully");
}

export async function allUsers(id:number) {
  const admin = await prisma.user.findFirst({
    where: {
      id: id,
      isAdmin: true
    }
  })
 
  if(!admin?.isAdmin) throw "not authorized"
  
  const users = await prisma.user.findMany({
    select:{
      id: true,
      email: true,
      username: true,
      _count: {
        select: { notes: true },
      },
 
    }
  })

  return users 
}


