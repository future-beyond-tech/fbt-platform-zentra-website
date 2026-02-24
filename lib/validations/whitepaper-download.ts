import { z } from "zod";

export const whitepaperDownloadSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(120, "Name is too long"),
  company: z
    .string()
    .min(1, "Company is required")
    .max(120, "Company name is too long"),
  role: z
    .string()
    .min(1, "Role is required")
    .max(80, "Role is too long"),
  workEmail: z.string().email("Enter a valid work email"),
  estimatedMAU: z
    .string()
    .min(1, "Estimated monthly active users is required")
    .max(40, "Keep it brief"),
  primaryUseCase: z
    .string()
    .min(1, "Please select a primary use case")
    .max(120, "Use case is too long"),
});

export type WhitepaperDownloadSchema = z.infer<typeof whitepaperDownloadSchema>;
