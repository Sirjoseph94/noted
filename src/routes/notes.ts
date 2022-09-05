import { Router } from "express";
import {
  createNote,
  readAllNotes,
  editNote,
  getOneNote,
  deleteNote,
  notesCount,
} from "../Controllers/noteController";
import { auth } from "../middleware/jwt";
import { userRequest } from "../types/express";

const router = Router();

//Get all notes by user

router.get("/", auth, async (req:userRequest, res) => {
  try {
    const response = await readAllNotes(req.user.user_id);
    res.status(201).json({
      message: "notes gotten",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
//get notes count
router.get("/admin", auth, async (req:userRequest, res) => {
  try {
    const response = await notesCount(req.user.user_id);
    res.status(201).json({
      message: "notes count gotten",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});



//create new note
router.post("/", auth, async (req:userRequest, res) => {
  try {
    const id = req.user.user_id;
    const response = await createNote({ ...req.body, id });
    res.status(201).json({
      message: "note created successfully",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router
  .route("/:id")
  .get(auth, async (req, res) => {
    try {
      const response = await getOneNote(req.params.id as unknown as number);
      res.status(200).json({ response });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  })
  .put(auth, async (req, res) => {
    try {
      const id = req.params.id as unknown as number;
      const response = await editNote(id, req.body);
      res.status(201).json({
        message: "note updated successfully",
        data: response,
      });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  })
  .delete(auth, async (req, res) => {
    try {
      const id = req.params.id as unknown as number;
      await deleteNote(id);
      res.status(200).json({ message: "note deleted successfully" });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  });

export default router;
