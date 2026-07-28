---
name: high-trust-service-value-case
version: 1.0.0
layer: shared-landometer
status: ready
---

# High-Trust Service Value Case

## Purpose

Turn a high-trust service brief into a realistic value proposition, emotional-pain model, joint unfair-advantage case, and tangible scenarios that stakeholders and frontline advisors can recognize.

This skill is suitable for private banking, family office, enterprise advisory, confidential land services, and other contexts where the client is not merely completing a task but managing reputation, uncertainty, family dynamics, or strategic discretion.

## Use when

- the functional workflow is already understood but the value feels abstract;
- a stakeholder demo explains features without making the client need believable;
- two organizations contribute complementary advantages;
- the service needs concrete cases without exposing real client information.

## Do not use when

- the emotional pain is being invented from stereotypes;
- the product is a low-trust utility where this framing would be inflated;
- there is no evidence that the proposed capability exists or can be piloted;
- the output would imply financial, legal, investment, or business outcomes that are not supported.

## Required inputs

```yaml
highTrustValueCase:
  serviceName: ""
  targetClients: []
  clientDecision: ""
  currentAlternatives: []
  knownFrictions: []
  relationshipOwner: ""
  capabilityPartners: []
  existingEvidence: []
  proposedCapabilities: []
  prohibitedClaims: []
  stakeholderDecision: ""
```

Stop if `clientDecision`, `relationshipOwner`, or `stakeholderDecision` is empty.

## Evidence boundary

Classify every statement as:

- observed;
- supplied by the client organization;
- inferred and plausible;
- proposed for pilot;
- unresolved.

Never write an inferred emotional tension as a fact about a real client group. Use language such as “a plausible tension to validate” when evidence is limited.

## Workflow

### 1. Name the decision before the product

Use one sentence:

```text
[client] needs to decide [decision] while protecting [what matters].
```

### 2. Map four kinds of pain

| Pain | Question |
|---|---|
| Functional | What work is slow, fragmented, or difficult? |
| Emotional | What creates anxiety, fatigue, embarrassment, or hesitation? |
| Social/reputational | What might reveal strategy, status, or family disagreement? |
| Decision | What trade-off is hard to compare or explain? |

Use only pains that change the service design.

### 3. Map current alternatives

Examples:

- searching public listings;
- relying on multiple brokers;
- asking a relationship manager to coordinate manually;
- keeping family discussions in messages and spreadsheets;
- delaying the decision.

Describe the real limitation, not a caricature.

### 4. Define the value proposition

Use this structure:

```text
For [client with a sensitive decision],
[service] helps [make progress]
by [specific mechanism],
while preserving [trust/discretion/control],
unlike [current alternative and its limitation].
```

### 5. Separate contribution and joint advantage

Create a matrix:

| Party | Existing asset/capability | Evidence | Difficult to copy because | Limits |
|---|---|---|---|---|

Then write the joint result. Do not call a capability “unfair” merely because it uses AI or data.

A credible unfair advantage usually combines:

- trusted relationship;
- proprietary or hard-to-assemble supply;
- accumulated operating knowledge;
- permission or governance capability;
- distribution or frontline presence;
- feedback from real outcomes;
- integration of context that competitors usually hold separately.

### 6. Create tangible cases

Produce three to five cases with different decisions, not just different personas.

Each case contains:

```yaml
case:
  decision: ""
  emotionalPain: ""
  currentAlternative: ""
  relationshipOwnerRole: ""
  enablingPartnerRole: ""
  serviceMoment: ""
  evidenceNeeded: ""
  whatClientFeelsIfItWorks: ""
  whatMustNotBeClaimed: ""
```

### 7. Turn value into product behavior

For each pain, specify the design response:

| Pain | Product response | Service response | Proof |
|---|---|---|---|
| Decision fatigue | smaller shortlist, comparison | advisor curation | client relevance rating |
| Discretion | permission ladder, client reference | controlled outreach | zero unauthorized disclosure |
| Fear of missing out | multi-source candidate pool | advisor explains coverage | source coverage and limitations |
| Family disagreement | versioned brief, consistent comparison | advisor facilitates | shared decision and explicit feedback |

### 8. Build the stakeholder story

Recommended order:

```text
client tension
→ current workaround
→ joint capability
→ tangible case
→ product proof
→ trust boundary
→ pilot decision
```

### 9. Red-team the value case

Ask:

- Could this be pasted into any consultancy deck?
- Is the pain specific enough to change product design?
- Is the advantage based on evidence or only aspiration?
- Does the client benefit appear before platform features?
- Is the relationship owner still visible?
- Is the proposal bounded as a pilot where evidence is missing?

## Output contract

```yaml
outputs:
  valueProposition: required
  painMap: required
  currentAlternativeMap: required
  jointAdvantageMatrix: required
  tangibleCases: required
  productBehaviorMap: required
  stakeholderNarrative: required
  evidenceBoundary: required
  validationQuestions: required
```

## Quality gates

- No fabricated client quotes.
- No claim that wealth removes emotional or decision pain.
- No guarantee of return, availability, deal completion, or confidentiality.
- The relationship owner and enabling partner have distinct roles.
- Every advantage has evidence, a pilot plan, or an unresolved label.
- Every case includes a material trade-off or limitation.
- The proposed product response is visible in the mockup.

## Invocation examples

```text
Use high-trust-service-value-case.
From this product brief, create a realistic pain map, joint unfair advantages,
and three tangible cases for a stakeholder demo. Mark all inferred client
pain as hypotheses to validate.
```

```text
Use high-trust-service-value-case to red-team the current landing page.
Identify where it describes features before client tension, where advantages
are generic, and which cases do not prove a unique service capability.
```
