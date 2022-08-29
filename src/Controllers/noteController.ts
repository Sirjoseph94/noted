import z from "zod";
import prisma from "../prisma";

const createNoteSchema = z.object({
  title: z.string(),
  content: z.string(),
});

export async function createNote(data: Record<string, unknown>) {
  const validate = createNoteSchema.safeParse(data);

  if (!validate.success) {
    throw validate.error;
  }

  const record = validate.data;
  return prisma.note.create({
    data: {
      title: record.title,
      content: record.content,
      authorId: 2,
    },
  });
}
