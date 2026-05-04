# Releasing

This project uses [Changesets](https://github.com/changesets/changesets) for version management and publishing.

## Creating a Changeset

After making changes to a public-facing package:

```bash
pnpm changeset
```

Follow the prompts to select affected packages and describe the change. Commit the generated `.changeset/*.md` file with your PR.

## Release Flow

1. PRs are merged to `main`
2. The `release.yml` GitHub Action runs automatically
3. Changesets creates a "Release PR" that bumps versions and updates changelogs
4. Merging the Release PR triggers npm publish and GitHub Release creation

## Manual Release

```bash
# Version all changed packages
pnpm version-packages

# Build and publish
pnpm release
```

## Docs Deploy

Docs deploy automatically to GitHub Pages on every push to `main` via `pages-preview.yml`.
