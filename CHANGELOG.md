# Changelog

All notable changes to the THULI Dashboard project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-06-02

### Added

#### Core Features
- **Supervisor Dashboard** - District overview with 4 key metrics (total children, red flagged, pending referrals, active centres)
- **Worker Morning Digest** - Personalized worker dashboard with priority actions and children grid
- **Child Profile Page** - Complete developmental profile with radar charts, milestones, and emotion tracking
- **Role-Based Authentication** - Separate views for Supervisors and Anganwadi Workers
- **Risk Assessment System** - 3-level risk indicator (Red/Yellow/Green) with trending alerts
- **Developmental Domain Tracking** - 5-domain assessment (Physical, Language, Cognitive, Social-Emotional, Self-Care)
- **Interactive Charts** - Donut charts for risk distribution, radar charts for multi-month comparison
- **Milestone Tracking** - Domain-filtered milestone progress (achieved/pending/overdue)
- **Emotion Check-ins** - 7-day emotion bubbles with distress alerts
- **Quick Log Panel** - Voice/text observation entry with auto-detected domains
- **Referral Pipeline** - 5-stage workflow visualization (Flagged → Confirmed → Referred → Visited → Closed)
- **Worker Performance Tracking** - Individual worker metric cards with score progress bars
- **Recent Observations Feed** - Voice log feed from field workers with domain tags
- **Children Registry** - Grid view of all enrolled children with filters
- **Navigation System** - Fixed sidebar + top bar with search and notifications

#### Responsive Design
- Mobile-first approach (375px breakpoint)
- Tablet optimization (768px breakpoint)
- Desktop layout (1920px+ support)
- Hamburger menu for mobile navigation
- Responsive grid system (2 cols → 3 cols → 4 cols)
- Adaptive padding and typography

#### Design System
- **Custom Tailwind Color Palette**
  - Forest palette (dark authority colors)
  - Sage palette (calm, professional accents)
  - Mint palette (light, positive backgrounds)
  - Alert palette (red/yellow/green status indicators)
- Government-grade aesthetic with generous spacing
- Consistent component styling across app
- Accessibility-first approach

#### Tech Stack
- React 18.3.1 with hooks
- Vite 6.4.3 for fast builds
- Tailwind CSS 3.4.17 with extended colors
- React Router DOM 6.30.1 for SPA routing
- Recharts 2.15.4 for data visualization
- Lucide React 0.542.0 for icons
- PostCSS and Autoprefixer for CSS optimization

#### Documentation
- Comprehensive README.md
- Project structure documentation
- Component inventory
- Data structure schema
- Development guidelines
- Contributing guidelines
- MIT License
- Changelog

#### Mock Data
- 10 complete child profiles with full domains
- 4 worker profiles with performance metrics
- 5-stage referral pipeline data
- Comprehensive milestones (3-4 per domain)
- 7-day emotion history
- Recent observations feed
- Dashboard observation logs
- Priority actions for workers

### Technical Details

#### Performance
- Production bundle: 609.46 KB (173.45 KB gzipped)
- CSS bundle: 22.77 KB (4.77 KB gzipped)
- 2,312 modules transformed during build
- Fast Vite dev server (<300ms startup)

#### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Android)

#### Responsive Breakpoints
- Mobile: 0-639px (default, 2-col grids)
- Small (sm): 640px+ (tablets, optimized spacing)
- Medium (md): 768px+ (tablets+, 3-col grids)
- Large (lg): 1024px+ (desktops, full layouts)

### Known Limitations

- Mock data only (no backend integration)
- localStorage-based role persistence
- No real authentication
- No data persistence across sessions
- Limited to pre-loaded mock dataset

### Future Roadmap

- [ ] Backend API integration
- [ ] Real database (PostgreSQL)
- [ ] Authentication with JWT
- [ ] Multi-language support (Hindi, Tamil, Telugu)
- [ ] Offline mode (PWA)
- [ ] Data export (PDF, Excel)
- [ ] Advanced analytics
- [ ] Mobile app (React Native)
- [ ] Dark mode
- [ ] Real voice processing

---

## Unreleased

### Planned for v1.1

#### Features
- Parent notification system
- SMS alerts for critical flags
- Bulk child import from CSV
- Custom dashboard widgets
- Advanced filtering and search

#### Improvements
- Performance optimization
- Accessibility enhancements
- UI/UX refinements
- Documentation expansion

#### Bug Fixes
- (TBD based on user feedback)

---

## Version Format

Releases follow [Semantic Versioning](https://semver.org/):
- **MAJOR** (1.0.0) - Breaking changes
- **MINOR** (1.1.0) - New features, backward compatible
- **PATCH** (1.0.1) - Bug fixes, backward compatible

---

**Last Updated**: 2025-06-02 · Team ZENQ
