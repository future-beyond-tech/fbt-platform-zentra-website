/**
 * Whitepaper versions and What's New in v1.1.
 * Single source for security-whitepaper and trust pages.
 */

export const whitepaperVersions = [
  {
    version: "1.1",
    label: "Zentra Security Whitepaper v1.1",
    date: "February 2026",
    path: "/whitepapers/Zentra_Security_Whitepaper_v1.1.pdf",
    latest: true,
    sha256Placeholder: "SHA256 checksum will be published upon release.",
  },
  {
    version: "1.0",
    label: "Zentra Security Whitepaper v1.0",
    date: "Archived",
    path: "/whitepapers/Zentra-Security-Whitepaper-v1.0.pdf",
    latest: false,
  },
] as const;

export const whatsNewInV11 = {
  title: "What's New in v1.1",
  intro: "Evidence-based maturity recalibration and documented security posture.",
  items: [
    {
      title: "STRIDE Threat Model",
      description: "Structured threat model (Spoofing, Tampering, Repudiation, Information disclosure, DoS, Elevation of privilege) with mitigations documented.",
    },
    {
      title: "Residual Risk Transparency",
      description: "Residual and accepted risk documented. No hidden assumptions; risks are stated for evaluator review.",
    },
    {
      title: "RFC Compliance Evidence",
      description: "HTTP request/response examples for authorization and token endpoints. Evidence of RFC 6749, 7636, 7009, 7662 behavior.",
    },
    {
      title: "Governance & Security Review Model",
      description: "Governance model and security review cadence documented. Clear ownership and review process.",
    },
    {
      title: "Recalibrated Maturity (L2.5 Evidence-Based)",
      description: "Maturity level stated as L2.5 Managed with evidence-based criteria. No overclaim; aligned to documented controls.",
    },
  ],
};

export const whitepaperSeo = {
  title: "Zentra Security Whitepaper v1.1 – Evidence-Based OAuth2 / OIDC Security Architecture",
  description:
    "Evidence-based security whitepaper: STRIDE threat model, residual risk transparency, RFC compliance evidence (HTTP examples), governance model, L2.5 maturity. OAuth 2.0 and OpenID Connect.",
  keywords: [
    "Zentra security whitepaper",
    "OAuth2 OIDC security architecture",
    "STRIDE threat model",
    "RFC compliance evidence",
    "identity provider security",
  ],
};
