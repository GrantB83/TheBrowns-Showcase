import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const HERO_IMAGES = [
  'browns-exterior.jpg',
  'gardens-mountains.jpg', 
  'suite-interior.jpg'
];

const SIZES = {
  mobile: 768,
  tablet: 1200,
  desktop: 1920,
  large: 2560
};

const QUALITY = {
  webp: 80,
  avif: 70,
  jpeg: 85
};

async function optimizeHeroImages() {
  console.log('🎨 Starting hero image optimization...');
  
  const heroDir = path.join(__dirname, '../public/images/hero');
  const optimizedDir = path.join(__dirname, '../public/images/hero/optimized');
  
  // Create optimized directory
  if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
  }

  for (const imageName of HERO_IMAGES) {
    const inputPath = path.join(heroDir, imageName);
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Skipping ${imageName} - file not found`);
      continue;
    }

    console.log(`\n📸 Processing ${imageName}...`);
    
    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      console.log(`   Original: ${metadata.width}x${metadata.height} (${(fs.statSync(inputPath).size / 1024 / 1024).toFixed(1)}MB)`);

      // Generate responsive variants
      for (const [sizeName, width] of Object.entries(SIZES)) {
        const height = Math.round((width * metadata.height) / metadata.width);
        
        // WebP variant
        const webpPath = path.join(optimizedDir, `${imageName.replace('.jpg', '')}-${sizeName}.webp`);
        await image
          .resize(width, height, { fit: 'cover', position: 'center' })
          .webp({ quality: QUALITY.webp })
          .toFile(webpPath);
        
        // AVIF variant (for modern browsers)
        const avifPath = path.join(optimizedDir, `${imageName.replace('.jpg', '')}-${sizeName}.avif`);
        await image
          .resize(width, height, { fit: 'cover', position: 'center' })
          .avif({ quality: QUALITY.avif })
          .toFile(avifPath);
        
        // Optimized JPEG fallback
        const jpegPath = path.join(optimizedDir, `${imageName.replace('.jpg', '')}-${sizeName}.jpg`);
        await image
          .resize(width, height, { fit: 'cover', position: 'center' })
          .jpeg({ quality: QUALITY.jpeg, progressive: true })
          .toFile(jpegPath);
        
        const webpSize = (fs.statSync(webpPath).size / 1024).toFixed(0);
        const avifSize = (fs.statSync(avifPath).size / 1024).toFixed(0);
        const jpegSize = (fs.statSync(jpegPath).size / 1024).toFixed(0);
        
        console.log(`   ${sizeName}: ${width}x${height} - WebP: ${webpSize}KB, AVIF: ${avifSize}KB, JPEG: ${jpegSize}KB`);
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${imageName}:`, error.message);
    }
  }
  
  console.log('\n✅ Hero image optimization complete!');
}

// Run the optimization
optimizeHeroImages().catch(console.error);
