export type UserSelect = {
  value: string;
  label: string;
  email: string;
};

export type ScheduleEntry = {
  id: string;
  day: string;
  value: string;
  label: string;
  time: string;
  duration: string;
  teacher: string;
};

export type WeekDay =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";
