/**
 * Generates web-optimized images in public/img/ from the originals in assets/img/.
 *
 *   node scripts/optimize-images.mjs
 *
 * GitHub Pages serves static files as-is (no image optimizer), so images must
 * ship already sized and compressed. Originals stay in assets/ (not deployed).
 */
import { readdir, mkdir } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const SRC = "assets/img";
const OUT = "public/img";

// Max width per image (px). Anything not listed keeps its intrinsic width.
const MAX_WIDTH = {
  "nature": 1400,
  "building": 1000,
  "house": 1000,
  "usocome-logo": 800,
  "emait-logo": 400,
  "logo": 600,
};

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC)).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const { name } = parse(file);
  const input = join(SRC, file);
  const img = sharp(input);
  const { width } = await img.metadata();
  const target = MAX_WIDTH[name];
  const pipeline = sharp(input).rotate();
  if (target && width && width > target) {
    pipeline.resize({ width: target, withoutEnlargement: true });
  }
  const outPath = join(OUT, `${name}.webp`);
  const info = await pipeline
    .webp({ quality: 78, effort: 6 })
    .toFile(outPath);
  console.log(
    `${file} -> ${name}.webp  ${(info.size / 1024).toFixed(1)} KiB  ${info.width}x${info.height}`,
  );
}

// Social share card (1200x630) — dark ground + wordmark + tagline.
const og = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0b0f0a"/>
  <rect width="1200" height="8" y="622" fill="#7ed957"/>
  <text x="80" y="300" font-family="Inter, Arial, sans-serif" font-size="96" font-weight="800" fill="#ffffff">Re<tspan fill="#7ed957">take</tspan></text>
  <text x="80" y="380" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="500" fill="#c7ccc3">Rachat et reconditionnement de</text>
  <text x="80" y="432" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="500" fill="#c7ccc3">matériel informatique</text>
  <text x="80" y="560" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="400" fill="#8a917f">retake.fr · Strasbourg</text>
</svg>`;
const ogInfo = await sharp(Buffer.from(og)).png().toFile(join("public", "og.png"));
console.log(`og.png  ${(ogInfo.size / 1024).toFixed(1)} KiB  ${ogInfo.width}x${ogInfo.height}`);
