/**
 * ZENTRA — L3 Enterprise Hardened, Security-First Identity Platform.
 * Single source of truth for homepage and shared messaging.
 */

export const siteConfig = {
  name: "Zentra",
  company: "FBT",
  companyFull: "Future Beyond Tech",
  /** FBT main site; clicking FBT in header/footer transitions here */
  companyUrl: "https://futurebeyondtech.com",
  tagline: "Evidence-Based Identity Infrastructure",
  taglineOptions: [
    "Evidence-Based Identity Infrastructure",
    "Security-First Identity Infrastructure",
    "Enterprise OAuth & OpenID Connect Authority",
    "Identity Infrastructure for Serious Systems",
    "Self-Hosted. RFC-Compliant. Zero Lock-In.",
  ],
  description:
    "Evidence-based OAuth 2.0 and OpenID Connect authorization server. RFC-compliant, STRIDE-modeled, risk transparency documented. Built for enterprise evaluation.",
  url: "https://identity.futurebeyondtech.com",
  ogImage: "/og.png",
};

export const heroContent = {
  headline: "Zentra — Evidence-Based Identity Infrastructure",
  subheadline:
    "Enterprise OAuth 2.0 & OpenID Connect authority. RFC 6749, 7636, 7009, 7662 compliant. STRIDE-modeled, risk transparency documented, governance-first. Built for procurement evaluation.",
  ctaPrimary: "Request Architecture Review",
  ctaSecondary: "Download Security Whitepaper",
};

export const problemContent = {
  title: "Identity Fragmentation",
  subtitle: "Without a centralized identity authority, enterprises face:",
  without: [
    "Multiple user stores and inconsistent policies",
    "Scattered audit trails and compliance gaps",
    "No single sign-on across web, mobile, and APIs",
    "Inconsistent token and password policies",
    "Security risk at every integration boundary",
  ],
  withZentra: [
    "Single source of truth for identity",
    "Centralized audit trails for compliance evidence",
    "SSO across web, mobile, and APIs",
    "Unified policy and token lifecycle control",
    "Consistent security at every boundary",
  ],
};

export const whatZentraSolves = {
  title: "What Zentra Solves",
  intro:
    "Zentra addresses identity fragmentation, token lifecycle, and access control with an RFC-hardened authorization server.",
  solutions: [
    "Identity fragmentation across products and services",
    "Token lifecycle: issue, refresh, revoke, introspect",
    "Centralized RBAC and scope enforcement",
    "Multi-product SSO with one identity layer",
    "Microservice authentication consistency",
  ],
  highlights: [
    { term: "Authorization Code Flow", desc: "RFC 6749 — standard OAuth 2.0 for web apps" },
    { term: "PKCE (S256 only)", desc: "RFC 7636 — public and mobile clients" },
    { term: "Client Credentials", desc: "Machine-to-machine and service accounts" },
    { term: "Refresh token rotation + reuse detection", desc: "Short-lived access, secure refresh" },
    { term: "Token introspection", desc: "RFC 7662 — gateway and resource server validation" },
    { term: "JWKS", desc: "Distributed JWT validation without shared secrets" },
  ],
};

// --- Security Highlights (Evidence-Based) ---
export const securityHighlights = {
  title: "Security Highlights",
  subtitle: "Evidence-based. Implemented and documented, not promised.",
  items: [
    "PKCE S256 only — no plain code_challenge",
    "Asymmetric signing (RS256 / ES256) — no HMAC shared secrets for access tokens",
    "Refresh token rotation with reuse detection",
    "RFC 6749, 7636, 7009, 7662 — compliant authorization and token endpoints",
    "Strict audience validation for tokens",
    "Rate limiting and security headers on all endpoints",
    "Secrets via environment or vault only — never in repo or config",
  ],
};

