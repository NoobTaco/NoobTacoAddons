/**
 * Creates a reusable card component
 * @param {Object} options - Configuration options for the card
 * @param {string} options.type - 'category' for category cards, 'addon' for addon cards
 * @param {string} options.title - Card title
 * @param {string} options.description - Card description
 * @param {string} options.icon - Icon HTML/SVG or image URL
 * @param {string} options.link - Link URL (optional)
 * @param {Array} options.tags - Array of tag objects with text and color classes
 * @param {string} options.status - Status text like 'Available Now →' or 'Coming Soon...'
 * @param {string} options.statusClass - CSS classes for status styling
 * @param {boolean} options.comingSoon - Whether card is coming soon (applies blur effect)
 * @param {string} options.priority - Priority badge text (for addon cards)
 * @param {string} options.priorityClass - CSS classes for priority badge
 * @param {Array} options.downloadLinks - Array of download link objects
 * @param {string} options.additionalContent - Extra HTML content
 * @returns {string} HTML string for the card
 */
export function createCard({
    type = 'category',
    title,
    description,
    icon,
    link,
    tags = [],
    status,
    statusClass = 'text-blue-600 dark:text-blue-400 font-semibold',
    comingSoon = false,
    priority,
    priorityClass = 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    downloadLinks = [],
    additionalContent = '',
    addonIcon // New parameter for addon-specific icons
} = {}) {
    const baseClasses = type === 'category' ? 'category-card' : 'addon-card';
    const comingSoonClasses = comingSoon ? 'coming-soon' : '';
    const cardContent = type === 'category' ? createCategoryCardContent({
        title, description, icon, tags, status, statusClass, comingSoon
    }) : createAddonCardContent({
        title, description, priority, priorityClass, downloadLinks, additionalContent, addonIcon
    });

    const cardHTML = `
        <div class="${baseClasses} ${comingSoonClasses} p-6 ${type === 'addon' ? 'flex flex-col' : ''}">
            ${cardContent}
        </div>
    `;

    return link ? `<a href="${link}" class="block">${cardHTML}</a>` : cardHTML;
}

function createCategoryCardContent({ title, description, icon, tags, status, statusClass, comingSoon }) {
    const tagsHTML = tags.map(tag => `
        <span class="${tag.class} px-3 py-1 rounded-full text-sm font-medium">${tag.text}</span>
    `).join('');

    return `
        <div class="text-center">
            <div class="w-16 h-16 ${icon.includes('<svg') ? 'flex items-center justify-center' : ''} mx-auto mb-4">
                ${icon}
            </div>
            <h3 class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                ${title}
            </h3>
            <p class="text-slate-600 dark:text-slate-300 mb-4">
                ${description}
            </p>
            ${tags.length > 0 ? `<div class="flex flex-wrap justify-center gap-2">${tagsHTML}</div>` : ''}
            ${status ? `<div class="mt-6 ${statusClass}">${status}</div>` : ''}
        </div>
    `;
}

function createAddonCardContent({ title, description, priority, priorityClass, downloadLinks, additionalContent, addonIcon }) {
    const priorityHTML = priority ? `
        <div class="px-4 py-2 border-b border-slate-200 dark:border-slate-600">
            <span class="text-xs font-semibold ${priorityClass} px-2.5 py-1 rounded-full">${priority}</span>
        </div>
    ` : '';

    const downloadLinksHTML = downloadLinks.map(link => `
        ${createSourceButton(link)}
    `).join('');

    return `
        <div class="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 px-4 py-3 flex items-center justify-between">
            ${addonIcon ? `<img src="${addonIcon}" alt="${title} icon" class="w-8 h-8 rounded">` : ''}
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100 text-right flex-1 ml-3">${title}</h3>
        </div>
        ${priorityHTML}
        <div class="p-4 flex-1 flex flex-col">
            <p class="mt-2 text-slate-600 dark:text-slate-300 flex-grow">${description}</p>
            ${additionalContent}
            ${downloadLinks.length > 0 ? `<div class="mt-4 flex flex-wrap items-center gap-3">${downloadLinksHTML}</div>` : ''}
        </div>
    `;
}

/**
 * Create an inline source download button with a small icon/label
 * Accepts link objects shaped like: { site: 'curseforge'|'wago'|'github', url, text, class }
 */
