# SkyArtBot

A whimsical Bluesky bot that generates and posts artistic sky scenes using emojis. Each post creates a unique, randomized sky scene with various elements like weather, flying creatures, celestial objects, and more.

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your Bluesky credentials:
   ```
   BLUESKY_USERNAME=your_username
   BLUESKY_PASSWORD=your_password
   ```

## Development

```bash
npm run dev
```

## Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

3. Set up a cron job to hit the `/api/skyart` endpoint at your desired interval.

## Features

- Generates random sky scenes using emojis
- Alternates between day and night themes
- Includes various elements:
  - Weather phenomena
  - Flying creatures
  - Vehicles
  - Celestial objects
  - Decorative elements
- Adds whimsical messages to each post
