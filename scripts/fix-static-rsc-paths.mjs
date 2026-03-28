import fs from "node:fs";
import path from "node:path";

const outDir = path.resolve(process.cwd(), "out");

function walk(dir, cb) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    cb(fullPath, entry);
    if (entry.isDirectory()) {
      walk(fullPath, cb);
    }
  }
}

if (!fs.existsSync(outDir)) {
  console.log("[fix-static-rsc-paths] out/ not found. Skipping.");
  process.exit(0);
}

const copied = [];

walk(outDir, (fullPath, entry) => {
  if (!entry.isDirectory()) return;
  if (!entry.name.startsWith("__next.")) return;

  const pageTxt = path.join(fullPath, "__PAGE__.txt");
  if (!fs.existsSync(pageTxt)) return;

  const parentDir = path.dirname(fullPath);
  const dottedName = `${entry.name}.__PAGE__.txt`;
  const target = path.join(parentDir, dottedName);

  fs.copyFileSync(pageTxt, target);
  copied.push(path.relative(outDir, target));
});

if (copied.length === 0) {
  console.log("[fix-static-rsc-paths] No compatibility files needed.");
} else {
  console.log(
    `[fix-static-rsc-paths] Created ${copied.length} compatibility file(s):`
  );
  for (const file of copied) {
    console.log(` - ${file}`);
  }
}
