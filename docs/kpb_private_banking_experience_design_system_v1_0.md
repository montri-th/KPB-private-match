# KPB Private Banking Experience Design System v1.0

**Release:** v1.0  
**Edition:** Repository operating edition  
**Prepared:** 28 July 2026  
**Status:** Project-derived specification for the KPB Private Property Opportunities concept, stakeholder demo, pilot definition, and future product design  
**Primary implementation:** `montri-th/KPB-private-match`  
**Live reference:** `https://montri-th.github.io/KPB-private-match/`  
**Integrated master:** the downloadable v1.0 package contains expanded rationale, Build Card detail, and QA appendices  
**Does not claim:** to be the official enterprise-wide KBank or KBank Private Banking design system

> This document records the design language that produced the KPB Private Property Opportunities demo. It is a project overlay, not a replacement for official KBank brand governance.

---

## 0. Authority and evidence boundary

Use this order when rules conflict:

1. Official KBank and KBank Private Banking assets, written brand rules, legal requirements, security policies, and channel rules.
2. The approved KPB Private Property Opportunities Product Statement and current KPB business decisions.
3. This KPB Experience Design System for visual hierarchy, language, interaction, and prototype behavior.
4. Landometer Design System v0.8.7 for shared truth, evidence, native-language authoring, accessibility, control integrity, privacy, responsive behavior, and honest capability boundaries.
5. The current repository implementation as tested evidence, not automatic policy.

A screenshot may support an observed visual behavior. It does not prove a hidden corporate token, asset permission, accessibility standard, or enterprise-wide rule.

### 0.1 Layer separation

| Layer | Owns | Must not be generalized into |
|---|---|---|
| **Shared Landometer layer** | Truth, evidence state, one-job flow, first useful result, native Thai, accessibility, error/recovery, honest demo labels, QA | KPB-specific colors, private-banking assumptions, five-question flow, Top 10, double opt-in |
| **KPB experience layer** | Navy–paper–gold language, editorial pacing, premium restraint, Private Banker presence, discretion, co-brand hierarchy | All Landometer products, other banks, or all KBank channels |
| **KPB Private Property product layer** | Client Brief, opportunity eligibility, permission-safe Top 10, client snapshot, controlled introduction | Other KPB products unless separately approved |
| **Implementation layer** | Current HTML, CSS, JavaScript, motion, breakpoints, and component code | New policy merely because code exists |

When a capability is unresolved, label it proposed or unavailable. Do not fill the gap with common private-banking or property-market assumptions.

---

## 1. Experience intent

### 1.1 Service position

KPB Private Property Opportunities is a **Private Banker–led opportunity discovery and controlled introduction service**.

It is not:

- a public property marketplace;
- a listing portal;
- a lead-generation site;
- an automated investment recommendation;
- a promise that every property record is available for sale or lease.

### 1.2 Value proposition

> KBank Private Banking helps a family turn a sensitive property need into a small, explainable set of private opportunities, while Landometer makes relevant supply, location logic, evidence, permissions, and trade-offs usable behind the scenes.

### 1.3 Client tensions

The experience should reduce four tensions:

1. **Decision fatigue:** “I do not want to screen hundreds of listings myself.”
2. **Loss of discretion:** “I do not want the market to know what my family or business is planning.”
3. **Fear of missing a better option:** “I want access beyond what is already circulating publicly.”
4. **Fear of a poor family decision:** “I need a clear way to discuss trade-offs before committing.”

These are project hypotheses to validate with KPB stakeholders. They must not be presented as researched facts about every KPB client.

### 1.4 Joint advantages

The advantage does not come from AI alone.

| KBank Private Banking contributes | Landometer contributes | Joint result |
|---|---|---|
| Trusted relationship and family context | Long-running Land Portfolio and opportunity-readiness logic | Search begins with context, not a generic form |
| Private Banker judgment and communication | Land, location, evidence, matching, and explainability | Shortlists are reasoned and discussable |
| Client confidentiality and relationship ownership | Permission ladder and disclosure-aware workflow | Private opportunity without uncontrolled exposure |
| Ability to coordinate a family decision | Consistent comparison and versioned client page | A shared decision object for the family |
| Banking ecosystem and possible future sources | Multi-source architecture and deduplication | Scale without becoming a public marketplace |

