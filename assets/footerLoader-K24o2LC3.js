function k({layout:e="full",currentPage:t="home"}={}){const o=`
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
                            <li><a href="noobtacoui.html" class="${t==="noobtacoui"?"text-blue-400 hover:text-blue-300":"text-slate-400 hover:text-white"} transition-colors duration-200">NoobTacoUI</a></li>
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
    `}function y({currentPage:e="home"}={}){return`
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
                    <a href="noobtacoui.html" class="${e==="noobtacoui"?"text-blue-600 dark:text-blue-400 font-semibold":"text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200"}">
                        NoobTacoUI
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
                    <a href="noobtacoui.html" class="${e==="noobtacoui"?"px-3 py-2 text-blue-600 dark:text-blue-400 font-semibold rounded-lg bg-blue-50 dark:bg-blue-900/20":"px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 font-medium transition-colors duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"}">
                        NoobTacoUI
                    </a>
                    <span class="px-3 py-2 text-slate-400 dark:text-slate-500 font-medium">
                        UI & QoL (Coming Soon)
                    </span>
                </div>
            </div>
        </div>
    </header>
    `}function g({type:e="category",title:t,description:o,icon:a,link:s,tags:i=[],status:r,statusClass:l="text-blue-600 dark:text-blue-400 font-semibold",comingSoon:n=!1,priority:d,priorityClass:x="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",downloadLinks:p=[],additionalContent:b="",addonIcon:m}={}){const v=e==="category"?"category-card":"addon-card",f=n?"coming-soon":"",w=e==="category"?C({title:t,description:o,icon:a,tags:i,status:r,statusClass:l,comingSoon:n}):L({title:t,description:o,priority:d,priorityClass:x,downloadLinks:p,additionalContent:b,addonIcon:m}),u=`
        <div class="${v} ${f} p-6 ${e==="addon"?"flex flex-col":""}">
            ${w}
        </div>
    `;return s?`<a href="${s}" class="block">${u}</a>`:u}function C({title:e,description:t,icon:o,tags:a,status:s,statusClass:i,comingSoon:r}){const l=a.map(n=>`
        <span class="${n.class} px-3 py-1 rounded-full text-sm font-medium">${n.text}</span>
    `).join("");return`
        <div class="text-center">
            <div class="w-16 h-16 ${o.includes("<svg")?"flex items-center justify-center":""} mx-auto mb-4">
                ${o}
            </div>
            <h3 class="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                ${e}
            </h3>
            <p class="text-slate-600 dark:text-slate-300 mb-4">
                ${t}
            </p>
            ${a.length>0?`<div class="flex flex-wrap justify-center gap-2">${l}</div>`:""}
            ${s?`<div class="mt-6 ${i}">${s}</div>`:""}
        </div>
    `}function L({title:e,description:t,priority:o,priorityClass:a,downloadLinks:s,additionalContent:i,addonIcon:r}){const l=o?`
        <div class="px-4 py-2 border-b border-slate-200 dark:border-slate-600">
            <span class="text-xs font-semibold ${a} px-2.5 py-1 rounded-full">${o}</span>
        </div>
    `:"",n=s.map(d=>`
        <a href="${d.url}" target="_blank" rel="noopener noreferrer" class="${d.class||"inline-block text-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"}">${d.text}</a>
    `).join("");return`
        <div class="bg-slate-50 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-600 px-4 py-3 flex items-center justify-between">
            ${r?`<img src="${r}" alt="${e} icon" class="w-8 h-8 rounded">`:""}
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100 text-right flex-1 ml-3">${e}</h3>
        </div>
        ${l}
        <div class="p-4 flex-1 flex flex-col">
            <p class="mt-2 text-slate-600 dark:text-slate-300 flex-grow">${t}</p>
            ${i}
            ${s.length>0?`<div class="mt-4 ${s.length>1?"space-y-2":""}">${n}</div>`:""}
        </div>
    `}function c(e,t="w-8 h-8"){const o={curseforge:`<svg class="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#F16421"/>
            <path d="M7 7h10v2H7V7zm0 3h10v2H7v-2zm0 3h7v2H7v-2z" fill="white"/>
        </svg>`,wago:`<svg class="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" fill="#FF6B35"/>
            <path d="M8 12l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,wowinterface:`<svg class="${t}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="20" height="20" rx="4" fill="#2D5AA0"/>
            <text x="12" y="16" text-anchor="middle" fill="white" font-size="12" font-weight="bold">WI</text>
        </svg>`};return o[e.toLowerCase()]||o.curseforge}function h(){const e=document.getElementById("footer-placeholder");if(e){const r=window.location.pathname.includes("pve.html"),l=window.location.pathname.includes("noobtacoui.html"),n=r||l?"full":"simple",d=r?"pve":l?"noobtacoui":"home";e.innerHTML=k({layout:n,currentPage:d})}const t=document.getElementById("header-placeholder");if(t){const r=window.location.pathname.includes("pve.html"),l=window.location.pathname.includes("noobtacoui.html"),n=r?"pve":l?"noobtacoui":"home";t.innerHTML=y({currentPage:n})}const o=document.getElementById("categories-grid");o&&$(o);const a=document.getElementById("essentials-grid");a&&M(a);const s=document.getElementById("encounter-helpers-grid");s&&A(s);const i=document.getElementById("weakauras-grid");i&&B(i),T()}function T(){const e=document.getElementById("mobile-menu-button"),t=document.getElementById("mobile-menu");e&&t&&(e.addEventListener("click",()=>{t.classList.toggle("hidden")}),document.addEventListener("click",o=>{!e.contains(o.target)&&!t.contains(o.target)&&t.classList.add("hidden")}))}function $(e){const t=[{type:"category",title:"PvE Content",description:"Essential addons for raids, mythic dungeons, and delves. Boss mods, WeakAuras, and survival tools.",icon:`<div class="flex gap-2">${c("curseforge")} ${c("wago")}</div>`,link:"pve.html",tags:[{text:"Raids",class:"bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"},{text:"Mythic+",class:"bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"},{text:"Delves",class:"bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"}],status:"Available Now →"},{type:"category",title:"UI & Quality of Life",description:"Interface improvements, inventory management, and general quality of life enhancements.",icon:c("curseforge"),tags:[{text:"UI Mods",class:"bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"},{text:"Inventory",class:"bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200"},{text:"QoL",class:"bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200"}],status:"Coming Soon...",statusClass:"text-slate-400 dark:text-slate-500 font-semibold",comingSoon:!0},{type:"category",title:"Leveling & New Players",description:"Perfect addons for newcomers and efficient leveling. Quest helpers and learning tools.",icon:c("curseforge"),tags:[{text:"Questing",class:"bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"},{text:"Learning",class:"bg-lime-100 dark:bg-lime-900 text-lime-800 dark:text-lime-200"},{text:"Guides",class:"bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200"}],status:"Coming Soon...",statusClass:"text-slate-400 dark:text-slate-500 font-semibold",comingSoon:!0},{type:"category",title:"Professions & Economy",description:"Auction house tools, profession helpers, and gold-making addons for the savvy player.",icon:c("curseforge"),tags:[{text:"Auction House",class:"bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200"},{text:"Professions",class:"bg-fuchsia-100 dark:bg-fuchsia-900 text-fuchsia-800 dark:text-fuchsia-200"},{text:"Gold Making",class:"bg-rose-100 dark:bg-rose-900 text-rose-800 dark:text-rose-200"}],status:"Coming Soon...",statusClass:"text-slate-400 dark:text-slate-500 font-semibold",comingSoon:!0},{type:"category",title:"NoobTacoUI",description:"Default WoW addon import and ElvUI versions of NoobTacoUI complete interface packages.",icon:c("curseforge"),link:"noobtacoui.html",tags:[{text:"Default UI",class:"bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200"},{text:"ElvUI",class:"bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"},{text:"Complete Package",class:"bg-stone-100 dark:bg-stone-700 text-stone-800 dark:text-stone-200"}],status:"Available Now →"}];e.innerHTML=t.map(o=>g(o)).join("")}function M(e){const t=[{type:"addon",title:"GTFO",description:"The simplest and most vital addon on this list. GTFO provides an immediate, loud sound alert whenever you're standing in an area that will harm you. This is an essential tool for avoiding damage and staying alive in all types of content.",priority:"Must-Have",addonIcon:"/assets/images/gtfo-icon.jpg",downloadLinks:[{url:"https://www.curseforge.com/wow/addons/gtfo",text:"Download ➔"}]},{type:"addon",title:"Plater Nameplates",description:"An extremely powerful and customizable addon that overhauls the default nameplates. With a good profile, it can show crucial information about enemies, such as casting interrupts, active debuffs, and priority targets directly on their nameplate.",priority:"Recommended",priorityClass:"bg-sky-100 dark:bg-sky-900 text-sky-800 dark:text-sky-200",addonIcon:"/assets/images/plater-icon.png",downloadLinks:[{url:"https://www.curseforge.com/wow/addons/plater-nameplates",text:"Download ➔"}],additionalContent:`<a href="https://quazii.com/quazii-ui-the-war-within-installer/" target="_blank" rel="noopener noreferrer" class="mt-2 text-sm text-center font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-200">Optional: Quazii's Profile</a>`}];e.innerHTML=t.map(o=>g(o)).join("")}function A(e){const t={type:"addon",title:"BigWigs & LittleWigs",description:"This pair of addons provides clean, customizable boss encounter timers and warnings. BigWigs is for raids, while LittleWigs handles dungeons and delves. They are known for being lightweight and efficient. Many players prefer these over alternatives like DBM.",addonIcon:"/assets/images/bigwigs-icon.jpeg",downloadLinks:[{url:"https://www.curseforge.com/wow/addons/big-wigs",text:"Get BigWigs (Raids) ➔"},{url:"https://www.curseforge.com/wow/addons/little-wigs",text:"Get LittleWigs (Dungeons) ➔"}]},o=[{type:"addon",title:"Voice Packs for BigWigs",description:"These optional addons add clear voice alerts to BigWigs, providing audible warnings for important mechanics. This allows you to focus on the action without having to read every on-screen alert.",addonIcon:"/assets/images/bigwigs-icon.jpeg",downloadLinks:[{url:"https://www.curseforge.com/wow/addons/wowvoxpacks-neural2-c-bigwigs-voice",text:"Neural Voice Pack ➔",class:"block text-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"},{url:"https://www.curseforge.com/wow/addons/wowvoxpacks-neural2-c-bigwigs-countdown",text:"Countdown Voice Pack ➔",class:"block text-center bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"}]},{type:"addon",title:"DBM Event Announcement",description:`A simple but very effective addon that announces in chat when an important ability or mechanic is targeting you. This helps your group react accordingly. <strong class="font-bold text-blue-600 dark:text-blue-400">It is compatible with a BigWigs setup</strong>, so you can use it even if you don't use DBM as your main boss mod.`,addonIcon:"/assets/images/dbm-event-icon.png",downloadLinks:[{url:"https://www.curseforge.com/wow/addons/dbm-event-announcement",text:"Download ➔"}]}];e.innerHTML=`
        <div class="mb-6">
            ${g(t)}
        </div>
        <div class="mb-4">
            <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Audio Cues</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">These addons provide audio alerts and announcements to enhance your awareness during encounters.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${o.map(a=>g(a)).join("")}
        </div>
    `}function B(e){const t=[{type:"addon",title:"WeakAuras 2",description:"The base WeakAuras addon that provides the framework for all WeakAura displays.",addonIcon:"/assets/images/weakauras-icon.png",downloadLinks:[{url:"https://www.curseforge.com/wow/addons/weakauras-2",text:"Download WeakAuras ➔"}]},{type:"addon",title:"CauseseDB",description:"A required companion addon for WeakAuras that provides updated spell IDs, timers, and positioning data.",addonIcon:"/assets/images/causesedb-icon.png",downloadLinks:[{url:"https://www.curseforge.com/wow/addons/causesedb",text:"Download CauseseDB ➔"}]}],o=[{type:"addon",title:"Causese Anchors",description:'This is a required framework that helps position and organize the other aura packs. <strong class="text-red-600 dark:text-red-400">Install this one first!</strong>',downloadLinks:[{url:"https://wago.io/CauseseAnchors",text:"View on Wago.io ➔",class:"inline-block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"}]},{type:"addon",title:"The War Within Raid Auras",description:"A comprehensive pack of auras for all raid encounters in The War Within.",downloadLinks:[{url:"https://wago.io/twwraid3",text:"View on Wago.io ➔",class:"inline-block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"}]},{type:"addon",title:"The War Within Dungeon Auras",description:"A collection of essential auras for Mythic+ and Delve dungeons in The War Within.",downloadLinks:[{url:"https://wago.io/twwdungeons",text:"View on Wago.io ➔",class:"inline-block text-center bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"}]}];e.innerHTML=`
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            ${t.map(a=>g(a)).join("")}
        </div>
        <div class="mb-4">
            <h4 class="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Weak Aura Import Strings</h4>
            <p class="text-slate-600 dark:text-slate-300 text-sm">These import strings provide additional functionality for raids, Mythic+, and delves. Import them into WeakAuras after installing the base addon.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${o.map(a=>g(a)).join("")}
        </div>
    `}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",h):h();
