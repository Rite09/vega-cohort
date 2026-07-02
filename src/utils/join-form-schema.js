import { z } from "zod";

export const joinFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name."),
  batch: z.string().min(1, "Please choose a cohort."),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name."),
  title: z
    .string()
    .trim()
    .min(2, "Please enter your title or role."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid company email."),
  phone: z
    .string()
    .trim()
    .optional(),
  companySize: z.string().min(1, "Please choose a company size."),
});

export const joinFormDefaultValues = {
  fullName: "",
  batch: "",
  company: "",
  title: "",
  email: "",
  phone: "",
  companySize: "",
};
