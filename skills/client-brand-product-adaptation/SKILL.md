---
name: client-brand-product-adaptation
version: 1.0.0
layer: shared-landometer
status: ready
---

# Client Brand Product Adaptation

## Purpose

Adapt a Landometer product, stakeholder demo, or pilot concept to a client brand without replacing product truth, inventing official brand rules, or turning the result into a generic branded template.

## Use when

- a client provides an official website, screenshots, brand PDF, logo assets, or an existing product surface;
- the product must feel native to the client while retaining Landometer evidence and product-quality rules;
- a project needs a client-specific design-system overlay before HTML, slides, or static artifacts are built.

## Do not use when

- no official or client-approved identity evidence exists;
- the request is to create a new official identity for the client;
- the work only needs Landometer branding;
- a screenshot is being treated as proof of hidden tokens, accessibility policy, or legal approval.

## Authority boundary

Use this order:

1. official client brand assets and written rules;
2. approved client product statement and legal/security constraints;
3. client-specific design-system overlay;
4. Landometer Design System for truth, evidence, accessibility, native language, controls, and QA;
5. implementation code as a tested reference only.

Never promote a client-specific assumption into the shared Landometer layer.

## Required inputs

```yaml
clientBrandAdaptation:
  client: ""
  product: ""
  artifactType: ""
  decisionAudience: ""
  officialSources: []
  suppliedScreenshots: []
  approvedAssets: []
  productStatement: ""
  landometerDesignSystem: ""
  delivery: web | slides | document | static
  languages: []
  knownRestrictions: []
```

Stop if `officialSources`, `productStatement`, or `decisionAudience` is unresolved.

## Workflow

### 1. Build an authority map

Separate:

- official rule;
- observed visual behavior;
- implementation choice;
- project proposal;
- unknown.

A screenshot may support “the current page uses a dark navy header” but not “navy #0A3351 is the official corporate token” unless an authoritative source confirms it.

### 2. Extract identity grammar

Record only what evidence supports:

- logo form and placement;
- surface hierarchy;
- color families and semantic use;
- type roles and optical relationships;
- photography character;
- spacing and density;
- line, border, shadow, and radius behavior;
- interaction tone;
- language and editorial posture.

### 3. Separate client identity from product behavior

Create three columns:

| Shared Landometer | Client overlay | Product-specific |
|---|---|---|
| truth, evidence, state, accessibility | color, typography, imagery, premium/civic/editorial posture | workflow, objects, permissions, metrics |

Do not use client color or visual style to redefine data truth, permission state, or product objects.

### 4. Define co-brand hierarchy

Specify:

- primary brand;
- enabling/partner brand;
- logo order and relative prominence;
- approved “powered by” treatment;
- contexts where only one brand appears;
- prohibited merged marks.

### 5. Create semantic tokens

Use project-owned names, not guessed official token names.

```text
client.navy
client.paper
client.gold
semantic.success
interaction.focus
```

Record value, role, contrast, and prohibited use.

### 6. Translate the identity into composition

Define:

- first viewport;
- page rhythm;
- section hierarchy;
- quiet field;
- component boundary;
- image treatment;
- responsive behavior;
- motion character.

Avoid reproducing the client’s public site section-for-section when the new product has a different job.

### 7. Write native-language copy rules

For each language:

- start from the same product truth and evidence;
- write independently;
- preserve material meaning, not sentence order;
- test how headings and body type balance across scripts.

### 8. Produce the overlay

Minimum output:

1. authority and evidence boundary;
2. design principles;
3. token table;
4. typography roles;
5. layout and component rules;
6. co-branding rules;
7. content/voice rules;
8. responsive/accessibility rules;
9. asset and rights checklist;
10. QA and versioning.

## Output contract

```yaml
outputs:
  designSystemOverlayMd: required
  tokenTable: required
  coBrandRules: required
  componentInventory: required
  sourceBoundary: required
  unresolvedItems: required
  implementationExamples: optional
```

## Quality gates

- No invented official brand rule.
- No logo recreation.
- No client-specific rule promoted to Landometer-wide truth.
- No product behavior inferred from visual style.
- At least one brand-specific composition cue remains after logos and names are masked.
- Copy remains specific to the client decision and product.
- Accessibility, privacy, and evidence rules are not weakened for visual fidelity.

## Failure modes

Reject or revise when:

- the result is merely a color swap;
- every section becomes a rounded SaaS card;
- “premium” is expressed only through black and gold;
- stock luxury imagery replaces real product meaning;
- co-branding makes Landometer compete with the client;
- the design claims official status without authority.

## Invocation examples

```text
Use client-brand-product-adaptation.
Create a design-system overlay for [client] × Landometer from the supplied
website, screenshots, official assets, and product statement.
Separate official evidence, observed behavior, and proposed project rules.
```

```text
Use client-brand-product-adaptation in refresh mode.
Compare the current implementation with the approved overlay and return only
material visual, language, accessibility, and co-brand deviations.
```
