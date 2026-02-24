export const siteConfig = {
  name: "Zentra",
  company: "FBT",
  companyFull: "Future Beyond Tech",
  tagline: "Enterprise-Grade Identity & Access Management Platform",
  description:
    "Secure OAuth 2.0 & OpenID Connect Infrastructure for Modern SaaS and Microservices.",
  url: "https://zentra.futurebeyondtech.com",
  ogImage: "/og.png",
};

export const heroContent = {
  headline: "Zentra — Enterprise-Grade Identity & Access Management Platform",
  subheadline:
    "Secure OAuth 2.0 & OpenID Connect Infrastructure for Modern SaaS and Microservices.",
  ctaPrimary: "Request Demo",
  ctaSecondary: "Download Architecture Overview",
};

export const problemContent = {
  title: "Identity Fragmentation",
  subtitle: "Without centralized identity, enterprises face:",
  without: [
    "Multiple user databases across products",
    "Inconsistent password and policy enforcement",
    "No single sign-on (SSO) across applications",
    "Scattered audit logs and compliance gaps",
    "Security vulnerabilities at integration boundaries",
  ],
  withZentra: [
    "Single source of truth for identity",
    "Unified password and policy controls",
    "SSO across web, mobile, and APIs",
    "Centralized audit trails for compliance",
    "Consistent security at every boundary",
  ],
};

export const whatZentraSolves = {
  title: "What Zentra Solves",
  intro:
    "Zentra addresses identity fragmentation, token lifecycle, and access control at scale.",
  solutions: [
    "Identity fragmentation across products and services",
    "Token lifecycle management (issue, refresh, revoke)",
    "Centralized RBAC and scope enforcement",
    "Multi-product SSO with one identity layer",
    "Microservice authentication consistency",
  ],
  highlights: [
    { term: "Authorization Code Flow", desc: "Standard OAuth 2.0 for web apps" },
    { term: "PKCE", desc: "For mobile and public clients" },
    { term: "Client Credentials", desc: "Machine-to-machine and service accounts" },
    { term: "Refresh token rotation", desc: "Short-lived access, secure refresh" },
    { term: "Token introspection", desc: "API Gateway and resource server validation" },
    { term: "JWKS", desc: "Distributed JWT validation without shared secrets" },
  ],
};

export const coreCapabilities = {
  security: {
    title: "Security Architecture",
    items: [
      "JWT signing (RS256 / ES256)",
      "Refresh token rotation",
      "MFA (Email / SMS / Authenticator)",
      "LDAP / Active Directory integration",
      "Role & scope enforcement",
      "Token revocation endpoint",
      "PKCE enforcement",
      "Audit trails",
    ],
  },
  architecture: {
    title: "Clean Architecture Implementation",
    items: [
      "Domain → Application → Infrastructure → API",
      "Repository pattern",
      "Config-driven behavior",
      "Multi-database support",
    ],
  },
  microservices: {
    title: "Microservices-Ready",
    items: [
      "Stateless token validation",
      "JWKS endpoint",
      "API Gateway integration",
      "Scope-based routing",
      "Header propagation (X-User-ID)",
    ],
  },
  compliance: {
    title: "Compliance & Governance",
    items: [
      "SOC 2 readiness",
      "GDPR alignment",
      "HIPAA considerations",
      "ISO 27001",
      "OWASP Top 10 mitigation",
      "Audit logs and access controls",
      "Encryption in transit",
      "Secrets management policy",
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
    description: "Unified identity for web, mobile, and API — e.g. RentFlow-style products.",
    bullets: [
      "Web + Mobile + API under one identity",
      "SSO across products",
      "Unified policy and RBAC",
    ],
  },
  {
    title: "Enterprise SSO",
    description: "HR, Finance, IT systems with corporate directory integration.",
    bullets: [
      "LDAP / AD integration",
      "MFA enforcement",
      "Centralized access control",
    ],
  },
  {
    title: "Mobile PKCE Authentication",
    description: "Public clients with secure token handling.",
    bullets: [
      "PKCE for public clients",
      "Secure token storage",
      "Refresh token rotation",
    ],
  },
  {
    title: "API Gateway Protection",
    description: "Protect microservices and APIs with JWT validation.",
    bullets: [
      "JWT validation at gateway",
      "Introspection support",
      "Scope-based routing",
    ],
  },
];

export const comparisonData = [
  { feature: "Vendor lock-in", auth0: "Yes", okta: "Yes", zentra: "No" },
  { feature: "Data sovereignty", auth0: "Limited", okta: "Limited", zentra: "Full" },
  { feature: "Cost at scale", auth0: "High", okta: "Very High", zentra: "Infrastructure only" },
  { feature: "Customization", auth0: "Limited", okta: "Limited", zentra: "Full" },
  { feature: "Multi-product reuse", auth0: "Partial", okta: "Partial", zentra: "Native" },
];

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
    current: true,
  },
  {
    level: "L3" as const,
    title: "Enterprise Hardened",
    features: ["Rate limiting", "Token encryption at rest", "Health endpoints", "Distributed tracing"],
    current: false,
  },
  {
    level: "L4" as const,
    title: "Cloud Native",
    features: ["Containerization", "Kubernetes", "Horizontal scaling"],
    current: false,
  },
  {
    level: "L5" as const,
    title: "Platform Identity Provider",
    features: ["Multi-tenant", "Advanced governance", "Platform APIs"],
    current: false,
  },
];

export const securityCommitment = [
  "Security First",
  "Zero Trust Architecture",
  "No secrets in repo",
  "Structured logging",
  "Observability built-in",
];

export const trustSignals = [
  "Secure by design",
  "Built on .NET 8",
  "Clean Architecture enforced",
  "CQRS + Vertical Slice",
  "OWASP compliant",
  "Audit logging",
  "Multi-tenant ready (roadmap)",
];

export const ctaContent = {
  headline: "Focus on your business.\nZentra secures your identity layer.",
  primary: "Schedule Architecture Call",
  secondary: "Download Security Whitepaper",
};

export const messaging = {
  coreSentence:
    "You build your product. Zentra protects your identity layer.",
  benefits: [
    "Build SaaS without worrying about auth",
    "Scale to millions without vendor pricing explosion",
    "Centralize identity across products",
    "Maintain compliance easily",
    "Protect APIs and microservices correctly",
  ],
};
