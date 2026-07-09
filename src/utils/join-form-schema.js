import { z } from "zod";

const startsWithLetterRegex = /^[A-Za-z]/;
const fullNameRegex = /^[A-Za-z][A-Za-z\s.'-]*$/;
const textFieldRegex = /^[A-Za-z][A-Za-z0-9\s&.,'()/-]*$/;
const phoneRegex = /^[+]?[0-9\s-]{10,15}$/;

export const joinFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name.")
    .max(80, "Full name is too long.")
    .refine((value) => startsWithLetterRegex.test(value), "Full name must start with a letter.")
    .refine(
      (value) => fullNameRegex.test(value),
      "Full name can only contain letters, spaces, apostrophes, periods, and hyphens."
    ),
  batch: z.string().min(1, "Please choose a cohort."),
  company: z
    .string()
    .trim()
    .min(2, "Please enter your company name.")
    .max(120, "Company name is too long.")
    .refine((value) => startsWithLetterRegex.test(value), "Company name must start with a letter.")
    .refine(
      (value) => textFieldRegex.test(value),
      "Company name can only contain letters, numbers, spaces, and basic punctuation."
    ),
  title: z
    .string()
    .trim()
    .min(2, "Please enter your title or role.")
    .max(120, "Title / role is too long.")
    .refine((value) => startsWithLetterRegex.test(value), "Title / role must start with a letter.")
    .refine(
      (value) => textFieldRegex.test(value),
      "Title / role can only contain letters, numbers, spaces, and basic punctuation."
    ),
  email: z
    .string()
    .trim()
    .email("Please enter a valid company email."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || phoneRegex.test(value), "Please enter a valid phone number."),
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
