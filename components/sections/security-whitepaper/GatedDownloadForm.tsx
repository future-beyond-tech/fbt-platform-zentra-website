"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { whitepaperDownloadSchema, type WhitepaperDownloadSchema } from "@/lib/validations/whitepaper-download";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const PRIMARY_USE_CASE_OPTIONS = [
  { value: "", label: "Select primary use case" },
  { value: "saas-platform", label: "SaaS platform (web + mobile + API)" },
  { value: "enterprise-sso", label: "Enterprise SSO" },
  { value: "api-gateway", label: "API Gateway / microservices" },
  { value: "mobile-app", label: "Mobile app (PKCE)" },
  { value: "internal-tools", label: "Internal tools & B2B" },
  { value: "other", label: "Other" },
];

const PDF_PATH = "/whitepapers/zentra-security-whitepaper-v1.0-feb-2026.pdf";

export function WhitepaperGatedDownloadForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WhitepaperDownloadSchema>({
    resolver: zodResolver(whitepaperDownloadSchema),
    defaultValues: {
      fullName: "",
      company: "",
      role: "",
      workEmail: "",
      estimatedMAU: "",
      primaryUseCase: "",
    },
  });

  function onSubmit(_data: WhitepaperDownloadSchema) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setSubmitted(true);
        resolve();
      }, 600);
    });
  }

  if (submitted) {
    return (
      <section
        id="download-whitepaper"
        aria-labelledby="download-whitepaper-title"
        className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-border bg-card p-8 text-center shadow-sm"
          >
            <p className="text-lg font-semibold text-foreground">
              Thank you. Your download is ready.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Click below to download the Zentra Security Whitepaper (PDF).
            </p>
            <Button asChild size="lg" className="mt-6 rounded-xl">
              <a href={PDF_PATH} download>
                <Download className="mr-2 h-4 w-4" aria-hidden />
                Download Whitepaper
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="download-whitepaper"
      aria-labelledby="download-whitepaper-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="download-whitepaper-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          Download Whitepaper
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.05 }}
          className="mt-4 text-center text-muted-foreground"
        >
          Complete the form below to access the PDF. No backend submission; download unlocks after submit.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5"
          noValidate
          aria-label="Whitepaper download request form"
        >
          <div className="grid gap-2">
            <Label htmlFor="wp-fullName">Full Name</Label>
            <Input
              id="wp-fullName"
              placeholder="Full name"
              {...register("fullName")}
              aria-invalid={!!errors.fullName}
              aria-describedby={errors.fullName ? "wp-fullName-error" : undefined}
              className={cn(errors.fullName && "border-destructive")}
            />
            {errors.fullName && (
              <p id="wp-fullName-error" className="text-sm text-destructive" role="alert">
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="wp-company">Company</Label>
            <Input
              id="wp-company"
              placeholder="Company name"
              {...register("company")}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "wp-company-error" : undefined}
              className={cn(errors.company && "border-destructive")}
            />
            {errors.company && (
              <p id="wp-company-error" className="text-sm text-destructive" role="alert">
                {errors.company.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="wp-role">Role</Label>
            <Input
              id="wp-role"
              placeholder="e.g. CTO, Security Architect"
              {...register("role")}
              aria-invalid={!!errors.role}
              aria-describedby={errors.role ? "wp-role-error" : undefined}
              className={cn(errors.role && "border-destructive")}
            />
            {errors.role && (
              <p id="wp-role-error" className="text-sm text-destructive" role="alert">
                {errors.role.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="wp-workEmail">Work Email</Label>
            <Input
              id="wp-workEmail"
              type="email"
              placeholder="you@company.com"
              {...register("workEmail")}
              aria-invalid={!!errors.workEmail}
              aria-describedby={errors.workEmail ? "wp-workEmail-error" : undefined}
              className={cn(errors.workEmail && "border-destructive")}
            />
            {errors.workEmail && (
              <p id="wp-workEmail-error" className="text-sm text-destructive" role="alert">
                {errors.workEmail.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="wp-estimatedMAU">Estimated Monthly Active Users</Label>
            <Input
              id="wp-estimatedMAU"
              placeholder="e.g. 10K, 100K, 1M+"
              {...register("estimatedMAU")}
              aria-invalid={!!errors.estimatedMAU}
              aria-describedby={errors.estimatedMAU ? "wp-estimatedMAU-error" : undefined}
              className={cn(errors.estimatedMAU && "border-destructive")}
            />
            {errors.estimatedMAU && (
              <p id="wp-estimatedMAU-error" className="text-sm text-destructive" role="alert">
                {errors.estimatedMAU.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="wp-primaryUseCase">Primary Use Case</Label>
            <select
              id="wp-primaryUseCase"
              {...register("primaryUseCase")}
              aria-invalid={!!errors.primaryUseCase}
              aria-describedby={errors.primaryUseCase ? "wp-primaryUseCase-error" : undefined}
              className={cn(
                "flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                "disabled:cursor-not-allowed disabled:opacity-50",
                errors.primaryUseCase && "border-destructive"
              )}
            >
              {PRIMARY_USE_CASE_OPTIONS.map((opt) => (
                <option key={opt.value || "empty"} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.primaryUseCase && (
              <p id="wp-primaryUseCase-error" className="text-sm text-destructive" role="alert">
                {errors.primaryUseCase.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-xl"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Submitting…" : "Submit & Unlock Download"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
