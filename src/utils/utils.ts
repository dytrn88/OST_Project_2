import { z } from "zod";
import { User } from "../types";

export const validateForm = (formState: User) => {
  const schema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    address: z.string().min(2, "Address must be at least 2 characters"),
    zipCode: z.string().min(2, "Zip code must be at least 2 characters"),
    city: z.string().min(2, "City must be at least 2 characters"),
    abo: z.string().min(2, "Abo must be at least 2 characters"),
  });
  const result = schema.safeParse(formState);
  if (!result.success) {
    result.error.errors.map((err) => err.message);
  } else {
    console.log(result.data);
  }
  return result;
};
