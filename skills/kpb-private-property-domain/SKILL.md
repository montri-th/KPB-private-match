---
name: kpb-private-property-domain
version: 1.0.0
layer: product-specific
product: KPB Private Property Opportunities
status: ready
---

# KPB Private Property Domain

## Purpose

Provide the product-specific objects, workflow, evidence boundaries, privacy model, and demo requirements for KPB Private Property Opportunities.

This skill must be combined with shared skills for client-brand adaptation, value-case development, executive demo design, and GitHub Pages release. It must not be treated as a shared Landometer rule.

## Product position

KPB Private Property Opportunities is a Private Banker–led service that turns a client family’s context into a small, explainable, permission-safe set of property opportunities and a controlled path to a mutually approved introduction.

It is not a public marketplace, listing portal, automated investment decision, or guarantee of property availability.

## Current and stabilized scale

Current supplied baseline:

- 781 families;
- 4,591 land plots;
- 265 condominium units.

Stabilized architecture target:

- approximately 50,000 land plots;
- approximately 10,000 condominium units;
- sources may later include KBank NPA, BAM, and other approved providers.

Targets must always be labelled as targets. Property-record count must not be presented as available-opportunity count.

## Use when

- defining or updating the KPB Private Property Product Statement;
- designing the banker workflow;
- generating sample scenarios or Top 10 mockups;
- defining permission, disclosure, or double-opt-in behavior;
- reviewing whether a demo remains faithful to the product concept;
- preparing the pilot scope and acceptance criteria.

## Do not use when

- designing another KPB product;
- designing a general Landometer property marketplace;
- describing KBank NPA, BAM, or partner data as available before rights and integration are confirmed;
- using real client or owner information in a public prototype.

## Authority boundary

Use this order:

1. approved KPB Private Property Product Statement;
2. confirmed KPB business, legal, compliance, security, and data-owner decisions;
3. this skill;
4. KPB project design system;
5. shared Landometer product-quality rules.

When an operational field is not approved, label it proposed or unresolved. Do not fill gaps with common private-banking or real-estate assumptions.

## Core objects

### Property Record

A normalized record representing a land plot or condominium unit from one or more sources.

Required concepts:

```yaml
propertyRecord:
  propertyId: ""
  propertyVersion: ""
  propertyType: land | condominium
  sourceRecords: []
  identityResolutionStatus: ""
  locationBoundary: ""
  rightsStatus: ""
  freshness: ""
  qualityStatus: ""
```

### Owner Relationship

The relationship and permission context associated with an owner or authorized representative.

```yaml
ownerRelationship:
  ownerReference: ""
  relationshipOwner: ""
  contactBasis: ""
  permittedUses: []
  permittedDisclosureLevels: []
  readiness: ""
  lastConfirmedAt: ""
```

### Available Opportunity

A Property Record that has passed the checks required for a specific client context.

```yaml
availableOpportunity:
  propertyId: ""
  clientBriefId: ""
  hardConstraintsPassed: true
  ownerReadiness: ""
  disclosureLevel: ""
  sourceRightsPassed: true
  freshnessPassed: true
  humanReviewStatus: ""
```

A Property Record is not automatically an Available Opportunity.

### Client Brief

The bank-reviewed context that defines the client decision.

```yaml
clientBrief:
  briefId: ""
  clientReference: ""
  objective: ""
  intendedUse: ""
  hardConstraints: []
  preferences: []
  assumptions: []
  exclusions: []
  economics: ""
  timing: ""
  decisionParticipants: []
  confidentiality: ""
  unresolvedQuestions: []
  reviewedBy: ""
  briefVersion: ""
```

### Client Match

The explainable relationship between one client brief and one available opportunity.

```yaml
clientMatch:
  briefId: ""
  propertyId: ""
  methodVersion: ""
  fitCategory: core | alternative | strategic
  score: null
  supportingSignals: []
  strongestCounterSignal: ""
  assumptions: []
  missingEvidence: []
  confidence: ""
  nextVerification: ""
```

### Client Snapshot

The versioned Top 10 page prepared for a single client reference.

```yaml
clientSnapshot:
  snapshotId: ""
  clientReference: ""
  briefVersion: ""
  opportunityVersions: []
  disclosureLevel: ""
  publishedAt: ""
  expiresAt: ""
  revokedAt: null
  bankerOwner: ""
```

### Qualified Introduction

An introduction that has passed client and owner consent plus the agreed disclosure rules.

```yaml
qualifiedIntroduction:
  clientInterestConfirmed: true
  bankerIntentValidated: true
  ownerReadinessReconfirmed: true
  ownerConsentConfirmed: true
  disclosureLevelApproved: true
  appointmentOrNextStep: ""
```

## Five-question probing model

The Private Banker uses five question groups. The system may ask follow-ups, but the client should not be forced through a long form.

### 1. Decision and intended use

Resolve:

- buy, lease, explore, or open to multiple structures;
- investment, operating business, family use, legacy, or another stated purpose;
- expected result;
- decision owner and users.

### 2. Location logic

Resolve:

- target geography;
- travel or catchment limit;
- infrastructure and access;
- why the location matters to the decision;
- flexibility and substitution logic.

A district name alone is not sufficient when the real need is a catchment, access, or operational condition.

### 3. Property constraints

Resolve:

- minimum and preferred size;
- access and frontage;
- building or land condition;
- parking, landscape, utilities, or other physical needs;
- hard constraints versus preferences.

### 4. Economics and transaction

Resolve:

