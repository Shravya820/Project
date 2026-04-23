# AI Movie Assistant 🎬

A multilingual AI-powered movie recommendation chatbot built with React + Vite, connected to n8n workflow.

## Features
- Movie recommendations in any language (Telugu, Tamil, Hindi, Korean, English, etc.)
- Mood-based suggestions
- Genre filtering
- Language selector dropdown
- Beautiful dark theme chat UI

## Setup Instructions

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Update Webhook URL
Open `src/pages/Index.tsx` and replace the WEBHOOK_URL with your n8n Production URL:
```
const WEBHOOK_URL = "https://your-n8n-domain/webhook/your-id";
```

### Step 3 — Run the app
```bash
npm run dev
```

### Step 4 — Open in browser
```
http://localhost:5173
```

## Tech Stack
- React 18 + TypeScript
- Vite
- Tailwind CSS
- n8n (AI workflow backend)
- Groq AI (llama-3.3-70b-versatile)
