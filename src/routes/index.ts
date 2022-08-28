import { Router } from "express";
import { requiresAuth } from "express-openid-connect";

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

router.get("/user", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

export default router;
