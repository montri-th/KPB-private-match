---
name: executive-interactive-demo
version: 1.0.0
layer: shared-landometer
status: ready
---

# Executive Interactive Demo

## Purpose

Transform an approved Product Statement and design-system overlay into an interactive static website that helps executives understand the client need, inspect a believable product experience, assess trust and delivery risk, and approve one clear next step.

## Use when

- a board, CEO, CFO, business sponsor, product committee, or partner must approve a pilot or development phase;
- a written Product Statement is accurate but difficult to experience;
- stakeholders need to see both the service narrative and a working product mockup;
- the result can be delivered as a static HTML/CSS/JavaScript site.

## Do not use when

- product truth or approval ask is unresolved;
- the demo would require pretending live integrations, security, or data exist;
- a simple memo or one-page decision note would be clearer;
- confidential production data cannot be removed.

## Required inputs

```yaml
executiveDemo:
  productStatement: ""
  designSystem: ""
  stakeholderAudience: []
  approvalAsk: ""
  clientDecision: ""
  firstUsefulResult: ""
  existingProof: []
  tangibleCases: []
  productFlow: []
  trustRequirements: []
  pilotScope: ""
  repository: ""
  liveUrl: ""
```

Stop before coding if `approvalAsk`, `clientDecision`, `firstUsefulResult`, or `designSystem` is empty.

## Narrative contract

The guided route should complete in approximately five minutes:

```text
1. Decision headline
2. Existing proof and scale
3. Client tension
4. Value proposition and joint advantage
5. Tangible cases
6. Product flow
7. Interactive mockup
8. Trust and governance
9. Pilot metrics and roadmap
10. Approval ask
```

The page may be long, but each section owns one question.

## Workflow

### 1. Write the 30-second answer

The first viewport explains:

- who the client is;
- what sensitive decision they face;
- what the service changes;
- why the partners are credible;
- what action opens the demo.

Do not lead with architecture, model names, or feature count.

### 2. Choose proof before decoration

Use evidence in this order:

1. existing relationship or operating proof;
2. current dataset or supply proof;
3. demonstrated workflow;
4. planned scale clearly labelled as target;
5. proposal or hypothesis clearly labelled as such.

### 3. Add emotional and tangible value

Use `high-trust-service-value-case` when applicable. The page must include at least one client tension that materially changes the product design and one case that a frontline user can recognize.

### 4. Define the interactive proof

The mockup should prove the essential loop, not every planned feature.

For each step define:

```yaml
step:
  userRole: ""
  userJob: ""
  input: ""
  systemHelp: ""
  humanReview: ""
  output: ""
  limitation: ""
  recovery: ""
```

### 5. Build a stateful local prototype

Use local state only unless a real backend is authorized. A demonstration control must:

- be labelled or contextualized as a demo;
- change a complete local state;
- preserve previous input;
- have a reset or recovery path;
- avoid claiming external completion.

### 6. Keep the approval ask visible

The final action should state exactly what stakeholders are approving:

- pilot definition;
- named owners;
- data and permission review;
- security architecture;
- build phase;
- budget envelope;
- or another bounded decision.

Do not ask executives to approve “the vision” when an operational decision is required.

### 7. Implement responsive composition

Minimum target widths:

```text
390 · 768 · 1024 · 1440 CSS px
```

Preserve the client decision, first useful result, primary action, evidence boundary, and recovery at every width.

### 8. Implement accessibility

- semantic HTML;
- logical headings;
- keyboard route;
- visible focus;
- accessible names;
- 44px touch targets;
- announced critical status;
- reduced motion;
- contrast and text-over-image checks;
- Thai and Latin glyph coverage.

### 9. Run control inventory

Every visible control records:

```yaml
control:
  id: ""
  accessibleName: ""
  userJob: ""
  localOrExternalEffect: ""
  finalState: ""
  failureRecovery: ""
  test: ""
```

The UI and inventory must match exactly.

### 10. Package for static deployment

Required package:

```text
index.html
styles.css
app.js
assets/
.nojekyll when using GitHub Pages
README.md
release-manifest.md
```

Use relative asset paths. No secret or environment file enters the package.

## Content rules

- Lead with the client decision and emotional risk.
- Explain what each partner contributes.
- Use plain Thai and independently authored English when bilingual.
- Show source, date, confidence, permission, and limitation when they affect the decision.
- Separate current proof from stabilized target.
- Do not call a demo “production-ready” unless production QA is complete.

## Visual rules

Follow the selected client overlay. Preserve:

- primary brand hierarchy;
- quiet field;
- one dominant object per section;
- limited semantic color roles;
- real or properly licensed imagery;
- minimal ornament.

A stakeholder page is not a dashboard. Use dashboard-like components only inside the product mockup where they support a task.

## Output contract

```yaml
outputs:
  staticSite: required
  qaReport: required
  controlInventory: required
  releaseManifest: required
  deploymentPackage: required
  liveUrl: conditional
  knownLimitations: required
```

## QA gates

### Story

- Can an executive state the client pain in 30 seconds?
- Can a frontline user recognize at least one case?
- Is the joint advantage specific and evidence-bound?
- Is the approval ask one bounded decision?

### Product proof

- Does the mockup complete the essential loop?
- Are human review, permission, and trade-offs visible?
- Are sample data and simulated actions labelled?
- Does every control work?

### Trust

- Is prototype status visible?
- Is noindex correctly described as non-security?
- Are production auth, permission, audit, and revocation requirements explicit?
- Is public data safe?

### Delivery

- Do relative assets load?
- Does the site work with blocked third-party requests except declared non-critical items?
- Does the live URL contain the expected release markers?
- Are temporary publication helpers removed after release?

## Invocation examples

```text
Use executive-interactive-demo.
Build a five-minute stakeholder experience from the approved Product Statement
and client design-system overlay. End with a bounded pilot approval ask and
include a working local-state product mockup.
```

```text
Use executive-interactive-demo in refresh mode.
Preserve the current interactive product frame, improve only the client pain,
joint value, tangible cases, responsive hierarchy, and approval story, then
return a release-ready static package.
```
