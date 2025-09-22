/**
 * Creates a reusable navigation header component
 * @param {Object} options - Configuration options for the header
 * @param {string} options.currentPage - Current page for navigation highlighting ('home' or 'pve')
 * @returns {string} HTML string for the header
 */
export function createNavHeader({ currentPage = 'home' } = {}) {
    const homeClass = currentPage === 'home'
        ? 'text-blue-600 dark:text-blue-400 font-semibold'
        : 'text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200';

    const pveClass = currentPage === 'pve'
        ? 'text-blue-600 dark:text-blue-400 font-semibold'
        : 'text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200';

    const pveMobileClass = currentPage === 'pve'
        ? 'px-3 py-2 text-blue-600 dark:text-blue-400 font-semibold rounded-lg bg-blue-50 dark:bg-blue-900/20'
        : 'px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700';

    return `
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
                    <a href="index.html" class="${homeClass}">
                        Home
                    </a>
                    <a href="pve.html" class="${pveClass}">
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
                    <a href="pve.html" class="${pveMobileClass}">
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
    `;
}
