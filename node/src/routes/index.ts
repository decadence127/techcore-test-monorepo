import { Router } from "express";

import { locationRoute } from "../utils/constants/routes";
import { locationRoutes } from "./locationsRoutes";

const router = Router();

router.use(locationRoute, [locationRoutes]);

export default router;
