import z from "zod";
import prisma from "../prisma";

const createNoteSchema = z.object({
  title: z.string(),
  content: z.string(),
  id: z.number(),
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
      authorId: record.id,
    },
  });
}

export async function readAllNotes(id: number) {
  return await prisma.note.findMany({
    where: {
      authorId: id,
    },
  });
}
