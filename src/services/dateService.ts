import { schedule } from "@/data";
import { ScheduleEntry } from "@/types";

type ScheduleResult = [ScheduleEntry[], string];

export const getClassesFromToday = (): ScheduleResult => {
  const today = new Date()
    .toLocaleDateString("en-US", {
      weekday: "long",
    })
    .toLowerCase();
  const todaysSchedule: ScheduleEntry[] = schedule.filter(
    (item) => item.day === today
  );
  if (todaysSchedule.length === 0) {
    return [todaysSchedule, "noClass"];
  }
  return [todaysSchedule, today];
};
