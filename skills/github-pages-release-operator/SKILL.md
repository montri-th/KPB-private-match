---
name: github-pages-release-operator
version: 1.0.0
layer: shared-landometer
status: ready
---

# GitHub Pages Release Operator

## Purpose

Publish or update a static website in an existing GitHub repository, preserve the repository’s working assets and typography, verify the live GitHub Pages result, and leave a clean audit trail without claiming success before the public URL is checked.

## Use when

- a static HTML/CSS/JavaScript site must be published from ChatGPT through the GitHub connector;
- a repository already exists and the user has push permission;
- GitHub Pages is already enabled or can be activated through a repository workflow;
- an existing live site must be updated without losing prior fixes.

## Do not use when

- the repository or target branch is ambiguous;
- the page contains secrets or confidential client data;
- the site requires a backend, private access, server-side authentication, or protected hosting;
- the connector does not have push permission;
- the user has not authorized a public release.

## Required inputs

```yaml
githubPagesRelease:
  repository: "owner/name"
  branch: "main"
  siteRoot: "/"
  liveUrl: ""
  releaseName: ""
  sourceDirectory: ""
  expectedMarkers: []
  publicDataReview: ""
  preserveFiles: []
  replaceFiles: []
```

Stop if `repository`, `branch`, `sourceDirectory`, or `publicDataReview` is unresolved.

## Release principles

1. Inspect before replacing.
2. Preserve known working assets, fonts, and fixes.
3. Update text files with current blob SHA.
4. Treat binary assets separately.
5. Never claim Pages is live from a commit alone.
6. Verify the public URL and release markers.
7. Remove temporary workflows or patch files after they have served their one-time purpose.
8. Record the release commit, live URL, verification time, and known limitations.

## Workflow

### 1. Confirm repository authority

Fetch repository metadata and verify:

- exact repository name;
- default branch;
- push/admin permission;
- public/private visibility;
- current Pages URL or expected Pages URL.

### 2. Inspect current source

Fetch at minimum:

```text
index.html
styles.css
app.js
README.md
relevant extension styles
current deployment marker
```

Search recent commits for typography, logo, responsive, or deployment fixes that must not be overwritten.

### 3. Compare release content

Classify files:

| Class | Action |
|---|---|
| Existing text file with material change | fetch SHA, then update |
| New text file | create |
| Existing binary asset needed unchanged | preserve |
| New binary asset | upload through supported path or use approved one-time workflow |
| Temporary patch/workflow | create only when necessary; delete after success |

Do not replace a complete production stylesheet with a locally older version merely because the local demo looks correct.

### 4. Run static-site preflight

Check:

- `index.html` exists at Pages root;
- all internal asset paths are relative and resolve;
- no absolute sandbox paths remain;
- no secret or personal data exists;
- links and anchors resolve;
- JavaScript parses;
- CSS includes required extension files;
- mobile viewport metadata exists;
- prototype/public status is truthful;
- no production security claim is simulated.

### 5. Commit the release

Use a specific commit message:

```text
Publish [artifact] [version]
```

When multiple dependent text updates are required and no multi-file commit action is available, use one of these strategies:

1. update files sequentially and record each commit; or
2. add a one-time repository workflow that writes the complete approved payload, runs once, and removes itself after verification.

Use the one-time workflow only when it is simpler and safer than many partial commits.

### 6. Trigger or wait for GitHub Pages

When Pages already publishes from `main` root, a push may be sufficient. When a workflow is used, wait for the resulting commit or deployment evidence.

Do not assume the public CDN has updated immediately.

### 7. Verify the live URL

Fetch the live page and verify:

- HTTP response succeeds;
- title and release description are current;
- expected HTML markers are present;
- required stylesheet is linked;
- critical assets load;
- the requested new section or interaction exists;
- old release markers are absent where applicable.

For a visual change, capture or inspect the actual live page when tools permit. Source verification alone is not visual QA.

### 8. Record verification

Create or update a concise deployment record:

```md
# Deployment verified

- Site: ...
- Release: ...
- Source commit: ...
- Verified at: ...
- Checks: ...
- Known limitations: ...
```

A verification record is evidence, not a substitute for checking the site.

### 9. Clean temporary helpers

Delete:

- one-time publisher workflow;
- applied patch payload;
- temporary verification workflow;
- secret-bearing or redundant files.

Keep only evidence that is useful for future maintainers.

### 10. Report completion

Return:

- live URL;
- repository URL;
- release commit;
- current branch head when known;
- verification checks;
- remaining limitations.

## Public-safety gate

GitHub Pages from a public repository is publicly accessible. Never publish:

- real private-banking client information;
- owner identity without permission;
- restricted property details;
- access tokens or credentials;
- internal bank documents;
- private API routes;
- confidential source data.

`robots noindex` reduces indexing requests; it does not provide access control.

## Failure and recovery

### Commit succeeds, live page is old

- wait for Pages propagation;
- verify branch/source configuration;
- add a harmless release marker only when needed to retrigger;
- check case-sensitive paths;
- avoid repeatedly rewriting files without identifying the cause.

### Live page loads, styles are missing

- verify relative stylesheet path;
- verify case and file name;
- inspect current branch;
- check that the stylesheet was committed and not ignored;
- confirm the site root.

### Binary asset cannot be uploaded directly

- preserve an existing approved asset;
- use an authorized one-time workflow that decodes an approved payload;
- or stop and request a manual binary upload.

Never substitute an unrelated image merely to make the deployment pass.

### Connector lacks a Pages settings action

- use an existing Pages configuration;
- use a repository workflow when authorized;
- or state the remaining manual step precisely.

Do not claim that creating a repository automatically enabled Pages.

## Output contract

```yaml
outputs:
  repositoryUrl: required
  liveUrl: required_for_success
  releaseCommit: required
  verificationRecord: required
  liveChecks: required
  temporaryHelpersRemoved: required
  knownLimitations: required
```

## Quality gates

- Repository identity and permission confirmed.
- Existing implementation inspected before update.
- No known typography/logo fix overwritten unintentionally.
- No private data or secrets published.
- Live URL verified after source commit.
- Expected release markers found in live content.
- Temporary workflows removed.
- Completion report distinguishes source commit from live verification.

## Invocation examples

```text
Use github-pages-release-operator.
Update the existing site in montri-th/[repo], preserve current assets and fonts,
publish from main, verify the live GitHub Pages URL, and remove any one-time
workflow after success.
```

```text
Use github-pages-release-operator in verification mode.
Do not modify source. Check whether the requested release is live, inspect the
release markers and critical assets, and report the exact failing layer if not.
```
