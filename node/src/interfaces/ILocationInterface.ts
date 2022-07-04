export interface ILocation {
  workweekDays: string;
  leaveQuota: string;
  fiscalYearStart: string | Date;
  isRollOverAllowed: boolean;
  weekStartingDay: string;
  defaultTimezone: string;
  isLocationDefault: boolean;
}