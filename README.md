# DG Wild Robot

A simple website for Dunrae Gardens Grade 4 students and families.

I made this page to support the Wild Robot home build in a way that feels clear and low pressure.
The goal is to capture each robot's personality, not to build a perfect copy of the students' designs.


## What this site includes

- A short project overview
- Build goals and possible materials list
- Important dates and next steps
- Link to the Wild Robot AI transformation app we built for reimagining robots
- A session-style student guide with collapsible parent notes

## Quick setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quick deploy (GitHub Pages)

1. Create a GitHub repo named `dg-wildrobot`.
2. Push this project to the repo.
3. Run:

```bash
npm run deploy
```

4. In GitHub repo settings, open Pages.
5. Set source to branch `gh-pages` and save.
6. Site URL format:
   `https://<username>.github.io/dg-wildrobot/`

## Edit content

Home page:

`src/app/page.tsx`

Student session page:

`src/app/sessions/home-build/page.tsx`

Add reimagining images:

`public/images/reimagining/`

Visual style:

`src/app/globals.css`