Describe these as capabilities to test in a pilot, not guaranteed commercial outcomes.

---

## 2. Core principles

### 2.1 Advisory before inventory

Lead with the client decision. Portfolio scale supports credibility but does not replace the advisory value.

### 2.2 Private by policy

Privacy is expressed through authentication, authorization, disclosure, expiry, revocation, audit, and consent. A hard-to-guess URL or `noindex` is not access control.

### 2.3 Curated, not abundant

A smaller set of good choices is preferable to a large result count. Top 10 is a maximum decision set, not a quota that must always be filled.

### 2.4 Explain the trade-off

Every candidate shows:

- why it fits;
- which hard constraints it passes;
- the strongest counter-signal;
- what is missing or stale;
- permission/readiness status;
- what to verify next.

### 2.5 Keep the Private Banker visible

The system supports the relationship. It does not replace the Private Banker’s judgment, communication, or responsibility for the introduction.

### 2.6 Human approval before disclosure

Matching may be machine-assisted. Client publication and owner-identity disclosure require human review and approved permission.

### 2.7 Premium restraint

Use calm surfaces, deliberate spacing, thin rules, editorial type, and limited color. Avoid glass blur, generic black-and-gold luxury, decorative monograms, and unrelated stock-luxury imagery.

### 2.8 One decision per scene

Each scene answers one question. Do not combine client pain, product architecture, governance, metrics, and approval into one dense dashboard.

---

## 3. Executive narrative architecture

Recommended route:

```text
Private conversation
→ existing portfolio proof
→ emotional pain
→ KPB × Landometer value
→ tangible client cases
→ controlled service loop
→ interactive banker and client mockup
→ trust and governance
→ pilot metrics
→ approval request
```

### 3.1 First viewport

Include:

- KPB-primary lockup;
- one KPB × Landometer relationship line;
- one headline about a private conversation becoming a curated opportunity;
- one concise support paragraph;
- one primary action to enter the demo;
- at most one quiet secondary action;
- premium photography with a deterministic navy scrim;
- visible prototype status when not production.

Do not place architecture, login, share, workflow diagrams, or large metric cards before the first useful message.

### 3.2 Tangible case pattern

Each case contains:

```yaml
case:
  decision: ""
  emotionalPain: ""
  currentAlternative: ""
  kpbRole: ""
  landometerRole: ""
  productProof: ""
  materialTradeoff: ""
  whatClientFeelsIfItWorks: ""
  validationStatus: illustrative | validated
```

Use decisions that differ, not personas with cosmetic differences. The current demo uses:

1. long-term capital allocation through land acquisition;
2. discreet site search for a flagship operating business;
3. family alignment through a consistent, versioned shortlist.

---

## 4. Brand hierarchy and co-branding

### 4.1 Primary brand

KBank Private Banking is primary on client-facing surfaces. Landometer appears as the enabling product, data, and operating layer.

Preferred hierarchy:

```text
KBank / KBank Private Banking
KPB Private Property Opportunities
powered by Landometer
```

### 4.2 Logo rules

- Use approved official assets only.
- Do not redraw, trace, recolor, distort, animate, crop, or merge the marks.
- Preserve intrinsic aspect ratio and approved clear space.
- Use the full KPB lockup in the header and client gate.
- Use the Landometer lockup only in a secondary “powered by” role.
- The Landometer symbol may appear in the internal Opportunity Desk navigation when space is constrained.
- Repository presence does not prove production-use permission.

### 4.3 Prototype status

A public concept should show a quiet persistent label such as:

> CONFIDENTIAL CONCEPT PROTOTYPE — illustrative client and property data only

This label is not a security control.

---

## 5. Color system

### 5.1 Project tokens

