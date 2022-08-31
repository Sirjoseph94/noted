import { Router } from "express";
import { createNote, readAllNotes } from "../Controllers/noteController";
import { auth } from "../middleware/jwt";

const router = Router();

//Get all notes by user
router.get("/", auth, async (req: Request | any, res) => {
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

//create new note
router.post("/", auth, async (req: Request | any, res) => {
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
  .get(auth, (req, res) => {
    res.send("get single note");
  })
  .put(auth, (req, res) => {
    res.send("update note");
  })
  .delete(auth, (req, res) => {
    res.send("request to delete note");
  });

export default router;
