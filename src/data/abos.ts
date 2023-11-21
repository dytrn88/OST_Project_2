import { AboType } from "../types";

export const ABOS: AboType[] = [
  {
    name: "Muay Thai",
    value: "muayThai",
    regular: {
      prices: [550, 990],
      validities: ["6", "12"],
    },
    student: {
      prices: [440, 800],
      validities: ["6", "12"],
    },
  },
  {
    name: "BJJ / BJJ Nogi / Ringen",
    value: "bjj",
    regular: {
      prices: [480, 900],
      validities: ["6", "12"],
    },
    student: {
      prices: [380, 720],
      validities: ["6", "12"],
    },
  },
  {
    name: "All Access",
    value: "allAccess",
    regular: {
      prices: [580, 1090],
      validities: ["6", "12"],
    },
    student: {
      prices: [460, 870],
      validities: ["6", "12"],
    },
  },
];
