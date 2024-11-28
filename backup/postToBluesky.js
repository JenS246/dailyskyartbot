import { BskyAgent } from "@atproto/api";
import * as dotenv from "dotenv";
import { getRandomBook, getBookContent, generateQuote } from "./getquote.js";

dotenv.config();

// Bluesky Configuration
const agent = new BskyAgent({
  service: "https://bsky.social",
});

async function postToBluesky(quote, book) {
  try {
    await agent.login({
      identifier: process.env.BLUESKY_USERNAME,
      password: process.env.BLUESKY_PASSWORD,
    });

    const post = `"${quote}"\n\n— ${book.author}, "${book.title}"`;

    await agent.post({
      text: post,
    });

    console.log("Successfully posted to Bluesky!");
  } catch (error) {
    console.error("Error posting to Bluesky:", error);
    throw error;
  }
}

async function main() {
  try {
    const book = await getRandomBook();
    console.log(`Selected book: ${book.title} by ${book.author}`);

    const content = await getBookContent(book);
    console.log("Book content loaded successfully");

    const quote = await generateQuote(content);
    console.log("\nGenerated Quote:");
    console.log("---------------");
    console.log(quote);

    await postToBluesky(quote, book);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
