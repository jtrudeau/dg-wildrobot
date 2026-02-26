# DG Wild Robot Home Hub · Deployment Guide

## Build Commands

### Local Development
```bash
npm run dev
```
Runs at `http://localhost:3000`.

### Local Static Build
```bash
npm run build:local
```
Builds static output with no base path.

### GitHub Pages Build
```bash
npm run build:pages
```
Builds static output with base path `/dg-wildrobot`.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and publishes `out/` to the `gh-pages` branch.

## Environment Variables

### `BASE_PATH`
- Default: `/dg-wildrobot`
- For root-level hosting: `BASE_PATH='' npm run build`
- For custom repo path: `BASE_PATH=/your-repo-name npm run build`

## GitHub Pages Setup

1. In repo settings, set Pages source to `gh-pages` branch.
2. Run `npm run deploy`.
3. Site URL format:
   `https://<username>.github.io/dg-wildrobot/`

## Content Updates

All page content is currently in:

`src/app/page.tsx`

If you want to split content later, move sections into `src/components/`.