function createSourceButton(link) {
    const site = (link.site || '').toLowerCase();
    const url = link.url || '#';
    const baseClass = link.class || 'inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200';

    const siteMap = {
        curseforge: {
            label: 'CF',
            title: 'CurseForge',
            classes: 'bg-orange-600 hover:bg-orange-700 text-white',
            // Inline the SVG (from public/assets/images/curseforge-svgrepo-com.svg)
            // and use `currentColor` for the path fill so the icon color follows
            // the button text color (allows switching between black/white).
            icon: `<svg class="w-4 h-4" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m6.307 5.581.391 1.675H0s.112.502.167.558c.168.279.335.614.559.837 1.06 1.228 2.902 1.73 4.409 2.009 1.06.224 2.121.28 3.181.335l1.228 3.293h.67l.391 1.061h-.558l-.949 3.07h9.321l-.949-3.07h-.558l.39-1.061h.67s.558-3.404 2.288-4.967C21.935 7.758 24 7.535 24 7.535V5.581H6.307zm9.377 8.428c-.447.279-.949.279-1.284.503-.223.111-.335.446-.335.446-.223-.502-.502-.67-.837-.781-.335-.112-.949-.056-1.786-.782-.558-.502-.614-1.172-.558-1.507v-.167c0-.056 0-.112.056-.168.111-.334.39-.669.948-.893 0 0-.39.559 0 1.117.224.335.67.502 1.061.279.167-.112.279-.335.335-.503.111-.39.111-.781-.224-1.06-.502-.446-.613-1.06-.279-1.451 0 0 .112.502.614.446.335 0 .335-.111.224-.223-.056-.167-.782-1.228.279-2.009 0 0 .669-.447 1.451-.391-.447.056-.949.335-1.116.782v.055c-.168.447-.056.949.279 1.396.223.335.502.614.614 1.06-.168-.056-.279 0-.391.112a.533.533 0 0 0-.112.502c.056.112.168.223.279.223h.168c.167-.055.279-.279.223-.446.112.111.167.391.112.558 0 .167-.112.335-.168.446-.056.112-.167.224-.223.335-.056.112-.112.224-.112.335 0 .112 0 .279.056.391.223.335.67 0 .782-.279.167-.335.111-.726-.112-1.061 0 0 .391.224.67 1.005.223.67-.168 1.451-.614 1.73z"/></svg>`
        },
        wago: {
            label: 'WAGO',
            title: 'Wago',
            classes: 'bg-amber-600 hover:bg-amber-700 text-white',
            // Use the local PNG icon and preserve its aspect ratio by
            // setting only the height (Tailwind `h-4`) and omitting a fixed width.
            icon: `<img src="assets/images/wago-icon.png" alt="Wago" class="h-4 rounded"/>`
        },
        github: {
            label: 'GH',
            title: 'GitHub',
            // Add a subtle border and a slightly lighter dark-mode border color
            // so the button edge separates from dark card backgrounds.
            classes: 'bg-slate-800 hover:bg-slate-900 text-white border border-slate-700 dark:border-slate-600',
            icon: `<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`
        }
    };

    const info = siteMap[site];

    if (info) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Download from ${info.title}" title="${info.title}" class="${baseClass} ${info.classes}">
            <span class="inline-flex items-center justify-center">${info.icon}</span>
            <span>${info.label}</span>
        </a>`;
    }

    // Fallback generic button
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" title="${link.text || 'Download'}" class="${baseClass} bg-blue-600 hover:bg-blue-700 text-white">
        <span>${link.text || 'Download'}</span>
    </a>`;
}

/**
 * Creates addon site icons
 * @param {string} site - The addon site name ('curseforge', 'wago', 'wowinterface')
 * @param {string} size - Size class (default: 'w-8 h-8')
 * @returns {string} SVG icon HTML
 */
export function createAddonSiteIcon(site, size = 'w-8 h-8') {
    const icons = {
        curseforge: `<svg class="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#F16421"/>
            <path d="M7 7h10v2H7V7zm0 3h10v2H7v-2zm0 3h7v2H7v-2z" fill="white"/>
        </svg>`,
        wago: `<svg class="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#FF6B35"/>
            <path d="M8 12l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        wowinterface: `<svg class="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#2D5AA0"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="bold">WI</text>
        </svg>`
    };

    return icons[site.toLowerCase()] || icons.curseforge;
}
