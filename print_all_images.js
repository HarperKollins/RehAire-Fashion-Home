const fs = require('fs');
const html = fs.readFileSync('c:\\Users\\Harper\\Desktop\\RehAire-Fashion-Home\\index.html', 'utf8');

console.log("=== GALLERY IMAGES ===");
const galleryRegex = /data-gallery-cat="([^"]+)"[\s\S]*?src="([^"]+)"/g;
let match;
while ((match = galleryRegex.exec(html)) !== null) {
    console.log(`Cat: ${match[1]} -> Src: ${match[2]}`);
}

console.log("\n=== COLLECTIONS IMAGES ===");
const collRegex = /<img\s+[^>]*src="([^"]+)"[\s\S]*?<h3\s+[^>]*class="[^"]*font-serif[^"]*"[^>]*>([\s\S]*?)<\/h3>/g;
while ((match = collRegex.exec(html)) !== null) {
    console.log(`Title: ${match[2].trim()} -> Src: ${match[1]}`);
}
