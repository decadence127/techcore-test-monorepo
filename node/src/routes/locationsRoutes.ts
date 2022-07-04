import { Router } from "express";
import { locationController } from "../controllers/locationController";

const router = Router();

router.get("/", locationController.getLocations);
router.post("/", locationController.createLocation);

export const locationRoutes = router;
