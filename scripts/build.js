#!/usr/bin/env node
// Package the extension into dist/cookie-manager-v<version>.zip for Chrome Web Store / local install.
const fs = require("fs");
const path = require("path");
const archiver = require("archiver");

const ROOT = path.join(__dirname, "..");
const NAME = "cookie-manager";
const DIST = path.join(ROOT, "dist");
const OUT_DIR = path.join(DIST, NAME);

const FILES = [
  "manifest.json",
  "background.js",
  "popup.html",
  "popup.css",
  "popup.js",
  "locales/en.js",
  "locales/zh.js",
  "public/icon.png",
  // "public/icon48.png",
  // "public/icon128.png",
];

const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, "manifest.json"), "utf8"));
const zipPath = path.join(DIST, `${NAME}-v${manifest.version}.zip`);

fs.rmSync(DIST, { recursive: true, force: true });

for (const file of FILES) {
  const dest = path.join(OUT_DIR, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(path.join(ROOT, file), dest);
}

const output = fs.createWriteStream(zipPath);
const archive = archiver("zip", { zlib: { level: 9 } });

output.on("close", () => {
  console.log("Build complete:");
  console.log(`  - Unpacked: ${path.relative(ROOT, OUT_DIR)}`);
  console.log(`  - Zip:      ${path.relative(ROOT, zipPath)} (${(archive.pointer() / 1024).toFixed(1)} KB)`);
});

archive.on("error", (err) => {
  throw err;
});

archive.pipe(output);
archive.directory(OUT_DIR, NAME);
archive.finalize();
