/**
 * Creates a reusable footer component
 * @param {Object} options - Configuration options for the footer
 * @param {string} options.layout - 'full' for detailed layout with navigation, 'simple' for centered layout
 * @param {string} options.currentPage - Current page for navigation highlighting ('home' or 'pve')
 * @returns {string} HTML string for the footer
 */
export function createFooter({ layout = 'full', currentPage = 'home' } = {}) {
    const baseFooter = `
        <footer class="bg-slate-800 dark:bg-slate-950 text-slate-300 ${layout === 'full' ? 'mt-16' : 'py-12'}">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${layout === 'simple' ? 'text-center' : 'py-12'}">
    `;

    if (layout === 'simple') {
        return baseFooter + `
                <div class="mb-4">
                    <img src="assets/images/Avatar_100.png" alt="NoobTaco Avatar" class="w-16 h-16 mx-auto rounded-full border-2 border-slate-600 mb-4">
                </div>
                <h3 class="text-2xl font-bold text-white mb-4">NoobTaco's Curated Addon Collection</h3>
                <p class="mb-6">Enhancing your World of Warcraft experience, one addon at a time.</p>
                <div class="flex justify-center space-x-6">
                    <a href="https://github.com/NoobTaco" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" title="GitHub">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                    <a href="https://www.twitch.tv/noobtaco777" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" title="Twitch">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/@NoobTacoTech" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors" title="YouTube">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                    </a>
                    <a href="https://bsky.app/profile/noobtaco.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-sky-400 transition-colors" title="Bluesky">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 568 501">
                            <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z"/>
                        </svg>
                    </a>
                </div>
                <div class="mt-8 pt-8 border-t border-slate-700 text-slate-500 text-sm">
                    <p>&copy; 2025 NoobTaco. This site is not affiliated with Blizzard Entertainment. | Version 1.0.0</p>
                </div>
            </div>
        </footer>
    `;
    } else {
        // Full layout with navigation
        const homeLinkClass = currentPage === 'home' ? 'text-blue-400 hover:text-blue-300' : 'text-slate-400 hover:text-white';
        const pveLinkClass = currentPage === 'pve' ? 'text-blue-400 hover:text-blue-300' : 'text-slate-400 hover:text-white';
        const noobtacoLinkClass = currentPage === 'noobtacoui' ? 'text-blue-400 hover:text-blue-300' : 'text-slate-400 hover:text-white';

        return baseFooter + `
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <!-- Brand Section -->
                    <div>
                        <div class="flex items-center space-x-3 mb-4">
                            <img src="assets/images/Avatar_100.png" alt="NoobTaco Avatar" class="w-12 h-12 rounded-full border-2 border-slate-600">
                            <div>
                                <h3 class="text-lg font-bold text-white">NoobTaco's</h3>
                                <p class="text-sm text-slate-400 -mt-1">Curated Addons</p>
                            </div>
                        </div>
                        <p class="text-slate-400 text-sm">
                            Hand-picked World of Warcraft addons to enhance your gameplay experience across all content types.
                        </p>
                    </div>

                    <!-- Navigation Links -->
                    <div>
                        <h4 class="text-lg font-semibold text-white mb-4">Categories</h4>
                        <ul class="space-y-2">
                            <li><a href="index.html" class="${homeLinkClass} transition-colors duration-200">Home</a></li>
                            <li><a href="pve.html" class="${pveLinkClass} transition-colors duration-200">PvE Content</a></li>
                            <li><a href="noobtacoui.html" class="${noobtacoLinkClass} transition-colors duration-200">NoobTacoUI</a></li>
                            <li><a href="https://github.com/NoobTaco/NoobTacoAddons/blob/main/CHANGELOG.md" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors duration-200">Changelog</a></li>
                            <li><span class="text-slate-500">UI & Quality of Life (Coming Soon)</span></li>
                            <li><span class="text-slate-500">Leveling & New Players (Coming Soon)</span></li>
                            <li><span class="text-slate-500">Professions & Economy (Coming Soon)</span></li>
                        </ul>
                    </div>

                    <!-- Social Links -->
                    <div>
                        <h4 class="text-lg font-semibold text-white mb-4">Connect</h4>
                        <div class="flex flex-wrap gap-3 mb-4">
                            <a href="https://github.com/NoobTaco" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors duration-200" title="GitHub">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a href="https://www.twitch.tv/noobtaco777" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors duration-200" title="Twitch">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com/@NoobTacoTech" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition-colors duration-200" title="YouTube">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                            </a>
                            <a href="https://bsky.app/profile/noobtaco.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-sky-400 transition-colors duration-200" title="Bluesky">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 568 501">
                                    <path d="M123.121 33.664C188.241 82.553 258.281 181.68 284 234.873c25.719-53.192 95.759-152.32 160.879-201.21C491.866-1.611 568-28.906 568 57.947c0 17.346-9.945 145.713-15.778 166.555-20.275 72.453-94.155 90.933-159.875 79.748C507.222 323.8 536.444 388.56 473.333 453.32c-119.86 122.992-172.272-30.859-185.702-70.281-2.462-7.227-3.614-10.608-3.631-7.733-.017-2.875-1.169.506-3.631 7.733-13.43 39.422-65.842 193.273-185.702 70.281-63.111-64.76-33.89-129.52 80.986-149.071-65.72 11.185-139.6-7.295-159.875-79.748C9.945 203.659 0 75.291 0 57.946 0-28.906 76.135-1.612 123.121 33.664Z"/>
                                </svg>
                            </a>
                        </div>
                        <p class="text-slate-500 text-xs">
                            This site is not affiliated with Blizzard Entertainment.
                        </p>
                    </div>
                </div>

                <div class="mt-8 pt-8 border-t border-slate-700 text-center">
                    <p class="text-slate-500 text-sm">&copy; 2025 NoobTaco. Enhancing your World of Warcraft experience, one addon at a time. | Version 1.0.0</p>
                </div>
            </div>
        </footer>
    `;
    }
}
