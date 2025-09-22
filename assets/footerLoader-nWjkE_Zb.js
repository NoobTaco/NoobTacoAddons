function r({layout:e="full",currentPage:t="home"}={}){const o=`
        <footer class="bg-slate-800 dark:bg-slate-950 text-slate-300 ${e==="full"?"mt-16":"py-12"}">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${e==="simple"?"text-center":"py-12"}">
    `;return e==="simple"?o+`
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
    `:o+`
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
                            <li><a href="index.html" class="${t==="home"?"text-blue-400 hover:text-blue-300":"text-slate-400 hover:text-white"} transition-colors duration-200">Home</a></li>
                            <li><a href="pve.html" class="${t==="pve"?"text-blue-400 hover:text-blue-300":"text-slate-400 hover:text-white"} transition-colors duration-200">PvE Content</a></li>
                            <li><a href="CHANGELOG.md" class="text-slate-400 hover:text-white transition-colors duration-200">Changelog</a></li>
                            <li><span class="text-slate-500">UI & Quality of Life (Coming Soon)</span></li>
                            <li><span class="text-slate-500">Leveling & New Players (Coming Soon)</span></li>
                            <li><span class="text-slate-500">Professions & Economy (Coming Soon)</span></li>
                            <li><span class="text-slate-500">NoobTacoUI (Coming Soon)</span></li>
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
    `}function n({currentPage:e="home"}={}){return`
    <!-- Header Navigation -->
    <header class="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Brand Logo/Name -->
                <div class="flex items-center">
                    <a href="index.html" class="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
                        <img src="assets/images/Avatar_100.png" alt="NoobTaco Avatar" class="w-10 h-10 rounded-full border-2 border-slate-200 dark:border-slate-600">
                        <div>
                            <h1 class="text-xl font-bold text-slate-800 dark:text-slate-100">NoobTaco's</h1>
                            <p class="text-xs text-slate-500 dark:text-slate-400 -mt-1">Curated Addons</p>
                        </div>
                    </a>
                </div>

                <!-- Navigation Links -->
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="index.html" class="${e==="home"?"text-blue-600 dark:text-blue-400 font-semibold":"text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200"}">
                        Home
                    </a>
                    <a href="pve.html" class="${e==="pve"?"text-blue-600 dark:text-blue-400 font-semibold":"text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200"}">
                        PvE Content
                    </a>
                    <span class="text-slate-400 dark:text-slate-500 font-medium cursor-not-allowed">
                        PvP (Soon)
                    </span>
                    <span class="text-slate-400 dark:text-slate-500 font-medium cursor-not-allowed">
                        UI & QoL (Soon)
                    </span>
                </nav>

                <!-- Mobile Menu Button -->
                <button id="mobile-menu-button" class="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div id="mobile-menu" class="md:hidden hidden pb-4">
                <div class="flex flex-col space-y-2">
                    <a href="index.html" class="px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700">
                        Home
                    </a>
                    <a href="pve.html" class="${e==="pve"?"px-3 py-2 text-blue-600 dark:text-blue-400 font-semibold rounded-lg bg-blue-50 dark:bg-blue-900/20":"px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"}">
                        PvE Content
                    </a>
                    <span class="px-3 py-2 text-slate-400 dark:text-slate-500 font-medium">
                        UI & QoL (Coming Soon)
                    </span>
                    <span class="px-3 py-2 text-slate-400 dark:text-slate-500 font-medium">
                        NoobTacoUI (Coming Soon)
                    </span>
                </div>
            </div>
        </div>
    </header>
    `}function l(){const e=document.getElementById("footer-placeholder");if(e){const o=window.location.pathname.includes("pve.html"),a=o?"full":"simple",s=o?"pve":"home";e.innerHTML=r({layout:a,currentPage:s})}const t=document.getElementById("header-placeholder");if(t){const a=window.location.pathname.includes("pve.html")?"pve":"home";t.innerHTML=n({currentPage:a})}i()}function i(){const e=document.getElementById("mobile-menu-button"),t=document.getElementById("mobile-menu");e&&t&&(e.addEventListener("click",()=>{t.classList.toggle("hidden")}),document.addEventListener("click",o=>{!e.contains(o.target)&&!t.contains(o.target)&&t.classList.add("hidden")}))}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",l):l();
