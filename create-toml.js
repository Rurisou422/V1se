import { writeFileSync } from 'fs';

const content = `[build]
command = "npm run build"
publish = "dist"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200`;

// Write the file without BOM
writeFileSync('netlify.toml', content, { encoding: 'ascii' });

console.log('netlify.toml file created successfully without BOM'); 