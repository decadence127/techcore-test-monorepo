import { Router } from "express";
import { locationRoutes } from "./locationsRoutes";
const router = Router();

router.use("/locations", [locationRoutes]);

export default router;
