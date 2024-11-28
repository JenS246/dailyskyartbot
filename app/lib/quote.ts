import fs from "fs";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BskyAgent } from "@atproto/api";

// Configuration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Bluesky Configuration
const agent = new BskyAgent({
  service: "https://bsky.social",
});

const MAX_POST_LENGTH = 300;

export async function getRandomBook() {
  try {
    const filePath = path.join(
      process.cwd(),
      "app/data/suffragist_authors_books.json"
    );
    const booksData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const authors = Object.keys(booksData);
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    const authorBooks = booksData[randomAuthor];

    if (authorBooks.length === 0) {
      return getRandomBook();
    }

    const randomBook =
      authorBooks[Math.floor(Math.random() * authorBooks.length)];
    return {
      ...randomBook,
      author: randomAuthor,
    };
  } catch (error) {
    console.error("Error reading books file:", error);
    throw error;
  }
}

export async function getBookContent(book: any) {
  try {
    const response = await fetch(book.link);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const content = await response.text();
    return content;
  } catch (error) {
    console.error("Error fetching book content:", error);
    throw error;
  }
}

export async function generateQuote(bookContent: string) {
  const prompt = `Extract a very short, meaningful quote from the following text. The quote should be profound and thought-provoking, but MUST be under 200 characters in length. Return only the quote itself, without any additional commentary or quotation marks:\n\n${bookContent}`;

  try {
    const result = await model.generateContent(prompt);
    let quote = result.response.text();

    // Remove any quotation marks from the generated quote
    quote = quote.replace(/["""]/g, "");
    // Remove any newlines
    quote = quote.replace(/\n/g, " ");
    // Trim any extra spaces
    quote = quote.trim();

    // If quote is too long, try again
    if (quote.length > 200) {
      return generateQuote(bookContent);
    }

    return quote;
  } catch (error) {
    console.error("Error generating quote:", error);
    throw error;
  }
}

export async function postToBluesky(quote: string, book: any) {
  try {
    await agent.login({
      identifier: process.env.BLUESKY_USERNAME!,
      password: process.env.BLUESKY_PASSWORD!,
    });

    // Truncate title if needed to fit within limits
    let title = book.title;
    let author = book.author;
    let post = `"${quote}"\n—${author}, "${title}"`;

    // If post is too long, truncate the title
    if (post.length > MAX_POST_LENGTH) {
      const excessLength = post.length - MAX_POST_LENGTH + 3; // +3 for "..."
      title = title.slice(0, -excessLength) + "...";
      post = `"${quote}"\n\n—${author}, "${title}"`;
    }

    await agent.post({
      text: post,
    });

    return { success: true, message: "Successfully posted to Bluesky!" };
  } catch (error) {
    console.error("Error posting to Bluesky:", error);
    throw error;
  }
}