// --- Protocol Compliance Matrix ---
export const protocolComplianceMatrix: Array<{
  rfc: string;
  name: string;
  level: string;
  inPractice: string;
}> = [
  {
    rfc: "RFC 6749",
    name: "OAuth 2.0",
    level: "Compliant",
    inPractice: "Authorization code, client credentials, refresh token; token revocation.",
  },
  {
    rfc: "RFC 7636",
    name: "PKCE",
    level: "S256 only",
    inPractice: "code_challenge_method S256 enforced for public clients.",
  },
  {
    rfc: "RFC 7009",
    name: "Token Revocation",
    level: "Compliant",
    inPractice: "Revocation endpoint; refresh token invalidation on revoke.",
  },
  {
    rfc: "RFC 7662",
    name: "Token Introspection",
    level: "Compliant",
    inPractice: "Introspection endpoint for gateway and resource server validation.",
  },
  {
    rfc: "RFC 7519",
    name: "JWT",
    level: "Compliant",
    inPractice: "Access tokens as JWTs; RS256/ES256 signing; standard claims.",
  },
  {
    rfc: "RFC 7517",
    name: "JWK / JWKS",
    level: "Compliant",
    inPractice: "JWKS endpoint for distributed validation; key rotation supported.",
  },
];

// --- Architecture Overview ---
export const architectureOverview = {
  title: "Architecture Overview",
  subtitle:
    "Authorization Server, JWKS validation, token lifecycle, revocation, introspection. Enforced at the gateway; Clean Architecture underneath.",
  flow: [
    { label: "Client", desc: "SPA, native app, or server" },
    { label: "API Gateway", desc: "JWT validation, scope-based routing" },
    { label: "Zentra", desc: "Authorization server, refresh tokens, RBAC" },
    { label: "Resource Services", desc: "Scope-based access" },
    { label: "Data", desc: "Your data layer" },
  ],
  bullets: [
    "Authorization Server: /authorize, /token, /revoke, /introspect, /.well-known/openid-configuration",
    "JWKS endpoint for JWT validation without shared secrets",
    "Token lifecycle: short-lived access tokens; refresh with rotation and reuse detection",
    "Revocation (RFC 7009) and introspection (RFC 7662) for gateway and resource servers",
    "Gateway enforcement: validate JWT, check audience and expiry, enforce scopes",
    "Clean Architecture: Domain → Application → Infrastructure → API",
  ],
};

// --- Enterprise Trust ---
export const enterpriseTrust = {
  title: "Enterprise Trust",
  subtitle: "Designed for visibility, rotation, and regression safety.",
  items: [
    "Key rotation model: signing keys rotatable; JWKS exposes current keys; no downtime for rotation",
    "Token replay prevention: short-lived access tokens; refresh reuse detection",
    "Layer separation: domain isolated from infrastructure; no security logic in API layer",
    "Security regression test suite: flows and revocation covered by automated tests",
    "CI security gates: no secrets in repo; build fails on known-vulnerable dependencies",
    "Monitoring and governance: structured audit logs; integration points for SIEM",
  ],
};

export const coreCapabilities = {
  security: {
    title: "Security Architecture",
    items: [
      "PKCE S256 only; asymmetric signing (RS256 / ES256)",
      "Refresh token rotation and reuse detection",
      "Token revocation and introspection endpoints",
      "Role and scope enforcement; strict audience validation",
      "Rate limiting and security headers",
      "Audit trails; secrets via environment or vault only",
      "MFA (authenticator, email, SMS); LDAP / AD integration",
    ],
  },
  architecture: {
    title: "Clean Architecture",
    items: [
      "Domain → Application → Infrastructure → API",
      "Repository pattern; config-driven behavior",
      "Multi-database support",
    ],
  },
  microservices: {
    title: "Microservices-Ready",
    items: [
      "Stateless token validation via JWKS",
      "API Gateway integration; scope-based routing",
      "Header propagation (e.g. X-User-ID) for downstream services",
    ],
  },
  compliance: {
    title: "Compliance Evidence",
    items: [
      "Audit logs and access controls for evidence gathering",
      "Encryption in transit (TLS); secrets management policy",
      "OWASP Top 10 mitigation (documented in whitepaper)",
      "Self-hosted deployment for data sovereignty and control",
      "No claim of SOC 2 or ISO certification — controls support your audit path",
    ],
  },
};

