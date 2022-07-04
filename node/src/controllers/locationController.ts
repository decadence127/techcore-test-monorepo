import * as express from "express";

class LocationController {
  async getLocations(req: express.Request, res: express.Response) {
    
    return res.send("Hello locations");
  }
}

export const locationController = new LocationController()