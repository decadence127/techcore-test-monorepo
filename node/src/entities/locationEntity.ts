import mongoose, { Mongoose, Types } from "mongoose";
import dotenv from "dotenv";
import { ILocation } from "../interfaces/ILocationInterface";

dotenv.config({});

export interface ILocationSchema extends mongoose.Document, ILocation {}

const locationSchema = new mongoose.Schema<ILocationSchema>({
  workweekDays: {
    type: String,
    required: true,
  },
  leaveQuota: {
    type: String,
    required: true,
  },
  fiscalYearStart: {
    type: String,
    required: true,
  },
  isRollOverAllowed: {
    type: Boolean,
    required: true,
  },
  weekStartingDay: {
    type: String,
    required: true,
  },
  defaultTimezone: {
    type: String,
    required: true,
  },
  isLocationDefault: {
    type: Boolean,
    required: true,
  },
});

const Location = mongoose.model("Location", locationSchema);

export default Location;