export const useCasesContent: Array<{
  title: string;
  description: string;
  bullets: string[];
}> = [
  {
    title: "SaaS Platform",
    description: "Unified identity for web, mobile, and API.",
    bullets: [
      "One identity layer across products",
      "Unified RBAC and policy",
      "SSO for web, mobile, and APIs",
    ],
  },
  {
    title: "Enterprise SSO",
    description: "Corporate directory integration for HR, Finance, IT.",
    bullets: [
      "LDAP / AD integration",
      "MFA enforcement",
      "Centralized access control",
    ],
  },
  {
    title: "Mobile & Public Clients",
    description: "PKCE S256 and refresh token rotation for public clients.",
    bullets: [
      "PKCE S256 only",
      "Refresh token rotation and reuse detection",
      "Secure token handling",
    ],
  },
  {
    title: "API Gateway Protection",
    description: "Protect microservices with JWT validation and introspection.",
    bullets: [
      "JWT validation at gateway",
      "Introspection (RFC 7662)",
      "Scope-based routing",
    ],
  },
];

export const comparisonData = [
  { feature: "Vendor lock-in", auth0: "Yes", okta: "Yes", zentra: "No" },
  { feature: "Data sovereignty", auth0: "Limited", okta: "Limited", zentra: "Full" },
  { feature: "Cost model", auth0: "MAU-based", okta: "MAU-based", zentra: "Infrastructure only" },
  { feature: "Security visibility", auth0: "Limited", okta: "Limited", zentra: "Full" },
  { feature: "Customization", auth0: "Limited", okta: "Limited", zentra: "Full" },
  { feature: "Multi-product reuse", auth0: "Partial", okta: "Partial", zentra: "Native" },
];

export const comparisonSection = {
  title: "Why Zentra vs Auth0 / Okta",
  subtitle:
    "Control, security visibility, and no vendor lock-in. Self-hosted compliance control and transparent architecture.",
};

export const roadmapLevels = [
  {
    level: "L1" as const,
    title: "Basic",
    features: ["Core OAuth 2.0 / OIDC flows"],
    current: false,
  },
  {
    level: "L2" as const,
    title: "Production Ready",
    features: ["Stable APIs", "Documentation", "Security baseline"],
    current: false,
  },
  {
    level: "L3" as const,
    title: "Enterprise Hardened",
    features: [
      "PKCE S256 only; refresh rotation + reuse detection",
      "Rate limiting; security headers; token revocation & introspection",
      "Health endpoints; audit trails; secrets via env/vault",
    ],
    current: true,
  },
  {
    level: "L4" as const,
    title: "Cloud Native",
    features: ["Horizontal scaling", "Kubernetes", "Containerization"],
    current: false,
  },
  {
    level: "L5" as const,
    title: "Platform Identity Provider",
    features: ["Platform APIs", "Advanced governance", "Multi-tenant"],
    current: false,
  },
];

export const roadmapSection = {
  title: "Maturity Roadmap",
  subtitle: "Current: L3 Enterprise Hardened. Next: cloud-native scaling. Future: platform identity provider.",
};

export const securityCommitment = [
  "PKCE S256 only; asymmetric signing",
  "Secrets via environment or vault only",
  "Structured logging and audit trails",
  "Security regression tests in CI",
  "No secrets in repository",
];

export const trustSignals = [
  "RFC 6749, 7636, 7009, 7662 compliant",
  "STRIDE-modeled architecture",
  "Risk transparency documented",
  "Governance-first approach",
  "OWASP Top 10 mitigation documented",
  "Self-hosted; zero vendor lock-in",
];

export const ctaContent = {
  headline: "Identity infrastructure for serious systems.\nZentra secures it.",
  primary: "Request Architecture Review",
  secondary: "Download Security Whitepaper",
  tertiary: "Schedule Security Assessment",
};

export const messaging = {
  coreSentence: "You build your product. Zentra secures your identity layer.",
  benefits: [
    "Protect APIs and microservices with RFC-hardened tokens",
    "Centralize identity across products with one authority",
    "Maintain compliance with audit trails and control over data",
    "Scale without MAU-based vendor pricing",
    "Deploy securely with full visibility and no lock-in",
  ],
};

export const contactSection = {
  title: "Request Architecture Review",
  subtitle:
    "Schedule a security assessment or download the evidence-based Security Whitepaper v1.1.",
};

export const seo = {
  metaDescription:
    "Zentra: evidence-based identity infrastructure. OAuth 2.0 and OpenID Connect, RFC-compliant, STRIDE-modeled, risk transparency. For enterprise procurement evaluation.",
  keywords: [
    "OAuth 2.0 server",
    "OpenID Connect provider",
    "evidence-based identity",
    "self-hosted identity provider",
    "RFC 6749",
    "PKCE S256",
    "authorization server",
    "identity infrastructure",
  ],
};
