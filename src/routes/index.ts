import { Router } from "express";
import { requiresAuth } from "express-openid-connect";

const router = Router();

router.get("/user", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

export default router;
