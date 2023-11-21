import { Timestamp } from "firebase/firestore";

export const getTodayStart = () => {
  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  // Convert the dates to Firestore Timestamps
  return Timestamp.fromDate(todayStart);
};
