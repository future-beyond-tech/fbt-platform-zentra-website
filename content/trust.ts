/**
 * Trust Center content.
 * Professional, transparent, auditor-level tone.
 */

export const trustSeo = {
  title: "Trust Center | Zentra – Evidence-Based Identity Infrastructure",
  description:
    "Security overview, controls, governance, vulnerability disclosure, and security roadmap. RFC-compliant OAuth2/OIDC, STRIDE-modeled, risk transparency.",
  keywords: [
    "Zentra trust center",
    "identity security",
    "OAuth2 OIDC compliance",
    "vulnerability disclosure",
  ],
};

export const securityOverview = {
  title: "Security Overview",
  philosophy: [
    {
      title: "Zero Trust",
      description: "No implicit trust at the perimeter. Every request is validated; identity and authorization are verified per transaction.",
    },
    {
      title: "Evidence-Based Security",
      description: "Controls are implemented and documented. Maturity and risk are stated with evidence, not aspirational claims.",
    },
    {
      title: "Open Standards",
      description: "OAuth 2.0, OpenID Connect, and related RFCs (6749, 7636, 7009, 7662). No proprietary extensions required for core flows.",
    },
    {
      title: "Defense in Depth",
      description: "Layered controls: PKCE, asymmetric signing, token rotation, rate limiting, security headers, audit trails, and operational governance.",
    },
  ],
};

export const securityControlsOverview = {
  title: "Security Controls Overview",
  subtitle: "High-level summary of implemented controls. Details and evidence are in the Security Whitepaper.",
  controls: [
    "OAuth 2.0 & OpenID Connect compliance (RFC 6749, OIDC Core)",
    "PKCE S256 only — no plain code_challenge",
    "Refresh token rotation with reuse detection",
    "JWT asymmetric signing (RS256 / ES256)",
    "Rate limiting on authorization and token endpoints",
    "Security headers (CSP, HSTS, X-Content-Type-Options, etc.)",
    "Structured logging and audit trail",
    "Key rotation (90-day model; SOP documented in whitepaper)",
  ],
};

export const governanceAndMonitoring = {
  title: "Governance & Monitoring",
  items: [
    "Quarterly security review of architecture and dependencies",
    "Dependency scanning in CI; known-vulnerable dependencies fail the build",
    "CI security gates: no secrets in repository, lint and test gates",
    "Penetration testing: conducted as applicable; scope and findings handled under NDA or disclosure policy",
  ],
};

export const vulnerabilityDisclosure = {
  title: "Vulnerability Disclosure",
  email: "security@fbt.dev",
  intro:
    "We welcome responsible disclosure of security vulnerabilities. Please report issues to the address below.",
  points: [
    "Report suspected vulnerabilities to security@fbt.dev. Do not disclose publicly before we have had time to assess and respond.",
    "We aim to acknowledge receipt within 72 hours. We will provide an initial assessment and timeline for fixes where applicable.",
    "We work with reporters in good faith to resolve issues. We do not pursue legal action against researchers who follow responsible disclosure.",
    "We do not offer a bug bounty program at this time. We credit reporters where they agree to be named.",
  ],
};

export const securityRoadmap = {
  title: "Security Roadmap",
  subtitle: "Planned security enhancements. Dates are targets and may shift.",
  items: [
    { quarter: "Q2 2026", text: "Distributed rate limiting" },
    { quarter: "Q2 2026", text: "HSM integration for signing key protection" },
    { quarter: "Planned", text: "Real-time revocation enhancements" },
    { quarter: "Planned", text: "Advanced monitoring and alerting configuration" },
  ],
};

export const trustWhitepapersSection = {
  title: "Whitepapers",
  latestLabel: "Latest",
  archivedLabel: "Archived",
};
