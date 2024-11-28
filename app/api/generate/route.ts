import { NextResponse } from "next/server";
import {
  getRandomBook,
  getBookContent,
  generateQuote,
  postToBluesky,
} from "@/app/lib/quote";

export async function GET() {
  try {
    // Get a random book
    const book = await getRandomBook();
    console.log(`Selected book: ${book.title} by ${book.author}`);

    // Get the book content
    const content = await getBookContent(book);
    console.log("Book content loaded successfully");

    // Generate a quote
    const quote = await generateQuote(content);
    console.log("\nGenerated Quote:", quote);

    // Post to Bluesky
    const result = await postToBluesky(quote, book);

    return NextResponse.json({
      success: true,
      book,
      quote,
      message: result.message,
    });
  } catch (error: any) {
    console.error("Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
