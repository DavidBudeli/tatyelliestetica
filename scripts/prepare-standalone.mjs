import { cp, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const standaloneDir = path.join(root, ".next", "standalone");

if (!existsSync(standaloneDir)) {
  throw new Error("Standalone build não encontrado. Rode next build antes de preparar o deploy.");
}

await mkdir(path.join(standaloneDir, ".next"), { recursive: true });

const publicDir = path.join(root, "public");
const staticDir = path.join(root, ".next", "static");

if (existsSync(publicDir)) {
  await cp(publicDir, path.join(standaloneDir, "public"), { recursive: true, force: true });
}

if (existsSync(staticDir)) {
  await cp(staticDir, path.join(standaloneDir, ".next", "static"), { recursive: true, force: true });
}

console.log("Standalone preparado para deploy Node.js.");
