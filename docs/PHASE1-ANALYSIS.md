# Phase 1 — ZENTRA Site Analysis

## Weaknesses

| Area | Issue |
|------|--------|
| **Overstatements** | "75–95% cost savings" is unverifiable; "Increase IP valuation" is vague marketing. |
| **Compliance** | "SOC 2 readiness", "ISO 27001", "HIPAA considerations" listed without audit/certification; implies compliance rather than evidence. |
| **Trust signals** | "OWASP compliant" — OWASP is guidance, not a certification; "Multi-tenant ready (roadmap)" weakens trust. |
| **Maturity** | Site says "L2 (Production Ready) current" while brief asks for L3 Enterprise Hardened positioning; roadmap shows L3 as future, not current. |
| **Security claims** | "PKCE enforcement" not specified as S256-only; no mention of refresh token reuse detection, audience validation, or rate limiting in hero/capabilities. |
| **Tone** | "Why Not Auth0 / Okta?" is combative; benefits list includes "Build SaaS without worrying about auth" (soft, non-architect). |
| **CTAs** | "Request Demo" / "Download Architecture Overview" are generic; no "Request Architecture Review" or "Security Assessment". |
| **Compliance evidence** | Whitepaper uses "Designed with SOC 2, GDPR, HIPAA, ISO 27001 in mind" and "alignment" language but no "we implement X; you still need to complete Y for certification". |

## Credibility Gaps

- No explicit RFC callouts (6749, 7636, 7009, 7662) on homepage.
- No protocol compliance matrix (RFC → level → in-practice meaning).
- No security regression test or CI security gates mentioned.
- No key rotation model or token lifecycle diagram.
- "Zero Trust Architecture" and "Security First" are taglines without concrete implementation bullets.
- Empty compliance badges: SOC 2 / ISO listed without "readiness" vs "audited" distinction.

## Positioning Improvements

- Reposition as **L3 Enterprise Hardened** (current), not L2.
- Lead with **security-first identity infrastructure** and **enterprise OAuth/OIDC authority**.
- Add **Security Highlights** section: PKCE S256 only, asymmetric signing (RS256/ES256), refresh rotation + reuse detection, RFC compliance, audience validation, rate limiting, secrets via env/vault.
- Add **Protocol Compliance Matrix** table (RFC, compliance level, in practice).
- Add **Architecture Overview**: Authorization Server, JWKS, token lifecycle, revocation, introspection, gateway enforcement, Clean Architecture.
- Add **Enterprise Trust**: key rotation, replay prevention, layer separation, security test suite, CI gates.
- **Why Zentra vs Auth0/Okta**: emphasize control, security visibility, no lock-in, self-hosted compliance control, transparent architecture; remove unverifiable cost percentages.
- **Maturity roadmap**: Current = L3 Enterprise Hardened; Next = Cloud-native scaling; Future = Platform Identity Provider.
- **CTAs**: Request Architecture Review, Download Security Whitepaper, Schedule Security Assessment; replace generic "Get Started" with "Deploy Zentra Securely" / "Review Security Architecture".
- **Remove**: SOC 2/ISO certified claims unless audited; generic buzzwords; "OWASP compliant" (replace with "OWASP Top 10 mitigation" or similar evidence-based language).
