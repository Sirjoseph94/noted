import z from "zod"
import prisma from '../prisma';

const updateUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(2).max(15),
  password: z.string().min(6),
  isAdmin: z.boolean().default(false),
});

export async function updateUsers(userId:number, data: unknown) {
  const validate = updateUserSchema.safeParse(data)
  if(!validate.success) throw "invalid input";

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