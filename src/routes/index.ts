import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("api get endpoint");
});

export default router;
