import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("get all notes");
});

router.post("/", (req, res) => {
  res.send("request to create note");
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
