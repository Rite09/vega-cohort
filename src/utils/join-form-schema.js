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
});

export const joinFormDefaultValues = {
  fullName: "",
  batch: "",
  company: "",
  title: "",
};
