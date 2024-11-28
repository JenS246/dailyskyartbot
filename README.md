# Suffragist Quote Bot

A Next.js application that generates and posts meaningful quotes from suffragist authors to Bluesky.

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required credentials:

- `BLUESKY_USERNAME`: Your Bluesky handle (e.g., username.bsky.social)
- `BLUESKY_PASSWORD`: Your Bluesky password
- `GEMINI_API_KEY`: Your Google Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. Run the development server:

```bash
npm run dev
```

5. Visit `http://localhost:3000/generate` to generate and post quotes

## Features

- Randomly selects books from suffragist authors
- Generates meaningful quotes using Google's Gemini AI
- Posts formatted quotes to Bluesky
- Beautiful UI for manual quote generation

## Security Note

Never commit your `.env` file or expose your credentials. The `.env` file is listed in `.gitignore` to prevent accidental commits.
