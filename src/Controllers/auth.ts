import z from "zod";
import prisma from "../prisma";
import { generateAccessToken } from "../middleware/jwt";

const createUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(2).max(15),
  password: z.string().min(6),
  isAdmin: z.string().transform((input => Boolean(input))).optional(),
});

const signinUserSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

//signup user
export function createUser(user: Record<string, unknown>) {
  const validate = createUserSchema.safeParse(user);
  if (!validate.success) {
    throw validate.error;
  }
  const record = validate.data;

  return prisma.user.create({
    data: {
      email: record.email,
      username: record.username,
      password: record.password,
      isAdmin: record.isAdmin,
    },
    select: {
      id: true,
      email: true,
      username: true,
    },
  });
}

//sign in user
export async function signInUser(data: Record<string, unknown>) {
  const validate = signinUserSchema.safeParse(data);

  if (!validate.success) throw validate.error;
  const record = validate.data;

  const user = await prisma.user.findUnique({
    where: {
      email: record.email,
    },
  });
  if (!user) throw `No user with ${record.email}. Please signup`;
  if (user.password !== record.password)
    throw "Wrong password, please check again";

  return generateAccessToken(user.id as unknown as string);
}
