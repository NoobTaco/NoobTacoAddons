# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-09-22

### Added
- Two-tone card design with header sections for addon icons and titles
- Local addon icons stored in assets folder for faster loading
- Reorganized WeakAuras section with dedicated import strings subsection
- Audio cues subsection in BigWigs section for voice packs
- Enhanced visual hierarchy with improved card layouts
- Highlighted optional Quazii profile link for better visibility

### Changed
- Improved BigWigs section layout with full-width main card and grouped audio addons
- Restructured WeakAuras cards: base addons on top row, import strings below with explanatory text
- Updated addon icon references to use local assets instead of external URLs
- Enhanced card component with better priority badge styling

### Technical
- Downloaded and stored all addon icons locally for improved performance
- Updated card component to support two-tone layout with separate header and content sections
- Optimized image loading by removing external dependencies

## [1.0.0] - 2025-09-22

### Added
- Initial release of NoobTaco's Curated Addon Collection
- PvE Content guide with essential addons for raids, mythic+, and delves
- Interactive category cards with hover animations
- Dark/light theme toggle
- Responsive design for mobile and desktop
- Social media links (Twitch, YouTube, GitHub, Bluesky)
- Modular component architecture (header, footer)
- Coming soon placeholders for future categories

### Features
- GTFO - Essential damage avoidance addon
- Plater Nameplates - Customizable nameplate addon
- BigWigs & LittleWigs - Boss encounter timers
- Voice Packs for BigWigs - Audio alerts
- DBM Event Announcement - Chat announcements for mechanics
- WeakAuras 2 - Custom UI displays with curated packs
- Causese Anchors - Framework for WeakAura packs

### Technical
- Built with Vite for fast development
- Tailwind CSS for styling
- Vanilla JavaScript for interactivity
- Modular component system for maintainability
