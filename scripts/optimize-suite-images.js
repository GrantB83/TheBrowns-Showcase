import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SUITE_IMAGES_DIR = path.join(__dirname, '../public/images/suites');
const OPTIMIZED_DIR = path.join(__dirname, '../public/images/suites/optimized');

const SIZES = {
  thumbnail: 400,
  medium: 800,
  large: 1200
};

const QUALITY = {
  webp: 80,
  jpeg: 85
};

async function optimizeSuiteImages() {
  console.log('🎨 Starting suite image optimization...');
  
  // Create optimized directory
  if (!fs.existsSync(OPTIMIZED_DIR)) {
    fs.mkdirSync(OPTIMIZED_DIR, { recursive: true });
  }

  // Get all JPEG images
  const files = fs.readdirSync(SUITE_IMAGES_DIR)
    .filter(file => file.endsWith('.jpg') && !file.includes('optimized'));

  console.log(`📸 Found ${files.length} suite images to optimize...`);

  for (const fileName of files) {
    const inputPath = path.join(SUITE_IMAGES_DIR, fileName);
    
    try {
      const image = sharp(inputPath);
      const metadata = await image.metadata();
      
      const originalSize = (fs.statSync(inputPath).size / 1024).toFixed(0);
      console.log(`\n📸 Processing ${fileName} (${originalSize}KB)...`);

      // Generate optimized variants
      for (const [sizeName, width] of Object.entries(SIZES)) {
        const height = Math.round((width * metadata.height) / metadata.width);
        
        // WebP variant
        const webpPath = path.join(OPTIMIZED_DIR, `${fileName.replace('.jpg', '')}-${sizeName}.webp`);
        await image
          .resize(width, height, { fit: 'cover', position: 'center' })
          .webp({ quality: QUALITY.webp })
          .toFile(webpPath);
        
        // Optimized JPEG fallback
        const jpegPath = path.join(OPTIMIZED_DIR, `${fileName.replace('.jpg', '')}-${sizeName}.jpg`);
        await image
          .resize(width, height, { fit: 'cover', position: 'center' })
          .jpeg({ quality: QUALITY.jpeg, progressive: true })
          .toFile(jpegPath);
        
        const webpSize = (fs.statSync(webpPath).size / 1024).toFixed(0);
        const jpegSize = (fs.statSync(jpegPath).size / 1024).toFixed(0);
        
        console.log(`   ${sizeName}: ${width}x${height} - WebP: ${webpSize}KB, JPEG: ${jpegSize}KB`);
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${fileName}:`, error.message);
    }
  }
  
  console.log('\n✅ Suite image optimization complete!');
}

// Run the optimization
optimizeSuiteImages().catch(console.error);
