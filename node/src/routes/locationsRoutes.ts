import { Router } from "express";

import { locationController } from "../controllers/locationController";
import {
  locationDeleteRoute,
  locationMainRoute,
} from "../utils/constants/routes";

const router = Router();

router.get(locationMainRoute, locationController.getLocations);
router.post(locationMainRoute, locationController.createLocation);
router.delete(locationDeleteRoute, locationController.deleteLocation);

export const locationRoutes = router;
