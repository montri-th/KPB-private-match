# KPB Reusable Skill Catalog v1.0

This catalog separates reusable Landometer workflow skills from the KPB Private Property product-specific domain pack.

## Skill map

| Skill | Layer | Use it for | Main output |
|---|---|---|---|
| `client-brand-product-adaptation` | Shared Landometer | Extract and govern a client-specific design overlay from official sources and supplied evidence | Client design-system overlay `.md` |
| `high-trust-service-value-case` | Shared Landometer | Make emotional pain, value proposition, joint unfair advantages, and tangible cases specific and believable | Value-case brief and demo content |
| `executive-interactive-demo` | Shared Landometer | Turn Product Statement + design overlay into a five-minute stakeholder site with a working mockup | Static interactive website + QA |
| `github-pages-release-operator` | Shared Landometer | Update an existing repository, publish on GitHub Pages, verify live content, and clean temporary helpers | Live URL + release evidence |
| `kpb-private-property-domain` | KPB product-specific | Preserve the five-question brief, opportunity eligibility, explainable Top 10, client snapshot, disclosure ladder, and double opt-in | KPB product model and constraints |

## Recommended call order

### From an early brief to a live demo

```text
kpb-private-property-domain
→ high-trust-service-value-case
→ client-brand-product-adaptation
→ executive-interactive-demo
→ github-pages-release-operator
```

### Improve only the stakeholder value story

```text
kpb-private-property-domain
→ high-trust-service-value-case
→ executive-interactive-demo (refresh mode)
```

### Adapt the concept for another private-service client

```text
high-trust-service-value-case
→ client-brand-product-adaptation
→ executive-interactive-demo
```

Do not load `kpb-private-property-domain` for another client or product unless the user explicitly wants the KPB product model as a comparison reference.

### Publish an already approved static site

```text
github-pages-release-operator
```

## Shared versus product-specific boundary

Shared skills may be reused across Land, Location, and Living products when their own Product Statement supports the workflow. They must remain product-neutral and must not import KPB assumptions about private clients, Top 10 properties, five questions, or double opt-in.

The KPB domain skill is intentionally narrow. It owns KPB Private Property objects and flow only.

## Quick invocation

```text
Use the KPB reusable skill catalog.
Mode: full_pipeline
Product-specific skill: kpb-private-property-domain
Shared skills: high-trust-service-value-case,
client-brand-product-adaptation, executive-interactive-demo,
github-pages-release-operator
```

## Retrieval rule

Before modifying the KPB demo:

1. read `../docs/kpb_private_banking_experience_design_system_v1_0.md`;
2. read `kpb-private-property-domain/SKILL.md`;
3. load only the shared skill needed for the requested task;
4. inspect current repository files and recent commits before replacing anything;
5. verify the live GitHub Pages URL before reporting publish success.

## Storage status

These are source skills stored in the project repository and release package. They are not an account-level ChatGPT installation. A future agent can use them by reading the relevant `SKILL.md` file or by including this repository as project context.
