// Converts the original BBMC images to compressed WebP with SEO-friendly names.
// Usage: node scripts/optimize-images.mjs <path-to-PerfectLanding/attached_assets>
import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const src = process.argv[2] ?? "../bbmc/PerfectLanding/attached_assets";
const out = path.resolve("public/images");

const map = {
  // Logo + founder
  "WhatsApp_Image_2024-10-09_at_13.29.25_02525d47_1764782945945.jpg": ["bbmc-logo", 400],
  "WhatsApp_Image_2025-12-04_at_01.01.12_a177f220_1764791221568.jpg": ["er-paspunoori-srinivas-gupta-founder-bbmc", 800],
  // Service / hero images
  "generated_images/modern_architecture_building_hero.png": ["services/architects-hyderabad-hero", 1920],
  "generated_images/architect_working_on_blueprints.png": ["services/architectural-design", 1200],
  "generated_images/engineer_at_construction_site.png": ["services/structural-engineering", 1200],
  "generated_images/vaasthu_consultation_scene.png": ["services/vastu-consultation", 1200],
  "generated_images/modern_interior_design_room.png": ["services/interior-design", 1200],
  "generated_images/builders_at_construction_site.png": ["services/construction", 1200],
  "generated_images/real_estate_development_project.png": ["services/plot-development", 1200],
  // Architecture projects
  "7fed6f05-b190-4486-acba-e757fe5491af_1764800275151.png": ["projects/commercial-complex-with-retail", 1600],
  "89ddb22a-bffb-4c3e-b7a5-701f9f128cdf_1764800278833.png": ["projects/minimalist-residential-building", 1600],
  "4256ee6d-5a19-4de6-af15-ac9bf91f479a_1764800283268.png": ["projects/contemporary-luxury-villa", 1600],
  "820319d6-06ef-43c5-a79e-0eea99cbff9c_1764800287073.png": ["projects/modern-apartment-complex", 1600],
  "8463714e-7148-4b72-8673-d725b3ba877f_1764800290473.png": ["projects/mixed-use-commercial-building", 1600],
  "b3b8c03f-9aab-412e-853a-7ee3bed645e5_1764800293357.png": ["projects/nvs-heights-tower", 1600],
  "IMG-20251204-WA0040_1764800296178.jpg": ["projects/retail-residential-complex", 1600],
  "IMG-20251204-WA0041_1764800299854.jpg": ["projects/convention-hall", 1600],
  "IMG-20251204-WA0061_1764800303296.jpg": ["projects/corporate-office-building", 1600],
  "IMG-20251204-WA0063_1764800306650.jpg": ["projects/designer-apartment-complex", 1600],
  "IMG-20251204-WA0065_1764800309875.jpg": ["projects/pareeksha-residential-tower", 1600],
  "IMG-20251204-WA0070_1764800314247.jpg": ["projects/premium-duplex-villa", 1600],
  // Interiors
  "IMG-20251204-WA0082_1764801531023.jpg": ["interiors/elegant-dining-room", 1600],
  "IMG-20251204-WA0083_1764801531023.jpg": ["interiors/modern-living-room", 1600],
  "IMG-20251204-WA0093_1764801531025.jpg": ["interiors/urban-coffee-cafe", 1600],
  "IMG-20251204-WA0095_1764801531025.jpg": ["interiors/industrial-restaurant-design", 1600],
  "IMG-20251204-WA0100_1764801452430.jpg": ["interiors/luxury-open-living-space", 1600],
  "IMG-20251204-WA0101_1764801452431.jpg": ["interiors/premium-living-with-fireplace", 1600],
  "IMG-20251204-WA0102_1764801452431.jpg": ["interiors/dark-luxury-kitchen", 1600],
  "IMG-20251204-WA0107_1764801452434.jpg": ["interiors/modern-modular-kitchen", 1600],
  "IMG-20251204-WA0108_1764801452434.jpg": ["interiors/rooftop-terrace-lounge", 1600],
  "IMG-20251204-WA0110_1764801580432.jpg": ["interiors/contemporary-bathroom", 1600],
  "IMG-20251204-WA0111_1764801580433.jpg": ["interiors/luxury-canopy-bedroom", 1600],
  "IMG-20251204-WA0117_1764801580436.jpg": ["interiors/designer-staircase", 1600],
  "IMG-20251204-WA0118_1764801580436.jpg": ["interiors/minimalist-master-bedroom", 1600],
  "IMG-20251204-WA0160_1764801580439.jpg": ["interiors/upscale-dining-experience", 1600],
  "IMG-20251204-WA0161_1764801580440.jpg": ["interiors/grand-foyer-design", 1600],
};

let before = 0;
let after = 0;
for (const [file, [name, width]] of Object.entries(map)) {
  const input = path.join(src, file);
  const output = path.join(out, `${name}.webp`);
  await mkdir(path.dirname(output), { recursive: true });
  before += (await stat(input)).size;
  await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 78 }).toFile(output);
  after += (await stat(output)).size;
}

// Logo as PNG too (for schema / favicon sources)
await sharp(path.join(src, "WhatsApp_Image_2024-10-09_at_13.29.25_02525d47_1764782945945.jpg"))
  .resize({ width: 512, height: 512, fit: "contain", background: "#ffffff" })
  .png()
  .toFile(path.resolve("app/icon.png"));

console.log(`Images: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB`);
