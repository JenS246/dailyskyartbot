import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Configuration
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function getRandomBook() {
  try {
    const booksData = JSON.parse(
      fs.readFileSync("suffragist_authors_books.json", "utf8")
    );

    // Get all authors
    const authors = Object.keys(booksData);

    // Get a random author
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];

    // Get the author's books
    const authorBooks = booksData[randomAuthor];

    // If author has no books, try again
    if (authorBooks.length === 0) {
      return getRandomBook();
    }

    // Get a random book from this author
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

export async function getBookContent(book) {
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

export async function generateQuote(bookContent) {
  const prompt = `Extract a meaningful and interesting quote from the following text. The quote should be profound, thought-provoking, or emotionally resonant. Return only the quote itself, without any additional commentary:\n\n${bookContent}`;

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Error generating quote:", error);
    throw error;
  }
}

// Only run main if this file is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
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
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  main();
}