| Token | Value | Role |
|---|---:|---|
| `kpb.navy` | `#0A3351` | Primary KPB surface, navigation, primary action |
| `kpb.navy.deep` | `#072034` | Hero depth, sidebar, modal, dark section |
| `kpb.navy.black` | `#031522` | Deep scrim and prototype ribbon |
| `kpb.navy.soft` | `#13435F` | Secondary navy transition |
| `kpb.ink` | `#102838` | Primary text on light surfaces |
| `kpb.ink.soft` | `#536570` | Supporting text and metadata |
| `kpb.paper` | `#F7F6F2` | Main editorial canvas |
| `kpb.cream` | `#EFEDE6` | Warm section and workspace transition |
| `kpb.white` | `#FFFFFF` | Raised surface and reverse text |
| `kpb.gold` | `#B7A06F` | Premium emphasis, thin rule, active progress |
| `kpb.gold.soft` | `#D8C9A7` | Secondary warm accent on navy |
| `semantic.success` | `#27937C` | Confirmed status only |
| `semantic.success.deep` | `#146451` | Strong success text/state |
| `semantic.info` | `#176B82` | Information and analytical selection |
| `semantic.warning` | `#A6782C` | Pending or unresolved evidence |
| `semantic.danger` | `#A85D5B` | Error, rejection, material risk |

### 5.2 Ownership

- Navy owns KPB identity, depth, and primary action.
- Gold owns premium emphasis and progress; it never means verified or successful.
- Green means confirmed status only; it is not decorative KBank color.
- Blue owns informational selection.
- Red and amber are semantic, not brand decoration.
- Paper and cream create editorial calm; they are not automatic logo plates.

### 5.3 Gradients and scrims

Permitted uses:

1. navy photographic scrim for text contrast;
2. one restrained navy-to-paper partnership bridge;
3. subtle deep-navy section depth.

Do not use rainbow, iridescent, purple, neon, or generic luxury gradients.

### 5.4 Contrast

- Normal text: at least `4.5:1`.
- Large text and meaningful graphics: at least `3:1`.
- Text over photography must pass at the worst rendered region or use a deterministic scrim.
- Gold small text on white requires review; prefer gold on navy or as a rule.

---

## 6. Typography

| Role | Latin | Thai | Weight |
|---|---|---|---:|
| Editorial/display heading | Cormorant Garamond | IBM Plex Sans Thai KPB | 400–600 / 300–400 optical match |
| Product/UI heading | Cormorant Garamond or approved KPB heading role | IBM Plex Sans Thai KPB | visually balanced |
| Body, labels, forms | Sarabun Thai KPB | Sarabun Thai KPB | 300–700 |
| Compact UI button | Sarabun Thai KPB | Sarabun Thai KPB | 500–700 |
| Numeric/data emphasis | tabular numerals in the body/UI family | same | 500–700 |

Rules:

- Thai headings should feel optically comparable to English, not use the same numeric weight blindly.
- Long Thai body copy uses generous line height and controlled line length.
- Mixed Thai/English headings have one dominant language.
- Do not use serif type for dense controls, long labels, forms, or numerical tables.
- Production must self-host or package critical fonts and test Thai/Latin glyphs with third-party requests blocked.
- No synthetic bold or italic.

---

## 7. Layout and composition

### 7.1 Containers

Reference implementation:

```css
--container: min(1280px, calc(100vw - 64px));
--container-wide: min(1480px, calc(100vw - 32px));
```

At small widths, use 20–24px side gutters and preserve the primary action.

### 7.2 Spacing

Use a restrained scale:

```text
4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96
```

Major public sections normally use 80–96px vertical space on desktop and 56–72px on mobile.

### 7.3 Quiet field

Every promoted section should retain a calm region. Do not fill empty space merely because more metrics, controls, or copy exist.

### 7.4 Cards

Cards are for bounded objects: property, client brief, evidence state, control group, approval item. Avoid turning every paragraph into a card.

### 7.5 Corners and depth

- Editorial/public panels: square or lightly rounded.
- Interactive product cards: medium radius.
- Client opportunity cards: refined, not playful.
- Shadow signals elevation or overlay only.
- Avoid excessive pill shapes and hover lift on non-operable cards.

---

## 8. Photography and imagery

Photography supports discretion, considered choice, place quality, and real property context.

Use:

- real or licensed land, building, hospitality, landscape, and city-context imagery;
- clean crops with useful negative space;
- a navy scrim where text needs protection;
- accurate captions and asset rights.

Do not use:

- yachts or luxury objects merely as a wealth shortcut;
- unrelated resort imagery presented as a real opportunity;
- AI documentary imagery without clear labeling;
- images that reveal restricted coordinates or owner identity;
- UI placed across faces or material property evidence.

