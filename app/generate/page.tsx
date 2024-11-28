"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const generateQuote = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/generate");
      const data = await response.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to generate quote");
      }

      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow sm:rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Suffragist Quote Generator
          </h1>

          <button
            onClick={generateQuote}
            disabled={loading}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate & Post Quote"}
          </button>

          {error && (
            <div className="mt-4 text-red-600 bg-red-50 p-4 rounded-md">
              {error}
            </div>
          )}

          {result && (
            <div className="mt-8 space-y-4">
              <div className="border-l-4 border-indigo-500 pl-4 py-2 italic">
                "{result.quote}"
              </div>
              <div className="text-gray-600">
                — {result.book.author}, "{result.book.title}"
              </div>
              <div className="text-green-600 font-medium">{result.message}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
