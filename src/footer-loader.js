import { createFooter } from './components/footer.js';
import { createNavHeader } from './components/header.js';
import { createCard, createAddonSiteIcon } from './components/card.js';

/**
 * Load and filter addons by tag from JSON
 */
async function loadAddonsByTag(tag) {
    try {
        const response = await fetch('data/addons.json');
        const addons = await response.json();
        return addons.filter(addon => addon.tags?.includes(tag));
    } catch (error) {
        console.error('Error loading addons:', error);
        return [];
    }
}

/**
 * Load and filter WeakAuras by tag from JSON
 */
async function loadWeakAurasByTag(tag) {
    try {
        const response = await fetch('data/weakauras.json');
        const weakauras = await response.json();
        return weakauras.filter(item => item.tags?.includes(tag));
    } catch (error) {
        console.error('Error loading WeakAuras:', error);
        return [];
    }
}

/**
 * Load and filter UI layouts by tag from JSON
 */
async function loadLayoutsByTag(tag) {
    try {
        const response = await fetch('data/ui-layouts.json');
        const layouts = await response.json();
        return layouts.filter(layout => layout.tags?.includes(tag));
    } catch (error) {
        console.error('Error loading UI layouts:', error);
        return [];
    }
}

/**
 * Initialize NoobTacoUI Media addon cards on the noobtacoui page
 */
async function initNoobTacoMediaCards(container) {
    const addons = await loadAddonsByTag('noobtacoui');
    const mediaAddon = addons.find(addon => addon.id === 'noobtacoui-media');

    if (mediaAddon) {
        const card = {
            type: 'addon',
            title: mediaAddon.name,
            description: 'A comprehensive media pack that includes custom fonts for better readability, unique audio cues for important alerts, and high-quality background graphics to personalize your UI.',
            addonIcon: mediaAddon.icon || 'https://media.forgecdn.net/avatars/thumbnails/307/986/64/64/637390259729450971.png',
            downloadLinks: Object.entries(mediaAddon.links || {}).filter(([, url]) => !!url).map(([key, url]) => ({
                site: key.toLowerCase(),
                url: url,
                text: key === 'curseforge' ? 'Download ➔' : `${key.charAt(0).toUpperCase() + key.slice(1)} ➔`
            }))
        };

        container.innerHTML = createCard(card);
    }
}

/**
 * Initialize NoobTacoUI addon cards on the noobtacoui page
 */
async function initNoobTacoCards(container) {
    const addons = await loadAddonsByTag('noobtacoui');
    const uiAddon = addons.find(addon => addon.id === 'noobtacoui');

    if (uiAddon) {
        const card = {
            type: 'addon',
            title: uiAddon.name,
            description: 'A comprehensive ElvUI profile that provides a clean, modern interface with optimized layouts for raiding, dungeons, and general gameplay. This addon requires ElvUI as a dependency.',
            addonIcon: uiAddon.icon || 'https://media.forgecdn.net/avatars/thumbnails/307/985/64/64/637390255114735063.png',
            downloadLinks: Object.entries(uiAddon.links || {}).filter(([, url]) => !!url).map(([key, url]) => ({
                site: key.toLowerCase(),
                url: url,
                text: key === 'curseforge' ? 'Download ➔' : `${key.charAt(0).toUpperCase() + key.slice(1)} ➔`
            }))
        };

        container.innerHTML = createCard(card);
    }
}

/**
 * Initialize UI layouts cards on the noobtacoui page
 */
async function initUILayoutsCards(container) {
    const layouts = await loadLayoutsByTag('noobtacoui-layouts');

    // Include the layout.id so screenshot filenames can be constructed correctly
    const cards = layouts.map(layout => ({
        id: layout.id,
        type: 'layout',
        title: layout.name,
        description: layout.description,
        import_string: layout.import_string,
        copyButtonText: 'Copy Import String'
    }));

    container.innerHTML = cards.map(card => createLayoutCard(card)).join('');
}

/**
 * Create a layout card (for UI import strings)
 */
