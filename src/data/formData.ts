import { User } from "../types";
import { ABOS } from "./abos";

export const initalFormData: User = {
  firstName: "",
  lastName: "",
  profileUrl: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  abo: ABOS[0].value,
  value: "",
  name: "",
};
