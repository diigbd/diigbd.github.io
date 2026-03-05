# DIIG Website — Developer Guide

## Setup & Running the Website

**Prerequisites:** Node.js >= 18 (v20 recommended) and npm.

```bash
git clone git@github.com:diigbd/diigbd.github.io.git
cd diigbd.github.io
npm install
npm run dev
```

The dev server starts at **[http://localhost:8080](http://localhost:8080)** with hot reload. To preview a production build locally:

```bash
npm run build
npm run preview
```

---

## Updating the Roster

The roster displayed on the site lives in `src/data.js`. It is generated from a roster CSV using a Python script.

### 1. Install Python dependencies (first time only)

```bash
cd scripts
pip install -r requirements.txt
```

### 2. Prepare the CSV

Place an updated `roster.csv` in the `scripts/` directory. This usually comes from the Roster spreadsheet on Google Sheets. The CSV is (and should remain) gitignored because it contains personal contact info (emails, phone numbers). Ensure the file is named `roster.csv`.

### 3. Run the script

```bash
python roster.py
```

This prints cleaned JSON to stdout. The script deduplicates entries, normalizes division names, cleans LinkedIn URLs, and strips personal info from the output.

### 4. Update `data.js`

Copy the JSON output and replace the `roster` export in `src/data.js`.

---

## Formatting with Prettier

It is recommended to format sourcecode files with Prettier. Install it on your system:

```bash
npm install -g prettier
```

Then you can format files with:

```bash
prettier -w .
```

---

## CI/CD

Deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`).

**Trigger:** Every push to `main`, or a manual run from the Actions tab (workflow_dispatch).

**Custom domain:** The site serves at `dukeimpact.com` as specified in the `CNAME` file in `public/`.

---

## Source Files Overview

### Entry & Config

| File           | Purpose                                                               |
| -------------- | --------------------------------------------------------------------- |
| `index.html`   | HTML shell — Vite loads `src/main.tsx` from here                      |
| `src/main.tsx` | Mounts the React app into the DOM                                     |
| `src/App.tsx`  | Root component — sets up providers and all routes                     |
| `src/data.js`  | All site content: social links, leadership, roster, past clients, etc |

### Pages (`src/pages/`)

| File                       | Route                   | Description                     |
| -------------------------- | ----------------------- | ------------------------------- |
| `Index.tsx`                | `/`                     | Home page                       |
| `Clients.tsx`              | `/clients`              | Client information and process  |
| `Students.tsx`             | `/students`             | Student information and process |
| `Team.tsx`                 | `/team`                 | Leadership                      |
| `DKU.tsx`                  | `/dku`                  | DKU page                        |
| `NotFound.tsx`             | `*`                     | 404 fallback                    |
| `Divisions.tsx`            | `/divisions`            | Divisions overview              |
| `divisions/BD.tsx`         | `/divisions/bd`         | Business Development            |
| `divisions/Consulting.tsx` | `/divisions/consulting` | Consulting                      |
| `divisions/Data.tsx`       | `/divisions/data`       | Data                            |
| `divisions/Education.tsx`  | `/divisions/education`  | Education                       |
| `divisions/Investment.tsx` | `/divisions/investment` | Investment                      |

---

## Asset Files

Static assets go in the `public/` directory:

- **Headshots** → `public/headshots/`
- **Logos** (client/partner) → `public/logos/`
- **Favicon** → `public/favicon.svg`

Reference them with absolute paths in your components:

```tsx
<img src="/headshots/photo.jpg" />
<img src="/logos/company.png" />
```

Files in `public/` are served as-is at the site root and are not processed by Vite.
