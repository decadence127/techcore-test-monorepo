import { ILocation } from "./../interfaces/ILocationInterface";
import mongoose from "mongoose";
import Location, { ILocationSchema } from "../entities/locationEntity";

class LocationRepository {
  async getLocations() {
    try {
      const result = await Location.find({});

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  async createLocation(data: ILocation) {
    try {
      const location = await Location.create(data);

      const result = await location.save();

      return result;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
export const locationRepository = new LocationRepository();
