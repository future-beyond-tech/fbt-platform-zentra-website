"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations/contact";
import { contactSection } from "@/content/site";
import { submitContactRequest } from "@/services/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      email: "",
      useCase: "",
      expectedMAU: "",
    },
  });

  async function onSubmit(data: ContactFormSchema) {
    setSubmitStatus("idle");
    setErrorMessage(null);
    const result = await submitContactRequest({
      name: data.name,
      company: data.company,
      role: data.role,
      email: data.email,
      useCase: data.useCase,
      expectedMAU: data.expectedMAU,
    });
    if (result.success) {
      setSubmitStatus("success");
      reset();
    } else {
      setSubmitStatus("error");
      setErrorMessage(result.error ?? "Something went wrong.");
    }
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-b border-border/50 bg-muted/20 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          id="contact-title"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-center text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
        >
          {contactSection.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.05 }}
          className="mt-2 text-center text-muted-foreground"
        >
          {contactSection.subtitle}
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-5"
          noValidate
          aria-label="Contact / demo request form"
        >
          <div className="grid gap-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              placeholder="Full name"
              {...register("name")}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={cn(errors.name && "border-destructive")}
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-destructive" role="alert">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact-company">Company</Label>
            <Input
              id="contact-company"
              placeholder="Company name"
              {...register("company")}
              aria-invalid={!!errors.company}
              aria-describedby={errors.company ? "company-error" : undefined}
              className={cn(errors.company && "border-destructive")}
            />
            {errors.company && (
              <p id="company-error" className="text-sm text-destructive" role="alert">
                {errors.company.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact-role">Role</Label>
            <Input
              id="contact-role"
              placeholder="e.g. CTO, Security Architect"
              {...register("role")}
              aria-invalid={!!errors.role}
              aria-describedby={errors.role ? "role-error" : undefined}
              className={cn(errors.role && "border-destructive")}
            />
            {errors.role && (
              <p id="role-error" className="text-sm text-destructive" role="alert">
                {errors.role.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="you@company.com"
              {...register("email")}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={cn(errors.email && "border-destructive")}
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact-useCase">Use case</Label>
            <Textarea
              id="contact-useCase"
              placeholder="Describe your identity / SSO / compliance needs"
              rows={4}
              {...register("useCase")}
              aria-invalid={!!errors.useCase}
              aria-describedby={errors.useCase ? "useCase-error" : undefined}
              className={cn(errors.useCase && "border-destructive")}
            />
            {errors.useCase && (
              <p id="useCase-error" className="text-sm text-destructive" role="alert">
                {errors.useCase.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <Label htmlFor="contact-expectedMAU">Expected MAU</Label>
            <Input
              id="contact-expectedMAU"
              placeholder="e.g. 10K, 100K, 1M+"
              {...register("expectedMAU")}
              aria-invalid={!!errors.expectedMAU}
              aria-describedby={errors.expectedMAU ? "expectedMAU-error" : undefined}
              className={cn(errors.expectedMAU && "border-destructive")}
            />
            {errors.expectedMAU && (
              <p id="expectedMAU-error" className="text-sm text-destructive" role="alert">
                {errors.expectedMAU.message}
              </p>
            )}
          </div>

          {submitStatus === "success" && (
            <p className="rounded-lg bg-primary/10 p-3 text-sm text-foreground" role="status">
              Thank you. We will be in touch shortly.
            </p>
          )}
          {submitStatus === "error" && errorMessage && (
            <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive" role="alert">
              {errorMessage}
            </p>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full rounded-lg"
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Submit"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
