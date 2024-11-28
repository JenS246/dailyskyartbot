import fs from "fs/promises";

const authors = [
  "Charlotte Perkins Gilman",
  "Emmeline Pankhurst",
  "Sylvia Pankhurst",
  "Virginia Woolf",
  "Jane Addams",
  "Ida B. Wells",
  "Elizabeth Cady Stanton",
  "Susan B. Anthony",
  "Harriet Martineau",
  "Alice Paul",
  "Charlotte Despard",
  "Sarah Grand",
];

async function searchAuthorBooks(authorName) {
  try {
    const searchUrl = `https://gutendex.com/books/?search=${encodeURIComponent(
      authorName
    )}`;
    const response = await fetch(searchUrl);
    const data = await response.json();

    return data.results.map((book) => ({
      title: book.title,
      author: book.authors[0].name,
      link:
        book.formats["text/html"] ||
        book.formats["text/plain; charset=us-ascii"],
    }));
  } catch (error) {
    console.error(`Error searching for ${authorName}:`, error.message);
    return [];
  }
}

async function main() {
  const results = {};

  for (const author of authors) {
    console.log(`Searching for books by ${author}...`);
    const books = await searchAuthorBooks(author);
    results[author] = books;

    // Add a small delay to avoid overwhelming the server
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  await fs.writeFile(
    "suffragist_authors_books.json",
    JSON.stringify(results, null, 2)
  );
  console.log("Results saved to suffragist_authors_books.json");
}

main().catch(console.error);