Prototype images may be illustrative but must be labelled as such.

---

## 9. Voice and content

### 9.1 KPB posture

The voice is discreet, composed, specific, advisory, and calm. It explains rather than sells.

### 9.2 Landometer contribution

Landometer copy is grounded and operational. It states:

- what is known;
- where it came from;
- what remains uncertain;
- what the result supports;
- what must be checked next.

### 9.3 Native Thai

Write Thai from the client decision and evidence. Do not translate an English page sentence by sentence.

Prefer:

```text
สิ่งที่ครอบครัวกำลังตัดสินใจ
→ สิ่งที่ระบบและ Private Banker เข้าใจ
→ เหตุผลที่ตัวเลือกนี้เข้ากับโจทย์
→ จุดที่ต้องแลกหรือยังไม่รู้
→ ขั้นตอนถัดไป
```

Avoid abstract Thai such as `ยกระดับ`, `ปลดล็อก`, `โซลูชัน`, or `อินไซต์` when a direct ordinary word is clearer.

### 9.4 Claim boundaries

Do not claim:

- guaranteed availability;
- guaranteed return or price appreciation;
- investment suitability without an approved method;
- production security in a front-end prototype;
- official KPB approval without evidence;
- live KBank NPA, BAM, or partner integration before rights and integration are confirmed.

---

## 10. Product flow

The controlled service loop is:

```text
Probe
→ Structure
→ Match
→ Review
→ Introduce
```

### 10.1 Probe

Five question groups:

1. decision and intended use;
2. location logic;
3. property constraints and flexibility;
4. economics and transaction structure;
5. timing, decision participants, and confidentiality.

The interface supports a conversation; it should not become a long client form.

### 10.2 Structure

Create a versioned Client Brief that separates:

- hard constraints;
- preferences;
- assumptions;
- exclusions;
- unresolved questions;
- confidentiality and participants.

### 10.3 Match

Candidate generation checks:

- source and identity;
- rights to use each field;
- owner relationship and readiness;
- hard constraints;
- land and location fit;
- freshness and evidence quality;
- permitted disclosure.

### 10.4 Review

The Private Banker and Match Desk review candidates before client publication. Human review must be visible in the product model.

### 10.5 Introduce

```text
client interest
→ banker validation
→ owner readiness reconfirmation
→ owner consent to this client introduction
→ approved disclosure
→ appointment or diligence step
```

Client interest is not owner consent.

---

## 11. Candidate and client-page design

### 11.1 Candidate card minimum

```yaml
candidate:
  objectId: ""
  objectVersion: ""
  fitCategory: core | alternative | strategic
  hardConstraintsPassed: []
  supportingSignals: []
  strongestCounterSignal: ""
  assumptions: []
  missingEvidence: []
  sourceFreshness: ""
  ownerReadiness: ""
  disclosureLevel: ""
  confidence: ""
  nextVerification: ""
```

A score never replaces the fields above.

### 11.2 Score rules

- Hard constraints are binary gates, not weighted preferences.
- Scores compare only candidates from the same Client Brief and method version.
- A high score cannot override weak permission or owner readiness.
- Cross-release or cross-schema scores are not compared without a compatibility statement.
- The service may return fewer than 10 opportunities.

### 11.3 Client snapshot

The client page contains:

- KPB-primary identity;
- client reference and snapshot version;
- brief summary;
- curated opportunities;
- compare and explicit-response controls;
- reason, trade-off, freshness, confidence, and missing evidence;
- what happens after interest;
- expiry, confidentiality, and Private Banker contact route.

The page is a versioned decision snapshot. Material changes require a new version or visible stale notice.

### 11.4 Client responses

Minimum explicit responses:

- interested;
- keep for consideration;
- not suitable.

Do not infer interest from scrolling, dwell time, or repeated opening.

---

## 12. Components and states

### 12.1 Core components

