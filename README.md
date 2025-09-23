# NoobTaco's Curated WoW Addon Collection

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Vite](https://img.shields.io/badge/built%20with-Vite-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/styled%20with-Tailwind%20CSS-38B2AC.svg)](https://tailwindcss.com/)

A curated collection of essential World of Warcraft addons to enhance your gameplay experience. This website showcases hand-picked addons for different content types, with detailed guides and recommendations.

## 🌟 Features

- **Curated Addon Collections**: Hand-picked addons for different WoW content types
- **Interactive UI**: Modern, responsive design with dark/light theme toggle
- **Category-Based Organization**: Organized by content type (PvE, UI/QoL, etc.)
- **Detailed Guides**: In-depth information about each addon and its benefits
- **JSON Data Structure**: Modular data organization with separate files for addons, WeakAuras, and UI layouts
- **Comprehensive Links**: CurseForge, GitHub, and Wago links for all addons
- **Social Integration**: Links to Twitch, YouTube, and other platforms
- **Mobile-Friendly**: Responsive design that works on all devices

## 📋 Current Categories

### ✅ PvE Content
Essential addons for raids, mythic dungeons, and delves:
- **GTFO** - Damage avoidance addon
- **Plater Nameplates** - Customizable nameplate addon
- **BigWigs & LittleWigs** - Boss encounter timers
- **Voice Packs for BigWigs** - Audio alerts
- **DBM Event Announcement** - Chat announcements for mechanics
- **WeakAuras 2** - Custom UI displays with curated packs
- **Causese Anchors** - Framework for WeakAura packs

### 🚧 Coming Soon
- **UI & Quality of Life** - Interface improvements and QoL enhancements

## 🛠️ Tech Stack

- **Frontend Framework**: Vite
- **Styling**: Tailwind CSS
- **JavaScript**: Vanilla JavaScript (ES6+)
- **Data Structure**: JSON files for modular content organization
- **Deployment**: GitHub Pages
- **Fonts**: Inter (Google Fonts)

## 📊 Data Structure

The addon data is organized in modular JSON files for easy maintenance:

- **`data/addons.json`**: Core addon database with download links and metadata
- **`data/weakauras.json`**: WeakAuras import strings and pack configurations  
- **`data/ui-layouts.json`**: WoW Edit Mode layout import strings

Each JSON file follows a consistent structure with fields for name, description, category, links, and metadata.

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/NoobTaco/NoobTacoAddons.git
   cd NoobTacoAddons
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

This will build the project and deploy it to GitHub Pages.

## 📖 Usage

Navigate through the different addon categories to find recommendations for your preferred content type. Each addon includes:
- Download links
- Installation instructions
- Configuration tips
- Usage recommendations

## 🤝 Contributing

Contributions are welcome! If you'd like to:
- Add new addon recommendations
- Improve existing guides
- Add new categories
- Fix bugs or improve the UI

Please feel free to submit a pull request or open an issue.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📺 Connect

- **Twitch**: [noobtaco777](https://www.twitch.tv/noobtaco777)
- **YouTube**: [@NoobTacoTech](https://www.youtube.com/@NoobTacoTech)
- **GitHub**: [NoobTaco](https://github.com/NoobTaco)
- **Bluesky**: [@noobtaco.bsky.social](https://bsky.app/profile/noobtaco.bsky.social)

## 🙏 Acknowledgments

- Thanks to the WoW addon community for creating amazing tools
- Special thanks to all the addon developers whose work makes this possible
- Built with ❤️ for the WoW community

---

*This is not an official Blizzard Entertainment product. World of Warcraft® and Blizzard Entertainment® are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the United States and/or other countries.*</content>
<parameter name="filePath">/home/mike/development/web/NoobTacoAddons/README.md