- purchase or lease range;
- acceptable transaction structure;
- duration;
- timing of capital or operating commitment;
- return or value logic only when the client states it and the service can support it.

The system must not infer investment suitability or expected return without an approved method and evidence.

### 5. Timing and decision dynamics

Resolve:

- desired decision date;
- readiness to view or engage;
- family or business participants;
- confidentiality level;
- what would make the client proceed, pause, or reject.

## Matching and review

### Candidate pipeline

```text
source intake
→ normalize and deduplicate
→ rights and field-permission check
→ owner relationship/readiness check
→ hard-constraint filter
→ land and location fit
→ evidence quality and freshness
→ explainable ranking
→ Private Banker and Match Desk review
→ client snapshot
```

### Ranking rules

- Hard constraints are binary gates, not weighted preferences.
- Fit scores compare only candidates produced by the same brief and method version.
- The strongest counter-signal appears beside the reason for fit.
- Missing or stale evidence is visible.
- Low permission or owner-readiness status may block publication regardless of score.
- A candidate can be included as an alternative only when the violated preference is explicit and no hard constraint is violated.
- The system may return fewer than 10 opportunities when quality or permission is insufficient.

### Human review

Before client publication, the reviewer checks:

- client brief accuracy;
- hard-constraint application;
- duplicate and property identity;
- owner readiness;
- source rights;
- disclosure level;
- rationale and counter-signal;
- freshness and limitation;
- client-safe copy and image;
- version and expiry.

## Disclosure ladder

Illustrative model pending official approval:

| Level | Content |
|---|---|
| D1 | property type, broad area, generalized economics, fit reason |
| D2 | client-safe image, approximate area, richer rationale and trade-off |
| D3 | precise property details without owner identity |
| D4 | owner identity/contact under mutual consent |
| D5 | diligence documents under explicit access and retention rules |

Every field has a maximum allowed disclosure level. A page-level D2 setting must not expose a D4 field.

## Client response model

Minimum explicit responses:

- interested;
- keep for consideration;
- not suitable.

Optional structured reason:

- location;
- economics;
- size or physical fit;
- timing;
- missing evidence;
- family preference;
- other.

Do not infer interest from scrolling, dwell time, or repeated opening.

## Double opt-in

The service must preserve this order:

```text
client interest
→ banker validation
→ owner readiness reconfirmation
→ owner consent to this client introduction
→ approved disclosure
→ appointment or diligence step
```

The system must not disclose owner identity or contact merely because the client clicked “interested.”

## Client page requirements

The client page contains:

- KPB-primary identity;
- client reference and snapshot version;
- brief summary;
- curated opportunity cards;
- compare and explicit response controls;
- why this fits;
- strongest trade-off;
- freshness and confidence;
- what is still unknown;
- what happens after interest;
- expiry, confidentiality, and access context;
- Private Banker contact route.

A prototype may simulate OTP locally, but must label it as demonstration-only.

## Privacy and security boundary

A public demo must use illustrative data only.

Production requires:

- bank-approved authentication;
- authorization and role mapping;
- client and owner consent records;
- field-level disclosure;
- expiry and revocation;
- audit trail;
- secure interest and appointment actions;
- retention and deletion rules;
- incident response;
- source-rights governance.

Noindex is not access control.

## Product value cases

Use at least three decision cases in stakeholder communication:

1. long-term capital allocation through land acquisition;
2. discreet site search for a flagship operating business;
3. family alignment through a consistent, versioned shortlist.

Each case must be labelled illustrative until validated with KPB stakeholders.

## Metrics

### North Star

`Mutually Consented Qualified Introduction Rate`

### Supporting measures

- client-rated shortlist relevance;
- brief-to-reviewed-shortlist time;
- percentage of published candidates with traceable permission;
- correction rate;
- owner reconfirmation time;
- client comprehension of reasons and trade-offs;
- zero unauthorized identity disclosure.

### Anti-metrics

Do not treat result count, page views, share clicks, time on page, or client-link count as proof of value.

## Demo requirements

A concept demo should show:

1. five-question capture;
2. structured brief;
3. candidate filtering and explainable matching;
4. human Top 10 review;
5. client-only snapshot;
6. explicit interest;
7. controlled introduction timeline;
8. trust guardrails;
9. pilot approval ask.

The demo should clearly distinguish local simulation from live integration.

## Output contract

When this skill is invoked, return or enforce:

```yaml
outputs:
  productObjects: required
  fiveQuestionBrief: required
  candidateEligibility: required
  explainableRanking: required
  humanReview: required
  disclosureModel: required
  clientSnapshot: required
  doubleOptIn: required
  metrics: required
  prototypeBoundary: required
```

## QA gates

- Property Record is not called Available Opportunity without readiness and permission.
- Current counts and target counts are labelled correctly.
- No unconfirmed KBank NPA, BAM, or partner integration is described as live.
- Hard constraints remain separate from scores.
- Every ranked candidate has a counter-signal and next check.
- Client interest does not bypass owner consent.
- Public demo contains no real client or owner data.
- KPB remains relationship owner; Landometer remains enabling product and data layer.
- No product-specific rule is generalized to all Landometer products.

## Invocation examples

```text
Use kpb-private-property-domain.
Update the Product Statement and demo flow while preserving the five-question
brief, permission-safe Top 10, client snapshot, and double opt-in boundaries.
```

```text
Use kpb-private-property-domain to audit this mockup.
List every place where a Property Record is presented as available, a score
hides a hard constraint, or client interest is confused with owner consent.
```
