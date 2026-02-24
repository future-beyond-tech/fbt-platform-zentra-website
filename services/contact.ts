import type { ContactFormData } from "@/types";

/**
 * Submits contact/demo request. In production this would POST to an API.
 * No business logic in UI — form calls this service.
 */
export async function submitContactRequest(
  data: ContactFormData
): Promise<{ success: boolean; error?: string }> {
  try {
    // Simulate API call; replace with actual endpoint when backend is ready
    await new Promise((resolve) => setTimeout(resolve, 800));
    // eslint-disable-next-line no-console
    console.info("[Contact] Demo request received:", data);
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Submission failed";
    return { success: false, error: message };
  }
}
