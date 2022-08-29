import z from "zod";
import prisma from "../prisma";

const createUserSchema = z.object({
  email: z.string().email(),
  username: z.string().min(2).max(15),
  password: z.string().min(6),
  isAdmin: z.boolean().default(true),
});
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
  });
}
