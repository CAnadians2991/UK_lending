// HTML -> A4 PDF converter using Playwright + bundled Chromium.
//
// Note: this project's network policy blocks external hosts, so Google Fonts
// will fall back to system fonts. All CSS colors, gradients, cards and the
// JS-rendered content are preserved.
//
// Usage: node convert_to_pdf.mjs [input.html] [output.pdf]

// Resolve the globally-installed playwright (no local node_modules in this repo).
const playwrightPath =
  process.env.PLAYWRIGHT_MODULE ||
  "/opt/node22/lib/node_modules/playwright/index.js";
const pw = await import(playwrightPath);
const chromium = pw.chromium || pw.default?.chromium;
import path from "node:path";
import { pathToFileURL } from "node:url";

const htmlPath = process.argv[2] || "country.html";
const pdfPath = process.argv[3] || htmlPath.replace(/\.html?$/i, "") + ".pdf";

async function htmlToPdf(input, output) {
  const absPath = path.resolve(input);
  const fileUrl = pathToFileURL(absPath).href;

  const browser = await chromium.launch();
  const page = await browser.newPage();

  // The page renders its content via JS on load; fonts are fetched from
  // Google Fonts (blocked offline) so we wait on 'load' rather than
  // 'networkidle' and then give scripts/fonts a moment to settle.
  await page.goto(fileUrl, { waitUntil: "load", timeout: 60000 });
  await page.waitForTimeout(2500);

  // Hide interactive overlays that shouldn't appear in a static print:
  // the cookie-consent banner and the floating messenger button.
  await page.addStyleTag({
    content:
      "#siteCookies, #cookieBanner, #siteMessenger, .messenger-fab { display: none !important; }",
  });

  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true, // keep colored backgrounds / gradients
    margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
  });

  await browser.close();
  console.log(`PDF saved: ${output}`);
}

await htmlToPdf(htmlPath, pdfPath);