| Component | Required content |
|---|---|
| `BrandHeader` | KPB lockup, minimal navigation, optional language control |
| `PrototypeRibbon` | concept status and illustrative-data note |
| `MetricCard` | current or target label, value, unit, status |
| `PainCard` | tension, consequence, design implication |
| `JointAdvantage` | KPB contribution, Landometer contribution, joint result |
| `CaseCard` | decision, pain, roles, trade-off, client feeling |
| `StageNavigation` | current stage, completed stages, accessible labels |
| `QuestionPanel` | one question, help, input, hard/preference distinction |
| `DecisionBrief` | constraints, preferences, assumptions, unresolved items |
| `CandidateCard` | reason, counter-signal, readiness, freshness, next check |
| `ClientGate` | demo or approved production access context |
| `ClientSnapshot` | brief, opportunities, responses, expiry, banker contact |
| `DisclosureTimeline` | client interest, owner consent, disclosure, appointment |
| `GuardrailCard` | privacy, disclosure, snapshot, audit/revocation |
| `ApprovalPanel` | exact decision, owners, next action |

### 12.2 Required states

```text
default · hover · focus-visible · selected · disabled
loading · partial · stale · success · warning · error · empty
restricted · permission-denied · cancelled · conflict
```

The demo implements only states it can enter. A demonstration action must change complete local state and provide recovery/reset.

### 12.3 Motion

- State-led and restrained.
- Normal state change: 160–280ms.
- Section reveal: approximately 400ms, once.
- Primary evidence is visible without waiting.
- Matching animation explains filtering but must not imply a live external run when local.
- Reduced motion shows final meaning immediately.
- No bounce, shimmer, decorative pulse, or logo animation.

---

## 13. Responsive and accessibility

Reference breakpoints:

- `1180px`: reduce navigation and product-frame width;
- `980px`: collapse navigation, sidebar becomes overlay, major grids stack;
- `660px`: compact header and single-column decision flow.

Preserve on mobile:

1. current task;
2. client decision;
3. primary action;
4. reason and trade-off;
5. permission/readiness;
6. recovery.

Minimum accessibility:

- semantic HTML and logical headings;
- visible keyboard focus;
- keyboard operation for menus, stages, filters, dialogs, compare, and responses;
- accessible names for icon buttons;
- field labels, help, and error associations;
- status announcements for matching, save, publish, and failure;
- color-independent meaning;
- 44 × 44px touch targets;
- Thai and Latin glyph coverage;
- 200% zoom without loss of critical content;
- reduced-motion behavior;
- contrast on photography, cream, and navy.

---

## 14. Privacy, security, and prototype boundary

### 14.1 Public prototype

Use illustrative data only. Do not publish:

- real KPB client names or family relationships;
- personal contact details;
- owner identity without permission;
- restricted property coordinates;
- credentials, tokens, private APIs, or internal bank documents;
- production-security claims for local OTP or front-end state.

### 14.2 Production requirements

Production must define:

- bank-approved identity and authentication;
- authorization and roles;
- client and owner consent;
- field-level disclosure;
- expiry and revocation;
- access and activity audit;
- source rights and retention;
- secure interest and appointment APIs;
- incident and recovery behavior;
- legal and PDPA ownership.

### 14.3 Illustrative disclosure ladder

| Level | Content |
|---|---|
| D1 | Property type, broad geography, generalized economics |
| D2 | Client-safe image, approximate area, detailed fit rationale |
| D3 | Precise property details without owner identity |
| D4 | Owner identity/contact under mutual consent |
| D5 | Diligence documents under explicit access and retention rules |

Exact levels require KPB legal, compliance, security, and data-owner approval.

---

## 15. Data and evidence

A Property Record becomes an Available Opportunity only when the service knows:

- source and record version;
- duplicate/identity status;
- rights to use the fields;
- owner relationship and readiness;
- permitted disclosure;
- freshness;
- fit to the Client Brief;
- human review state.

Current supplied baseline:

- 781 families;
- 4,591 land plots;
- 265 condominium units.

Stabilized target:

- approximately 50,000 land plots;
- approximately 10,000 condominium units.

Always label the second set as a target. Future KBank NPA, BAM, or other approved-source integration remains proposed until confirmed.

---

## 16. Measurement

### 16.1 North Star

**Mutually Consented Qualified Introduction Rate**

A qualified introduction requires:

- reviewed Client Brief;
- permission-safe opportunity;
- explicit client interest;
- owner consent to the specific introduction;
- agreed disclosure level;
- a real introduction or next diligence step.

### 16.2 Pilot measures

