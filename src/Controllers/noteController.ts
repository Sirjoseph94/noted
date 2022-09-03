import z from "zod";
import prisma from "../prisma";

const createNoteSchema = z.object({
	title: z.string(),
	content: z.string(),
	id: z.number(),
});

const updateNoteSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  updatedAt: z.date()
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


export async function readAllNotes(userId: number) {
  return await prisma.note.findMany({
    where: {
      authorId: userId,
    },
  });
}

export async function getOneNote(id: number) {
  const noteId = Number(id);
  const note = await prisma.note.findUnique({
    where: {
      id: noteId,
    },
  });
  if (!note) throw "Note does not exist";
  return note;
}

export async function editNote(id: number, note: Record<string, unknown>) {
  const validate = updateNoteSchema.safeParse(note);
  if (!validate.success) throw "Wrong inputs";
  const updatedNote = await prisma.note.update({
    where: {
      id: Number(id),
    },
    data: {
      title: validate.data.title,
      content: validate.data.content,
    },
  });
  if (!updatedNote) throw "Note does not exist";
  return updatedNote;
}

export async function deleteNote(id: number) {
  const deletedNote = await prisma.note.delete({
    where: {
      id: Number(id),
    },
  });
  if (!deletedNote) throw "Error occured";
  return deletedNote;
}
