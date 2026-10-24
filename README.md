# Monitor Manifesto — MD Jamshadul Alam for Joint Secretary

A responsive, interactive campaign microsite for the PCIU Computer Club 4th Executive Committee election. Built with **React + Vite**, Framer Motion animations, and Lucide icons.

## What is included

- A custom desktop-monitor visual that makes the election symbol obvious.
- A distinct palette: midnight plum, periwinkle, coral, warm ivory and butter yellow.
- Interactive lesson tabs, expandable manifesto commitments, and a before/during/after workflow selector.
- Mobile navigation, responsive layouts, reduced-motion support, scroll progress, and subtle motion.
- Your 2025–2026 Event Secretary experience, including the 25-event record as a proof point. The individual event names are intentionally not shown.
- The election date: **29 October 2026**.

## Run locally in VS Code

You need Node.js 20.19+ or 22.12+ for current Vite 7.

1. Extract the project ZIP.
2. Open the `monitor_manifesto_site` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite prints, normally `http://localhost:5173`.

For a production build:

```bash
npm run build
npm run preview
```

Vite creates a deploy-ready `dist/` directory.

## Recommended hosting: Vercel

Vercel is the recommended option for this React/Vite site because it detects the project, gives it a public `vercel.app` URL, and can redeploy it when you push changes to GitHub.

1. Create a new public or private repository on GitHub, for example `pciu-js-manifesto`.
2. Upload the **contents of this project folder** to the repository root (include `package.json`, `index.html`, `vite.config.js`, `src/` and `public/`; do not upload `node_modules/`).
3. Sign in to Vercel with GitHub at https://vercel.com/new.
4. Choose **Add New → Project**, import `pciu-js-manifesto`, and click **Deploy**.
5. Vercel should detect Vite automatically. If it asks, set **Build Command** to `npm run build` and **Output Directory** to `dist`.
6. After the build completes, open the generated URL and test the page on your phone.

After deployment, future pushes to the connected GitHub repository trigger new deployments. You can also add a custom domain later.

## Alternative hosting

- **Netlify**: also a good choice; import the Git repository and use build command `npm run build` with publish directory `dist`.
- **GitHub Pages**: useful for a simple static page, but Vite projects need correct asset base-path/deployment configuration. For the smoothest deployment of this Vite project, use Vercel or Netlify.

## Before publishing

- Confirm official name spelling and election date.
- Replace or supplement the typographic monitor illustration only if you want to add your own portrait or official club logo. The current site does not alter or invent either asset.
- Review all manifesto commitments so they match what you genuinely intend to do if elected.

## Project structure

```text
monitor_manifesto_site/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── monitor.svg
└── src/
    ├── main.jsx
    └── style.css
```
