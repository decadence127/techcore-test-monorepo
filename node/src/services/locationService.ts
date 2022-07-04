import { Types } from "mongoose";
import { ILocation } from "./../interfaces/ILocationInterface";
import { locationRepository } from "./../repositories/locationRepository";
class LocationService {
  async getLocations(): Promise<
    (ILocation & { _id: Types.ObjectId })[] | undefined
  > {
    try {
      const result = await locationRepository.getLocations();
      return result;
    } catch (e) {
      throw e;
    }
  }
  async createLocation(data: ILocation) {
    try {
      const result = locationRepository.createLocation(data);
      return result;
    } catch (e) {
      throw e;
    }
  }
  async deleteLocation(locationId: string) {
    try {
      const result = locationRepository.deleteLocation(locationId);
      return result;
    } catch (e) {
      throw e;
    }
  }
}

export const locationService = new LocationService();
