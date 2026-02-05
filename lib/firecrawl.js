import FirecrawlApp from "@mendable/firecrawl-js";

const firecrawl = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export async function scrapeProduct(url) {
  try {
    const safeUrl = String(url).trim();

    if (!safeUrl) {
      throw new Error("Invalid URL");
    }

    // correct v2 method
    const result = await firecrawl.scrape(safeUrl, {
      formats: ["markdown"],
    });

    if (!result || !result.markdown) {
      throw new Error("No content scraped");
    }

    // TEMP simple return so DB insert works
    return {
      productName: safeUrl,
      currentPrice: 0,
      currencyCode: "USD",
      productImageUrl: null,
    };

  } catch (error) {
    console.error("Firecrawl scrape error:", error);
    throw new Error(`Failed to scrape product: ${error.message}`);
  }
}
