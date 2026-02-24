# ZENTRA Repositioning — Deliverables Summary

## 1. Homepage Copy (Implemented)

- **Hero**: "Zentra — Security-First Identity Infrastructure" with subheadline emphasizing enterprise OAuth/OIDC authority, self-hosted, RFC-compliant, zero vendor lock-in, built for architects.
- **CTAs**: Request Architecture Review (primary), Download Security Whitepaper (secondary), Schedule Security Assessment (tertiary).
- **Problem**: Identity fragmentation reframed with "centralized identity authority" and "compliance evidence."
- **What Zentra Solves**: RFC-hardened authorization server; highlights include PKCE (S256 only), refresh token rotation + reuse detection, RFC 7662 introspection.
- **Security Highlights**: New section — PKCE S256 only, asymmetric signing, refresh rotation + reuse detection, RFC 6749/7636/7009/7662, audience validation, rate limiting, secrets via env/vault.
- **Protocol Compliance Matrix**: Table (RFC, name, compliance level, in practice).
- **Core Capabilities**: Security Architecture, Clean Architecture, Microservices-Ready, Compliance Evidence (no SOC 2/ISO certified claims; "controls support your audit path").
- **Architecture Overview**: Flow + bullets (Authorization Server endpoints, JWKS, token lifecycle, revocation, introspection, gateway enforcement, Clean Architecture).
- **Enterprise Trust**: Key rotation, replay prevention, layer separation, security regression tests, CI security gates, monitoring/governance.
- **Use Cases**: SaaS Platform, Enterprise SSO, Mobile & Public Clients, API Gateway Protection (copy tightened).
- **Why Zentra vs Auth0/Okta**: Control, security visibility, no lock-in; comparison table includes "Security visibility" and "Cost model" (MAU-based vs infrastructure only); no "75–95% cost savings."
- **Maturity Roadmap**: Current = L3 Enterprise Hardened (PKCE S256, refresh rotation + reuse detection, rate limiting, revocation/introspection, health, audit, secrets); Next = L4 Cloud Native; Future = L5 Platform Identity Provider.
- **Security Commitment**: Concrete items (PKCE S256, asymmetric signing, secrets via env/vault, structured logging, security regression tests, no secrets in repo).
- **Trust Signals**: RFC-compliant, OWASP Top 10 mitigation documented, Clean Architecture, .NET 8, audit logging, self-hosted; no "OWASP compliant" or "Multi-tenant ready (roadmap)."
- **CTA section**: "Identity infrastructure for serious systems. Zentra secures it." with enterprise CTAs.
- **Contact**: "Request Architecture Review" / "Schedule a security assessment or download the latest L3 security whitepaper."

## 2. Security Page Content (Whitepaper)

- Executive Summary: "Compliance Evidence" card updated to state we do not claim certification; controls documented for your audit.
- Protocol standards and compliance mapping remain; ensure no "SOC 2 compliant" or "ISO certified" without audit. Compliance mapping uses "alignment" / "considerations" language — keep as evidence support, not certification.

## 3. Compliance Matrix Table

Implemented in `ProtocolComplianceMatrix.tsx` and `content/site.ts`:

| RFC     | Name             | Compliance level | In practice |
|---------|------------------|------------------|-------------|
| RFC 6749| OAuth 2.0        | Compliant        | Authorization code, client credentials, refresh; revocation. |
| RFC 7636| PKCE             | S256 only        | code_challenge_method S256 enforced for public clients. |
| RFC 7009| Token Revocation | Compliant        | Revocation endpoint; refresh invalidation on revoke. |
| RFC 7662| Token Introspection | Compliant     | Introspection for gateway and resource servers. |
| RFC 7519| JWT              | Compliant        | Access tokens as JWTs; RS256/ES256; standard claims. |
| RFC 7517| JWK / JWKS       | Compliant        | JWKS endpoint; key rotation supported. |

## 4. Architecture Explanation Section

Implemented in `ArchitectureOverview.tsx`: flow (Client → API Gateway → Zentra → Resource Services → Data) plus bullets for Authorization Server endpoints, JWKS, token lifecycle, revocation/introspection, gateway enforcement, Clean Architecture.

## 5. Enterprise Comparison Section

Implemented in `Comparison.tsx` with `comparisonSection` from site.ts. Title: "Why Zentra vs Auth0 / Okta." Subtitle: "Control, security visibility, and no vendor lock-in. Self-hosted compliance control and transparent architecture." Table: Vendor lock-in, Data sovereignty, Cost model, Security visibility, Customization, Multi-product reuse.

## 6. Maturity Roadmap Section

Implemented in `Roadmap.tsx` with `roadmapSection` and `roadmapLevels`. Current = L3 Enterprise Hardened. Subtitle: "Current: L3 Enterprise Hardened. Next: cloud-native scaling. Future: platform identity provider."

## 7. CTA Redesign Suggestions

- **Primary**: "Request Architecture Review" — used in Hero, Header, CTA block, Contact heading.
- **Secondary**: "Download Security Whitepaper" — links to `/security-whitepaper`.
- **Tertiary**: "Schedule Security Assessment" — used in CTA block (all point to #contact or whitepaper).
- Replaced generic "Get Started" / "Request Demo" with the above. Optional future: "Deploy Zentra Securely" / "Review Security Architecture" as button variants if you add a docs/deploy page.

## 8. SEO-Optimized Meta Description

In `content/site.ts` → `seo.metaDescription` and used in `app/layout.tsx`:

"Zentra: security-first identity infrastructure. Self-hosted OAuth 2.0 and OpenID Connect, RFC-compliant, PKCE S256 only, refresh token rotation. For enterprise architects."

Keywords: OAuth 2.0 server, OpenID Connect provider, enterprise identity platform, self-hosted identity provider, RFC 6749, PKCE S256, authorization server, identity infrastructure.

## 9. Tagline Options (5 Variations)

In `content/site.ts` → `siteConfig.taglineOptions`:

1. Security-First Identity Infrastructure *(current default)*
2. Enterprise OAuth & OpenID Connect Authority
3. Identity Infrastructure for Serious Systems
4. Self-Hosted. RFC-Compliant. Zero Lock-In.
5. Enterprise-Grade Identity, Without the Vendor.

## 10. Tone Consistency Validation

- **Confident, precise, technical but readable**: Headlines and body use "RFC-compliant," "PKCE S256 only," "refresh token rotation and reuse detection," "Authorization Server," "JWKS," "Clean Architecture."
- **No exaggeration**: Removed "75–95% cost savings," "Increase IP valuation," "Build SaaS without worrying about auth."
- **No vague compliance claims**: Removed unqualified "SOC 2 readiness," "ISO 27001," "HIPAA considerations" from trust badges; replaced with "Compliance Evidence" and "controls support your audit path"; whitepaper compliance card states we do not claim certification.
- **Enterprise, architect-level**: "Built for architects, not hobby projects," "Identity infrastructure for serious systems," "Request Architecture Review," "Schedule Security Assessment."
- **Security-first**: Security Highlights and Enterprise Trust sections lead with implementation details (PKCE S256, asymmetric signing, key rotation, regression tests, CI gates).

---

All content is driven from `content/site.ts`. To switch taglines, set `siteConfig.tagline` to one of `taglineOptions` or another variant.
