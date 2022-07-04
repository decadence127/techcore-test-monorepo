import { ILocation } from "./../interfaces/ILocationInterface";
import { locationService } from "./../services/locationService";
import * as express from "express";

class LocationController {
  async getLocations(req: express.Request, res: express.Response) {
    try {
      const result = await locationService.getLocations();

      return res.json(result);
    } catch (e) {
      res.json({ msg: e });
    }
  }
  async createLocation(
    req: express.Request<unknown, unknown, ILocation>,
    res: express.Response
  ) {
    try {
      const {
        defaultTimezone,
        fiscalYearStart,
        isLocationDefault,
        isRollOverAllowed,
        leaveQuota,
        weekStartingDay,
        workweekDays,
      } = req.body;

      const result = locationService.createLocation({
        defaultTimezone,
        fiscalYearStart,
        isLocationDefault,
        isRollOverAllowed,
        leaveQuota,
        weekStartingDay,
        workweekDays,
      });
      return res.json(result);
    } catch (e) {
      res.status(422).json({ msg: "Unprocessed Entity" });
    }
  }
  async deleteLocation(
    req: express.Request<{ id: string }>,
    res: express.Response
  ) {
    try {
      const { id } = req.params;
      const result = await locationService.deleteLocation(id);

      return res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ msg: "Internal Error" });
    }
  }
}

export const locationController = new LocationController();
