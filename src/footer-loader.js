import { createFooter } from './components/footer.js';
import { createNavHeader } from './components/header.js';
import { createCard, createAddonSiteIcon } from './components/card.js';

/**
 * Initialize the header and footer on page load
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

    // Initialize addon cards on pve page
    const essentialsGrid = document.getElementById('essentials-grid');
    if (essentialsGrid) {
        initEssentialsCards(essentialsGrid);
    }

    const encounterHelpersGrid = document.getElementById('encounter-helpers-grid');
    if (encounterHelpersGrid) {
        initEncounterHelpersCards(encounterHelpersGrid);
    }

    const weakaurasGrid = document.getElementById('weakauras-grid');
    if (weakaurasGrid) {
        initWeakAurasCards(weakaurasGrid);
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
function initEssentialsCards(container) {
    const cards = [
        {
            type: 'addon',
            title: 'GTFO',
            description: 'The simplest and most vital addon on this list. GTFO provides an immediate, loud sound alert whenever you\'re standing in an area that will harm you. This is an essential tool for avoiding damage and staying alive in all types of content.',
            priority: 'Must-Have',
            addonIcon: '/assets/images/gtfo-icon.jpg',
            downloadLinks: [
                { url: 'https://www.curseforge.com/wow/addons/gtfo', text: 'Download ➔' }
            ]
        },
        {
            type: 'addon',
            title: 'Plater Nameplates',
            description: 'An extremely powerful and customizable addon that overhauls the default nameplates. With a good profile, it can show crucial information about enemies, such as casting interrupts, active debuffs, and priority targets directly on their nameplate.',
            priority: 'Recommended',
            priorityClass: 'bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200',
            addonIcon: '/assets/images/plater-icon.png',
            downloadLinks: [
                { url: 'https://www.curseforge.com/wow/addons/plater-nameplates', text: 'Download ➔' }
            ],
            additionalContent: '<a href="https://quazii.com/quazii-ui-the-war-within-installer/" target="_blank" rel="noopener noreferrer" class="mt-2 text-sm text-center font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200">Optional: Quazii\'s Profile</a>'
        }
    ];

    container.innerHTML = cards.map(card => createCard(card)).join('');
}

/**
 * Initialize encounter helpers addon cards on the pve page
 */
function initEncounterHelpersCards(container) {
    const bigWigsCard = {
        type: 'addon',
        title: 'BigWigs & LittleWigs',
        description: 'This pair of addons provides clean, customizable boss encounter timers and warnings. BigWigs is for raids, while LittleWigs handles dungeons and delves. They are known for being lightweight and efficient. Many players prefer these over alternatives like DBM.',
        addonIcon: '/assets/images/bigwigs-icon.jpeg',
        downloadLinks: [
            { url: 'https://www.curseforge.com/wow/addons/big-wigs', text: 'Get BigWigs (Raids) ➔' },
            { url: 'https://www.curseforge.com/wow/addons/little-wigs', text: 'Get LittleWigs (Dungeons) ➔' }
        ]
    };

    const audioCards = [
        {
            type: 'addon',
            title: 'Voice Packs for BigWigs',
            description: 'These optional addons add clear voice alerts to BigWigs, providing audible warnings for important mechanics. This allows you to focus on the action without having to read every on-screen alert.',
            addonIcon: '/assets/images/bigwigs-icon.jpeg',
            downloadLinks: [
                { url: 'https://www.curseforge.com/wow/addons/wowvoxpacks-neural2-c-bigwigs-voice', text: 'Neural Voice Pack ➔', class: 'block text-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200' },
                { url: 'https://www.curseforge.com/wow/addons/wowvoxpacks-neural2-c-bigwigs-countdown', text: 'Countdown Voice Pack ➔', class: 'block text-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200' }
            ]
        },
        {
            type: 'addon',
            title: 'DBM Event Announcement',
            description: 'A simple but very effective addon that announces in chat when an important ability or mechanic is targeting you. This helps your group react accordingly. <strong class="font-bold text-blue-600 dark:text-blue-400">It is compatible with a BigWigs setup</strong>, so you can use it even if you don\'t use DBM as your main boss mod.',
            addonIcon: '/assets/images/dbm-event-icon.png',
            downloadLinks: [
                { url: 'https://www.curseforge.com/wow/addons/dbm-event-announcement', text: 'Download ➔' }
            ]
        }
    ];

    container.innerHTML = `
        <div class="mb-6">
            ${createCard(bigWigsCard)}
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
function initWeakAurasCards(container) {
    const firstRowCards = [
        {
            type: 'addon',
            title: 'WeakAuras 2',
            description: 'The base WeakAuras addon that provides the framework for all WeakAura displays.',
            addonIcon: '/assets/images/weakauras-icon.png',
            downloadLinks: [
                { url: 'https://www.curseforge.com/wow/addons/weakauras-2', text: 'Download WeakAuras ➔' }
            ]
        },
        {
            type: 'addon',
            title: 'CauseseDB',
            description: 'A required companion addon for WeakAuras that provides updated spell IDs, timers, and positioning data.',
            addonIcon: '/assets/images/causesedb-icon.png',
            downloadLinks: [
                { url: 'https://www.curseforge.com/wow/addons/causesedb', text: 'Download CauseseDB ➔' }
            ]
        }
    ];

    const secondRowCards = [
        {
            type: 'addon',
            title: 'Causese Anchors',
            description: 'This is a required framework that helps position and organize the other aura packs. <strong class="text-red-600 dark:text-red-400">Install this one first!</strong>',
            downloadLinks: [
                { url: 'https://wago.io/CauseseAnchors', text: 'View on Wago.io ➔', class: 'inline-block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200' }
            ]
        },
        {
            type: 'addon',
            title: 'The War Within Raid Auras',
            description: 'A comprehensive pack of auras for all raid encounters in The War Within.',
            downloadLinks: [
                { url: 'https://wago.io/twwraid3', text: 'View on Wago.io ➔', class: 'inline-block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200' }
            ]
        },
        {
            type: 'addon',
            title: 'The War Within Dungeon Auras',
            description: 'A collection of essential auras for Mythic+ and Delve dungeons in The War Within.',
            downloadLinks: [
                { url: 'https://wago.io/twwdungeons', text: 'View on Wago.io ➔', class: 'inline-block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200' }
            ]
        }
    ];

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
