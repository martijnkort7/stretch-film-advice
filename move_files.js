const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imgDir = path.join(publicDir, 'images');
const vidDir = path.join(publicDir, 'videos');

const directories = [
  path.join(imgDir, 'brand'),
  path.join(imgDir, 'team'),
  path.join(imgDir, 'process'),
  path.join(imgDir, 'raw'),
  path.join(vidDir, 'posters')
];

for (const dir of directories) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

const moves = [
  // 1. Brand
  ['images/logo-hq.svg', 'images/brand/logo-hq.svg'],
  ['images/logo-white.png', 'images/brand/logo-white.png'],
  ['images/og-image.jpg', 'images/brand/og-image.jpg'],

  // 2. Team
  ['images/egbert-kort.webp', 'images/team/egbert-kort.webp'],
  ['images/egbert-factory-inspection.webp', 'images/team/egbert-factory-inspection.webp'],
  ['images/egbert-machine-inspection.webp', 'images/team/egbert-machine-inspection.webp'],

  // 3. Process
  ['images/banner-factory-pallets.webp', 'images/process/banner-factory-pallets.webp'],
  ['images/current-setting.webp', 'images/process/current-setting.webp'],
  ['images/current-weight.webp', 'images/process/current-weight.webp'],
  ['images/film-usage-comparison.webp', 'images/process/film-usage-comparison.webp'],
  ['images/from-a-lot-to-less.webp', 'images/process/from-a-lot-to-less.webp'],
  ['images/gear-change.webp', 'images/process/gear-change.webp'],
  ['images/holding-force-meten.webp', 'images/process/holding-force-meten.webp'],
  ['images/improved-pre-stretch.webp', 'images/process/improved-pre-stretch.webp'],
  ['images/retail-centre-pallet-aldi.webp', 'images/process/retail-centre-pallet-aldi.webp'],
  ['images/tilt-test-dupont.webp', 'images/process/tilt-test-dupont.webp'],
  ['images/26-degrees-tilt-test.webp', 'images/process/26-degrees-tilt-test.webp'],

  // 4. Raw Originals
  ['images/26 degrees tilt test.JPG', 'images/raw/26 degrees tilt test.JPG'],
  ['images/Current Weight.jpg', 'images/raw/Current Weight.jpg'],
  ['images/Current setting.jpg', 'images/raw/Current setting.jpg'],
  ['images/From a-lot to less.jpg', 'images/raw/From a-lot to less.jpg'],
  ['images/Gear change.jpg', 'images/raw/Gear change.jpg'],
  ['images/Holding Force meten .jpg', 'images/raw/Holding Force meten .jpg'],
  ['images/Improved pre stretch.jpg', 'images/raw/Improved pre stretch.jpg'],
  ['images/Retail Centre Pallet Aldi .jpg', 'images/raw/Retail Centre Pallet Aldi .jpg'],

  // 5. Videos & Posters
  ['videos/estl-tilt-test-poster.webp', 'videos/posters/estl-tilt-test-poster.webp'],
  ['videos/fast-machine-poster.jpg', 'videos/posters/fast-machine-poster.jpg'],
  ['videos/fast-machine-poster.webp', 'videos/posters/fast-machine-poster.webp'],
  ['videos/tilt-test-push-poster.webp', 'videos/posters/tilt-test-push-poster.webp']
];

for (const [src, dest] of moves) {
  const fullSrc = path.join(publicDir, '../', src); // from root
  const fullDest = path.join(publicDir, '../', dest);
  if (fs.existsSync(fullSrc)) {
    console.log(`Moving ${src} to ${dest}`);
    fs.renameSync(fullSrc, fullDest);
  } else {
    console.log(`Skipping ${src} (Not found)`);
  }
}
console.log('Done moving files.');