function createLayoutCard(card) {
    return `
        <div class="addon-card p-6">
            <h3 class="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">${card.title}</h3>
            <p class="text-slate-600 dark:text-slate-300 mb-4">${card.description}</p>
            <button class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 copy-layout-btn inline-flex items-center gap-2" data-import-string="${card.import_string.replace(/"/g, '&quot;')}" title="${card.copyButtonText}">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 5h6a2 2 0 012 2v1" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M7 9h10a2 2 0 012 2v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7a2 2 0 012-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                <span>${card.copyButtonText}</span>
            </button>
            <div class="mt-4">
                <img src="assets/images/${card.id}-screenshot.jpg" alt="Screenshot of ${card.title.toLowerCase()}" class="w-full rounded-lg border border-slate-200 dark:border-slate-700">
            </div>
        </div>
    `;
}

/**
 * Initialize all page components
 */
function initComponents() {
    // Initialize footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        // Determine layout and current page from the page
        const isPvePage = window.location.pathname.includes('pve.html');
        const isNoobtacoPage = window.location.pathname.includes('noobtacoui.html');
        const layout = isPvePage || isNoobtacoPage ? 'full' : 'simple';
        const currentPage = isPvePage ? 'pve' : isNoobtacoPage ? 'noobtacoui' : 'home';

        footerPlaceholder.innerHTML = createFooter({ layout, currentPage });
    }

    // Initialize header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
        const isPvePage = window.location.pathname.includes('pve.html');
        const isNoobtacoPage = window.location.pathname.includes('noobtacoui.html');
        const currentPage = isPvePage ? 'pve' : isNoobtacoPage ? 'noobtacoui' : 'home';

        headerPlaceholder.innerHTML = createNavHeader({ currentPage });
    }

    // Initialize category cards on home page
    const categoriesGrid = document.getElementById('categories-grid');
    if (categoriesGrid) {
        initCategoryCards(categoriesGrid);
    }

    // Initialize addon cards on noobtacoui page
    const noobtacoMediaGrid = document.getElementById('noobtacoui-media-grid');
    if (noobtacoMediaGrid) {
        initNoobTacoMediaCards(noobtacoMediaGrid);
    }

    const noobtacouiGrid = document.getElementById('noobtacoui-grid');
    if (noobtacouiGrid) {
        initNoobTacoCards(noobtacouiGrid);
    }

    const uiLayoutsGrid = document.getElementById('ui-layouts-grid');
    if (uiLayoutsGrid) {
        initUILayoutsCards(uiLayoutsGrid);
    }

    // Initialize PvE-specific cards (essentials, encounter helpers, WeakAuras)
    const essentialsGrid = document.getElementById('essentials-grid');
    if (essentialsGrid) {
        initEssentialsCards(essentialsGrid);
    }

    const encounterHelpersGrid = document.getElementById('encounter-helpers-grid');
    if (encounterHelpersGrid) {
        initEncounterHelpersCards(encounterHelpersGrid);
    }

    const weakAurasGrid = document.getElementById('weakauras-grid');
    if (weakAurasGrid) {
        initWeakAurasCards(weakAurasGrid);
    }

    // Initialize mobile menu functionality
    initMobileMenu();
}

/**
 * Initialize mobile menu toggle functionality
 */
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

/**
 * Initialize category cards on the home page
 */
