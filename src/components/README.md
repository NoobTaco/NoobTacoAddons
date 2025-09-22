# Modular Components

This site uses reusable JavaScript modules for common UI components.

## Components

### Footer (`src/components/footer.js`)
Creates a footer with two layouts:
- `simple`: Centered layout for the home page
- `full`: Detailed layout with navigation for content pages

Usage:
```javascript
import { createFooter } from './components/footer.js';
const footerHTML = createFooter({ layout: 'full', currentPage: 'pve' });
```

### Header (`src/components/header.js`)
Creates a navigation header with responsive mobile menu.

Usage:
```javascript
import { createNavHeader } from './components/header.js';
const headerHTML = createNavHeader({ currentPage: 'pve' });
```

## Implementation

Components are loaded via `src/footer-loader.js` which:
1. Detects the current page
2. Inserts appropriate components into placeholders
3. Initializes interactive functionality (mobile menu)

## Adding New Pages

To use these components on new pages:
1. Add placeholders in your HTML:
   ```html
   <div id="header-placeholder"></div>
   <!-- page content -->
   <div id="footer-placeholder"></div>
   ```
2. Include the loader script:
   ```html
   <script type="module" src="src/footer-loader.js"></script>
   ```
