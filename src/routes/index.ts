import { Router } from "express";
import { createUser, signInUser } from "../Controllers/auth";

const router = Router();

router.post("/signup", async (req, res) => {
  try {
    const response = await createUser(req.body);
    res.status(200).json({
      success: "user created",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ Error: error });
  }
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
    console.log(error);
    res.status(400).json({ error });
  }
});
export default router;