function initCategoryCards(container) {
    const cards = [
        {
            type: 'category',
            title: 'PvE Content',
            description: 'Essential addons for raids, mythic dungeons, and delves. Boss mods, WeakAuras, and survival tools.',
            icon: `<div class="flex gap-2">${createAddonSiteIcon('curseforge')} ${createAddonSiteIcon('wago')}</div>`,
            link: 'pve.html',
            tags: [
                { text: 'Raids', class: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' },
                { text: 'Mythic+', class: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' },
                { text: 'Delves', class: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200' }
            ],
            status: 'Available Now →'
        },
        {
            type: 'category',
            title: 'UI & Quality of Life',
            description: 'Interface improvements, inventory management, and general quality of life enhancements.',
            icon: createAddonSiteIcon('curseforge'),
            tags: [
                { text: 'UI Mods', class: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200' },
                { text: 'Inventory', class: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200' },
                { text: 'QoL', class: 'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200' }
            ],
            status: 'Coming Soon...',
            statusClass: 'text-slate-400 dark:text-slate-500 font-semibold',
            comingSoon: true
        },
        {
            type: 'category',
            title: 'Leveling & New Players',
            description: 'Perfect addons for newcomers and efficient leveling. Quest helpers and learning tools.',
            icon: createAddonSiteIcon('curseforge'),
            tags: [
                { text: 'Questing', class: 'bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200' },
                { text: 'Learning', class: 'bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200' },
                { text: 'Guides', class: 'bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200' }
            ],
            status: 'Coming Soon...',
            statusClass: 'text-slate-400 dark:text-slate-500 font-semibold',
            comingSoon: true
        },
        {
            type: 'category',
            title: 'Professions & Economy',
            description: 'Auction house tools, profession helpers, and gold-making addons for the savvy player.',
            icon: createAddonSiteIcon('curseforge'),
            tags: [
                { text: 'Auction House', class: 'bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200' },
                { text: 'Professions', class: 'bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-800 dark:text-fuchsia-200' },
                { text: 'Gold Making', class: 'bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200' }
            ],
            status: 'Coming Soon...',
            statusClass: 'text-slate-400 dark:text-slate-500 font-semibold',
            comingSoon: true
        },
        {
            type: 'category',
            title: 'NoobTacoUI',
            description: 'Default WoW addon import and ElvUI versions of NoobTacoUI complete interface packages.',
            icon: createAddonSiteIcon('curseforge'),
            link: 'noobtacoui.html',
            tags: [
                { text: 'Default UI', class: 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200' },
                { text: 'ElvUI', class: 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200' },
                { text: 'Complete Package', class: 'bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200' }
            ],
            status: 'Available Now →'
        }
    ];

    container.innerHTML = cards.map(card => createCard(card)).join('');
}

/**
 * Initialize essential addon cards on the pve page
 */
async function initEssentialsCards(container) {
    const addons = await loadAddonsByTag('pve-essentials');

    // Convert JSON data to card format expected by createCard
    const cards = addons.map(addon => ({
        type: 'addon',
        title: addon.name,
        description: addon.description,
        priority: addon.name === 'GTFO' ? 'Must-Have' : 'Recommended',
        priorityClass: addon.name === 'GTFO' ? '' : 'bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200',
    addonIcon: addon.icon || (addon.id === 'gtfo' ? 'assets/images/gtfo-icon.jpg' : 'assets/images/plater-icon.png'),
        downloadLinks: Object.entries(addon.links || {}).filter(([,url]) => !!url).map(([key, url]) => ({
            site: key.toLowerCase(),
            url: url,
            text: key === 'curseforge' ? 'Download ➔' : `${key.charAt(0).toUpperCase() + key.slice(1)} ➔`
        })),
        additionalContent: addon.id === 'plater-nameplates' ?
            '<a href="https://quazii.com/quazii-ui-the-war-within-installer/" target="_blank" rel="noopener noreferrer" class="mt-2 text-sm text-center font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200">Optional: Quazii\'s Profile</a>' : ''
    }));

    container.innerHTML = cards.map(card => createCard(card)).join('');
}

/**
 * Initialize encounter helpers addon cards on the pve page
 */
async function initEncounterHelpersCards(container) {
    const addons = await loadAddonsByTag('pve-encounter-helpers');

    // Create separate BigWigs and LittleWigs cards
    const bigWigsAddon = addons.find(addon => addon.id === 'bigwigs');
    const littleWigsAddon = addons.find(addon => addon.id === 'littlewigs');

    const bigWigsCard = bigWigsAddon ? {
        type: 'addon',
        title: bigWigsAddon.name,
        description: bigWigsAddon.description,
    addonIcon: bigWigsAddon?.icon || 'assets/images/bigwigs-icon.jpeg',
        downloadLinks: Object.entries(bigWigsAddon.links || {}).filter(([,url]) => !!url).map(([key, url]) => ({
            site: key.toLowerCase(),
            url: url,
            text: key === 'curseforge' ? 'Get BigWigs (Raids) ➔' : `${key.charAt(0).toUpperCase() + key.slice(1)} ➔`
        }))
    } : null;

    const littleWigsCard = littleWigsAddon ? {
        type: 'addon',
        title: littleWigsAddon.name,
        description: littleWigsAddon.description,
    addonIcon: littleWigsAddon?.icon || 'assets/images/bigwigs-icon.jpeg',
        downloadLinks: Object.entries(littleWigsAddon.links || {}).filter(([,url]) => !!url).map(([key, url]) => ({
            site: key.toLowerCase(),
            url: url,
            text: key === 'curseforge' ? 'Get LittleWigs (Dungeons) ➔' : `${key.charAt(0).toUpperCase() + key.slice(1)} ➔`
        }))
    } : null;

    // Create audio cards (currently hardcoded as voice packs aren't in JSON)
    const audioCards = [
        {
            type: 'addon',
            title: 'Voice Packs for BigWigs',
            description: 'These optional addons add clear voice alerts to BigWigs, providing audible warnings for important mechanics. This allows you to focus on the action without having to read every on-screen alert.',
            addonIcon: 'assets/images/bigwigs-icon.jpeg',
            downloadLinks: [
                { site: 'curseforge', url: 'https://www.curseforge.com/wow/addons/wowvoxpacks-neural2-c-bigwigs-voice', text: 'Neural Voice Pack ➔', class: 'block text-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200' },
                { site: 'curseforge', url: 'https://www.curseforge.com/wow/addons/wowvoxpacks-neural2-c-bigwigs-countdown', text: 'Countdown Voice Pack ➔', class: 'block text-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200' }
            ]
        }
    ];

    // Add DBM Event Announcement if it exists
    const dbmAddon = addons.find(addon => addon.id === 'dbm-event-announcement');
    if (dbmAddon) {
        audioCards.push({
            type: 'addon',
            title: dbmAddon.name,
            description: 'A simple but very effective addon that announces in chat when an important ability or mechanic is targeting you. This helps your group react accordingly. <strong class="font-bold text-blue-600 dark:text-blue-400">It is compatible with a BigWigs setup</strong>, so you can use it even if you don\'t use DBM as your main boss mod.',
            addonIcon: dbmAddon.icon || 'assets/images/dbm-event-icon.png',
            downloadLinks: [
                ...(dbmAddon?.links?.curseforge ? [{ site: 'curseforge', url: dbmAddon.links.curseforge, text: 'Download ➔' }] : [])
            ]
        });
    }

    container.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            ${bigWigsCard ? createCard(bigWigsCard) : ''}
            ${littleWigsCard ? createCard(littleWigsCard) : ''}
        </div>
        <div class="mb-4">
            <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Audio Cues</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">These addons provide audio alerts and announcements to enhance your awareness during encounters.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${audioCards.map(card => createCard(card)).join('')}
        </div>
    `;
}

/**
 * Initialize WeakAuras addon cards on the pve page
 */
async function initWeakAurasCards(container) {
    // Load WeakAuras addons and packs
    const weakAurasAddons = await loadAddonsByTag('pve-weakauras');
    const weakAurasPacks = await loadWeakAurasByTag('pve-weakauras');

    // Create first row cards (base addons)
    const firstRowCards = weakAurasAddons.map(addon => ({
        type: 'addon',
        title: addon.name,
        description: addon.description,
    addonIcon: addon.icon || (addon.id === 'weakauras' ? 'assets/images/weakauras-icon.png' : 'assets/images/causesedb-icon.png'),
        downloadLinks: Object.entries(addon.links || {}).filter(([,url]) => !!url).map(([key, url]) => ({
            site: key.toLowerCase(),
            url: url,
            text: key === 'curseforge' ? 'Download WeakAuras ➔' : 'Download CauseseDB ➔'
        }))
    }));

    // Create second row cards (import strings)
    const secondRowCards = weakAurasPacks.map(pack => ({
        type: 'addon',
        title: pack.name,
        description: pack.description,
        downloadLinks: [
            ...(pack.links?.wago ? [{ site: 'wago', url: pack.links.wago, text: 'View on Wago.io ➔', class: 'inline-block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200' }] : [])
        ]
    }));

    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            ${firstRowCards.map(card => createCard(card)).join('')}
        </div>
        <div class="mb-4">
            <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Weak Aura Import Strings</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">These import strings provide additional functionality for raids, Mythic+, and delves. Import them into WeakAuras after installing the base addon.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${secondRowCards.map(card => createCard(card)).join('')}
        </div>
    `;
}

// Initialize components when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}

// Add copy functionality for layout import strings
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('copy-layout-btn')) {
        const importString = e.target.getAttribute('data-import-string');
        navigator.clipboard.writeText(importString).then(() => {
            const originalText = e.target.textContent;
            e.target.textContent = 'Copied!';
            e.target.style.backgroundColor = '#22c55e';
            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }
});
