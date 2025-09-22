import { createFooter } from '../src/components/footer.js';
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const distDir = 'dist';

// Function to inline footer in a file
function inlineFooter(filePath, layout, currentPage) {
  const fullPath = join(distDir, filePath);
  let content = readFileSync(fullPath, 'utf8');

  // Generate the footer HTML
  const footerHtml = createFooter({ layout, currentPage });

  // Replace the placeholder
  content = content.replace(
    '<div id="footer-placeholder"></div>',
    footerHtml
  );

  writeFileSync(fullPath, content, 'utf8');
  console.log(`Inlined footer in ${filePath}`);
}

// Inline footer in index.html (simple layout)
inlineFooter('index.html', 'simple', 'home');

// Inline footer in pve.html (full layout)
inlineFooter('pve.html', 'full', 'pve');

console.log('Footer inlining complete!');
