const fs = require("fs");
const path = require("path");

const replacements = [
  ["https://execor.vamtam.com/wp-content/", "/wp-content/"],
  ["https://execor.vamtam.com/wp-includes/", "/wp-includes/"],
  ["https://execor.vamtam.com/cdn-cgi/", "/cdn-cgi/"],
];

const rewrite = (markup) =>
  replacements.reduce(
    (acc, [remote, local]) => acc.split(remote).join(local),
    markup
  );

const html = fs.readFileSync(
  path.join(process.cwd(), "static-website/service-page.html"),
  "utf8"
);
const rewritten = rewrite(html);

const regex = /(href|src)="(\/[^"?#]+)(?:[?#][^"]*)?"/g;
const root = path.join(process.cwd(), "public");
const missing = new Set();
let match;

while ((match = regex.exec(rewritten))) {
  const url = match[2];
  if (!url.startsWith("/wp-") && !url.startsWith("/cdn-cgi/")) {
    continue;
  }
  const filePath = path.join(root, url);
  if (!fs.existsSync(filePath)) {
    missing.add(url);
  }
}

console.log("Missing", missing.size);
if (missing.size) {
  console.log([...missing].join("\n"));
}
