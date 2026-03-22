# Nartiv – Deploy to Vercel (Free)

## What you need
- A free Vercel account → https://vercel.com/signup (sign up with GitHub, Google, or email)
- Your Anthropic API key → https://console.anthropic.com

---

## Option A — Deploy via Vercel CLI (Terminal) — Recommended

### Step 1 — Install Node.js (if you don't have it)
Download from https://nodejs.org (LTS version)

### Step 2 — Install the Vercel CLI
Open Terminal and run:
  npm install -g vercel

### Step 3 — Deploy
In Terminal, navigate to this folder (nartiv-vercel) and run:
  vercel

Follow the prompts:
  - Log in or create an account
  - "Set up and deploy?" → Yes
  - Project name → nartiv (or anything you like)
  - Which directory is your code? → ./   (just press Enter)
  - Override settings? → No

Vercel will give you a live URL like: https://nartiv-abc123.vercel.app

### Step 4 — Add your API key
Go to https://vercel.com/dashboard
→ Click your project → Settings → Environment Variables
→ Add:
    Name:   ANTHROPIC_API_KEY
    Value:  sk-ant-xxxxxxx  (your key)
    Environment: Production + Preview + Development

Then redeploy:
  vercel --prod

---

## Option B — Deploy via GitHub (no Terminal needed)

### Step 1 — Put this folder on GitHub
- Go to https://github.com/new and create a new repository
- Upload the contents of this folder (drag & drop in the GitHub UI)

### Step 2 — Connect to Vercel
- Go to https://vercel.com/new
- Click "Import Git Repository"
- Select your GitHub repo
- Click Deploy

### Step 3 — Add your API key
Same as Step 4 above — go to your project Settings → Environment Variables

---

## Folder structure
  nartiv-vercel/
  ├── api/
  │   └── claude.js      ← serverless function (proxies Anthropic API)
  ├── public/
  │   └── index.html     ← the Nartiv app
  ├── vercel.json        ← Vercel config
  └── README.md

## Your live URL
After deploying, your app will be at:
  https://your-project-name.vercel.app

You can share this URL with your team — it works on any browser, no setup needed.
