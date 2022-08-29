import { Router } from "express";
import { createNote } from "../Controllers/noteController";

const router = Router();

router.get("/", (req, res) => {
  res.send("get all notes");
});

router.post("/", async (req, res) => {
  try {
    const response = await createNote(req.body);
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
  .get((req, res) => {
    res.send("get single note");
  })
  .put((req, res) => {
    res.send("update note");
  })
  .delete((req, res) => {
    res.send("request to delete note");
  });

export default router;
