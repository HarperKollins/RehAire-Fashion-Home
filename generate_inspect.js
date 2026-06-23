const fs = require('fs');
const path = require('path');

const dirPath = 'c:\\Users\\Harper\\Desktop\\RehAire-Fashion-Home\\WhatsApp Unknown 2026-06-06 at 13.58.29';
const files = fs.readdirSync(dirPath).filter(f => f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.png'));

let html = `<!DOCTYPE html>
<html>
<head>
    <title>Inspect All Images</title>
    <style>
        body { font-family: sans-serif; background: #222; color: #fff; margin: 20px; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
        .card { border: 1px solid #444; padding: 10px; background: #333; text-align: center; border-radius: 8px; }
        img { max-width: 100%; height: 200px; object-fit: contain; background: #111; margin-bottom: 10px; }
        .name { font-size: 12px; word-break: break-all; margin-bottom: 5px; }
        .index { font-weight: bold; font-size: 16px; color: #D4AF37; }
    </style>
</head>
<body>
    <h1>Inspect All RehAire Images (${files.length} found)</h1>
    <div class="grid">
`;

files.forEach((file, index) => {
    const encoded = encodeURIComponent(file);
    html += `
        <div class="card" id="card-${index}">
            <div class="index">#${index}</div>
            <img src="./WhatsApp%20Unknown%202026-06-06%20at%2013.58.29/${encoded}" alt="${file}">
            <div class="name">${file}</div>
        </div>
    `;
});

html += `
    </div>
</body>
</html>
`;

fs.writeFileSync('c:\\Users\\Harper\\Desktop\\RehAire-Fashion-Home\\inspect_all.html', html, 'utf8');
console.log("inspect_all.html generated successfully with " + files.length + " images.");
