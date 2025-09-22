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
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="${link.class || 'inline-block text-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200'}">${link.text}</a>
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
            ${downloadLinks.length > 0 ? `<div class="mt-4 ${downloadLinks.length > 1 ? 'space-y-2' : ''}">${downloadLinksHTML}</div>` : ''}
        </div>
    `;
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
