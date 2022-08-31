import { Router } from "express";
import { createUser, signInUser } from "../Controllers/auth";
import { allUsers, deleteUser, updateUsers} from "../Controllers/userController";
import { auth } from "../middleware/jwt";
import { userRequest } from "../types/express";

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
    res.status(200).json({
      success: "user sign in successful",
      data: response,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
});


router.put("/user", auth, async (req: userRequest, res) => {

  const userId = req.user.user_id
  try {
    const response = await updateUsers(userId, req.body)
    res.status(200).json({
      message: "User update successful",
      response
    })
  } catch (error) {
    res.status(400).json({error})
  }
})

router.delete("/user/:id", async(req, res) => {
  try {
    const id:number = Number(req.params.id);
    await deleteUser(id);
    res.status(200).json({
      message: "User deleted successfully",
    })
  } catch (error) {
    res.status(400).json({error})
  }
})

router.get("/users", auth, async(req: userRequest, res) => {
  try {
    const userId = req.user.user_id
    const response = await allUsers(userId)
    res.status(200).json({ response})
  } catch (error) {
    res.status(400).json({error})
  }
})
export default router;


