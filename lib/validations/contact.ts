import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(120, "Name is too long"),
  company: z.string().min(1, "Company is required").max(120, "Company name is too long"),
  role: z.string().min(1, "Role is required").max(80, "Role is too long"),
  email: z.string().email("Enter a valid email"),
  useCase: z.string().min(1, "Please describe your use case").max(2000, "Use case is too long"),
  expectedMAU: z.string().min(1, "Expected MAU is required").max(40, "Keep it brief"),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
