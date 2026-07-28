# KBank Private Property Opportunities — Interactive Concept

Static, no-backend stakeholder prototype for the proposed KBank Private Property Opportunities service, powered by Landometer.

## Live reference

The current GitHub Pages site is published from the repository root.

## Design system

- `docs/kpb_private_banking_experience_design_system_v1_0.md`
- Project-derived KPB experience overlay, not the official enterprise-wide KBank or KBank Private Banking design system
- Covers client tension, KPB × Landometer value, co-branding, tokens, typography, product flow, permission, disclosure, responsive behavior, accessibility, QA, and release boundaries

## Reusable skills

Start with `skills/README.md` and load only the skill needed for the task.

Shared Landometer skills:

- `client-brand-product-adaptation`
- `high-trust-service-value-case`
- `executive-interactive-demo`
- `github-pages-release-operator`

KPB product-specific skill:

- `kpb-private-property-domain`

The layer boundary is intentional: KPB client assumptions, five probing questions, Top 10 properties, and double opt-in must not be promoted into the shared Landometer layer.

## Run locally

```bash
python -m http.server 8080
```

Open `http://localhost:8080`.

## Important

- All client and property data are illustrative.
- The OTP is a front-end demo only (`246810`).
- Production authentication, authorization, audit, consent, data rights, and secure interest APIs are intentionally not implemented in this mockup.
- `noindex` is not access control.
