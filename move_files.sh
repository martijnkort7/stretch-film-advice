#!/bin/bash
mkdir -p public/images/brand public/images/team public/images/process public/images/raw public/videos/posters

# 1. Brand
mv "public/images/logo-hq.svg" "public/images/brand/"
mv "public/images/logo-white.png" "public/images/brand/"
mv "public/images/og-image.jpg" "public/images/brand/"

# 2. Team
mv "public/images/egbert-kort.webp" "public/images/team/"
mv "public/images/egbert-factory-inspection.webp" "public/images/team/"
mv "public/images/egbert-machine-inspection.webp" "public/images/team/"

# 3. Process
mv "public/images/banner-factory-pallets.webp" "public/images/process/"
mv "public/images/current-setting.webp" "public/images/process/"
mv "public/images/current-weight.webp" "public/images/process/"
mv "public/images/film-usage-comparison.webp" "public/images/process/"
mv "public/images/from-a-lot-to-less.webp" "public/images/process/"
mv "public/images/gear-change.webp" "public/images/process/"
mv "public/images/holding-force-meten.webp" "public/images/process/"
mv "public/images/improved-pre-stretch.webp" "public/images/process/"
mv "public/images/retail-centre-pallet-aldi.webp" "public/images/process/"
mv "public/images/tilt-test-dupont.webp" "public/images/process/"
mv "public/images/26-degrees-tilt-test.webp" "public/images/process/"

# 4. Raw Originals
mv "public/images/26 degrees tilt test.JPG" "public/images/raw/"
mv "public/images/Current Weight.jpg" "public/images/raw/"
mv "public/images/Current setting.jpg" "public/images/raw/"
mv "public/images/From a-lot to less.jpg" "public/images/raw/"
mv "public/images/Gear change.jpg" "public/images/raw/"
mv "public/images/Holding Force meten .jpg" "public/images/raw/"
mv "public/images/Improved pre stretch.jpg" "public/images/raw/"
mv "public/images/Retail Centre Pallet Aldi .jpg" "public/images/raw/"

# 5. Videos & Posters
mv "public/videos/estl-tilt-test-poster.webp" "public/videos/posters/"
mv "public/videos/fast-machine-poster.jpg" "public/videos/posters/"
mv "public/videos/fast-machine-poster.webp" "public/videos/posters/"
mv "public/videos/tilt-test-push-poster.webp" "public/videos/posters/"

echo "Files moved successfully!"
