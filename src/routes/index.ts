import { Router } from "express";
import { signInUser } from "../controller/auth";

const router = Router();

router.get("/notes", (req, res) => {
  res.send("get all notes");
});

router.get("/note:id", (req, res) => {
  res.send("get single note");
});

router.post("/note", (req, res) => {
  res.send("request to create note");
});

router.put("/note:id", (req, res) => {
  res.send("update note");
});
router.delete("/note:id", (req, res) => {
  res.send("request to delete note");
});

router.post("/signin", async (req, res) => {
  try {
    const response = await signInUser(req.body);
    res.cookie("token", response, { httpOnly: true });
    res.status(200).json({
      success: "user signin successful",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});
export default router;