- client-rated shortlist relevance;
- brief-to-reviewed-shortlist time;
- published items with traceable permission;
- material correction rate;
- client/banker comprehension of reasons and trade-offs;
- owner reconfirmation time;
- zero unauthorized identity disclosure.

### 16.3 Anti-metrics

Do not treat result count, page views, time on page, share clicks, property count shown, notification count, or client-link count as proof of value.

---

## 17. Build Card

Complete before a new artifact:

```yaml
kpbBuild:
  release: "1.0"
  artifact:
    name: ""
    type: stakeholder_demo | banker_app | client_page | pilot_brief | static_export
    status: concept | pilot | production
    visibility: public | internal | private
  authority:
    productStatement: ""
    officialKpbSource: ""
    landometerDesignSystem: "0.8.7"
    assetApproval: ""
  audience:
    primary: ""
    decisionRequired: ""
  clientDecision:
    job: ""
    emotionalPain: ""
    confidentialityNeed: ""
    firstUsefulResult: ""
  evidence:
    propertyData: illustrative | verified | provisional
    portfolioCountsSource: ""
    limitations: []
  privacy:
    realClientData: false
    accessControlImplemented: false
    disclosureLevel: ""
  experience:
    primaryAction: ""
    cleanCompletion: ""
    responsiveTargets: [390, 768, 1024, 1440]
  delivery:
    repository: ""
    branch: "main"
    liveUrl: ""
  qa:
    evidencePath: ""
    controlInventoryPath: ""
```

Stop before layout when `decisionRequired`, `clientDecision.job`, `emotionalPain`, `firstUsefulResult`, or `primaryAction` is empty.

---

## 18. Release QA

### Content and value

- [ ] First screen explains a client decision, not technology.
- [ ] Emotional pain is specific and labelled as validated or illustrative.
- [ ] KPB and Landometer roles are distinct.
- [ ] Future scale is labelled as target.
- [ ] No record count is presented as available-opportunity count.
- [ ] Tangible cases show decision, role split, trade-off, and proof.

### Brand and visual

- [ ] KPB is primary; Landometer is secondary.
- [ ] Official assets remain intact.
- [ ] Navy, paper, cream, and gold follow semantic roles.
- [ ] Gold does not mean success.
- [ ] Imagery rights and illustrative status are clear.
- [ ] One focal idea per section.
- [ ] No generic luxury or generic SaaS composition dominates.

### Interaction

- [ ] Five stages work and preserve state.
- [ ] Five questions separate hard constraints and preferences.
- [ ] Sample data and local simulation are labelled.
- [ ] Candidate cards show reason, counter-signal, readiness, freshness, and next check.
- [ ] Client interest does not bypass owner consent.
- [ ] Every visible control works or is removed.

### Privacy and security

- [ ] Public prototype contains no real client or restricted owner/property data.
- [ ] OTP is labelled demonstration-only.
- [ ] `noindex` is not described as security.
- [ ] Production auth, consent, audit, expiry, and revocation remain explicit requirements.

### Accessibility and delivery

- [ ] Keyboard route and visible focus pass.
- [ ] Touch targets pass.
- [ ] Thai/English glyphs render correctly.
- [ ] Contrast passes on images and warm surfaces.
- [ ] Essential content remains at 390px and 200% zoom.
- [ ] Reduced motion shows complete meaning.
- [ ] Live URL is verified after publish.
- [ ] Temporary publishing helpers are removed.

---

## 19. Versioning

- **Patch:** copy, spacing, small component, or QA correction without product-model change.
- **Minor:** new compatible component, token role, or stakeholder scene.
- **Major:** new brand authority, typography system, service model, privacy model, or client interaction architecture.

Every release records source commit, affected files, design-system version, Product Statement version, limitations, live URL, and verification date.

---

## 20. Definition of done

A KPB artifact is ready when a stakeholder can understand within five minutes:

1. which client tension the service handles;
2. why KPB owns the relationship;
3. why Landometer adds a difficult-to-copy capability;
4. how the banker and client experience works;
5. how permission and disclosure are controlled;
6. what is prototype versus production;
7. what bounded pilot decision is required next.

The experience should feel like Private Banking because it reduces uncertainty with care—not because it uses luxury decoration.
