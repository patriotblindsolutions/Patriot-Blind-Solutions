# Patriot Blind Solutions — Project Notes

> Last updated: March 12, 2026

---

## 🚀 Deployment Status

- **Hosting:** Cloudflare Pages (free plan)
- **Live URL:** https://patriot-blind-solutions.pages.dev
- **Repositories:**
  - Developer (Jonathan): https://github.com/brojonbeast/Patriot-Blind-Solutions
  - Client: https://github.com/patriotblindsolutions/Patriot-Blind-Solutions
- **Framework:** Next.js 15.0.3 with `@cloudflare/next-on-pages` adapter
- **Build command:** `npx @cloudflare/next-on-pages@1`
- **Output directory:** `.vercel/output/static`
- **Compatibility flag required in Cloudflare:** `nodejs_compat`

---

## ✅ Completed

- [x] GitHub repositories set up for both developer and client accounts
- [x] Next.js adapter installed and configured for Cloudflare Pages
- [x] Site successfully deployed to Cloudflare Pages
- [x] Icons migrated from Material Icons (font-based) → **Lucide React** (SVG-based) for Cloudflare compatibility
- [x] `.npmrc` added with `legacy-peer-deps=true` to fix Cloudflare build (React 19 RC compatibility)
- [x] Favicon updated to Patriot Blind Solutions logo (`src/app/icon.png`)
- [x] Old Vercel `favicon.ico` removed

---

## 🔲 Pending / Next Steps

### 1. Domain Connection (Waiting on Andy)
- **Custom domain added in Cloudflare Pages:** `www.patriotblindsolutions.com` (status: pending)
- **Andy needs to:**
  - Add CNAME in GoDaddy: `www` → `patriot-blind-solutions.pages.dev`
  - Set up root domain forwarding: `patriotblindsolutions.com` → `https://www.patriotblindsolutions.com`
  - Set up forwarding on all other domains (`.net`, `.info`, `.store`, `.us`, `.xyz`) → `https://www.patriotblindsolutions.com`
- **After Andy is done:** Go to Cloudflare → Workers & Pages → patriot-blind-solutions → Custom Domains → click **"Check DNS records"**

### 2. Resend Email Integration (Contact Form)
- **Status:** Not yet set up
- **Goal:** Form submissions on the site send an email to `chris@patriotblindsolutions.com`
- **What's needed:**
  1. Andy or Tod creates a [Resend](https://resend.com) account
  2. Verifies `patriotblindsolutions.com` domain in Resend (adds SPF/DKIM DNS records in GoDaddy)
  3. Creates an API key and sends it to Jonathan
  4. Jonathan adds `RESEND_API_KEY` as an environment variable in Cloudflare Pages Settings
  5. Jonathan wires up the form with a Next.js server action calling the Resend API
- **Existing email accounts (GoDaddy Email Essentials):**
  - `todd@patriotblindsolutions.com`
  - `chris@patriotblindsolutions.com`

---

## ⚙️ Key Technical Notes

- **Icons:** Using `lucide-react`. All icons are SVG-based components. Do NOT use `className="material-icons"` — the font does not load reliably on Cloudflare Edge.
- **React version:** `19.0.0-rc-66855b96-20241106` (release candidate). This is why `.npmrc` has `legacy-peer-deps=true`.
- **Local build:** Running `npm run pages:build` locally on Windows will fail with a `bash ENOENT` error. This is normal — the build runs fine on Cloudflare's Linux servers.
- **Cloudflare auto-deploy:** Pushing to `main` on GitHub triggers an automatic Cloudflare Pages build. If it doesn't trigger, push an empty commit: `git commit --allow-empty -m "chore: trigger rebuild"`
- **Push to both repos:** Always push to both remotes when deploying:
  ```
  git push origin main   # Your GitHub account
  git push client main   # Client's GitHub account
  ```
