# THULI Dashboard

**AI-Powered Early Childhood Development Platform for India's Anganwadi Ecosystem**

> *துளி (Thuli)* - A drop that creates ripples of positive change in early childhood development

## 🌟 Overview

THULI is a comprehensive web-based dashboard designed to revolutionize early childhood monitoring and development tracking in India's Anganwadi centers. Built with modern web technologies, it empowers Anganwadi supervisors and workers with real-time data, developmental insights, and actionable intelligence to support children's holistic growth.

### Key Features

- **Multi-Role Dashboard** - Separate views for Supervisors and Anganwadi Workers
- **Developmental Tracking** - Monitor 5 key domains: Physical, Language, Cognitive, Social-Emotional, Self-Care
- **Risk Assessment** - Real-time identification of children requiring intervention
- **Voice-Based Observations** - Quick logging of field observations with auto-detected domains
- **Interactive Charts** - Visual representation of developmental progress and trends
- **Responsive Design** - Works seamlessly on phones, tablets, and desktop computers
- **Milestone Tracking** - Monitor achievement of developmental milestones
- **Emotion Check-ins** - Track emotional well-being with distress alerts
- **Referral Pipeline** - Manage multi-stage referral workflows (5 stages)
- **Government-Grade Aesthetic** - Light, airy design with generous spacing and forest-green color palette

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Pages & Routes](#-pages--routes)
- [Design System](#-design-system)
- [Components](#-components)
- [Development](#-development)
- [Build & Deployment](#-build--deployment)
- [Data Structure](#-data-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 🚀 Features

### 1. **Supervisor Dashboard**
- **District Overview** with 4 key metrics:
  - Total Children Enrolled (847 baseline)
  - Red Flagged This Week (trending alerts)
  - Pending Referrals (workflow status)
  - Active Centres (operational status)
- **Risk Distribution Donut Chart** - Visual breakdown of children by risk level
- **Recent Alerts Feed** - Chronological feed of flagged children with navigation
- **Worker Performance** - Track individual worker metrics
- **Referral Pipeline** - 5-stage workflow visualization
- **Recent Observations** - Voice log feed from field workers

### 2. **Worker Morning Digest**
- **Personalized Greeting** with daily stats
- **Priority Action Cards** - Home visits, referrals, reports (3 cards)
- **My Children Grid** - 38 children with:
  - Risk indicators (red/yellow/green dots)
  - 5-domain score bars (P/L/C/S/SC)
  - Last seen timestamps
- **Risk Filtering** - All/Red/Yellow/Green views
- **Quick Log Panel** - Voice/text observation entry with auto-detected domains
- **Mic Toggle** - Record observations directly

### 3. **Child Profile**
- **Profile Header** with avatar, name, age, UCID, centre, worker, risk badge
- **Domain Radar Chart** - Multi-month comparison (Mar/Feb/Jan tabs)
- **Domain Score Bars** - Individual scoring with color coding (red/yellow/green)
- **Milestones List** - Domain-filtered, status-tracked (achieved/pending/overdue)
- **Emotion Check-ins** - 7-day emotion bubbles with distress alerts
- **Recent Observations** - 3 latest logged observations with domains
- **Action Buttons** - Generate reports, flag for review, add observations

### 4. **Additional Pages**
- **Children Registry** - View all enrolled children (8-card grid)
- **Workers Directory** - Manage worker profiles and performance
- **Referrals** - Track referral pipeline (5 stages)
- **Analytics** - District-level insights and trends
- **Attendance** - Daily attendance tracking
- **Reports** - Generate parent reports and compliance docs

## 💻 Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Frontend Framework** | React | 18.3.1 |
| **Build Tool** | Vite | 6.4.3 |
| **Styling** | Tailwind CSS | 3.4.17 |
| **Routing** | React Router DOM | 6.30.1 |
| **Charts** | Recharts | 2.15.4 |
| **Icons** | Lucide React | 0.542.0 |
| **Build Optimization** | PostCSS, Autoprefixer | Latest |
| **Runtime** | Node.js | 18+ |
| **Package Manager** | npm | 10+ |

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari 14+, Chrome Android)

## 📁 Project Structure

```
thuli/
├── public/                          # Static assets
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Layout.jsx          # Main page wrapper (sidebar + topbar)
│   │   │   ├── Sidebar.jsx         # Fixed left navigation (mobile-collapsible)
│   │   │   └── TopBar.jsx          # Fixed header (search, notifications, profile)
│   │   ├── ui/
│   │   │   ├── StatCard.jsx        # KPI metric card with trend indicator
│   │   │   ├── RiskBadge.jsx       # Risk level badge (red/yellow/green)
│   │   │   ├── ChildAvatar.jsx     # Avatar with initials
│   │   │   └── SectionHeader.jsx   # Section title with optional action
│   │   ├── dashboard/
│   │   │   ├── RiskDonut.jsx       # Recharts donut with center label
│   │   │   ├── AlertsFeed.jsx      # Chronological alerts with clickable rows
│   │   │   ├── WorkerPerformance.jsx # Performance metrics per worker
│   │   │   └── ReferralPipeline.jsx # 5-stage workflow visualization
│   │   ├── child/
│   │   │   ├── DomainRadar.jsx     # Recharts radar with month tabs
│   │   │   ├── MilestoneList.jsx   # Domain-filtered milestone tracking
│   │   │   └── EmotionHistory.jsx  # 7-day emotion bubbles + distress alerts
│   │   └── worker/
│   │       ├── PriorityCards.jsx   # 3 action cards (home-visit/referral/report)
│   │       ├── ChildGrid.jsx       # 6-child grid with domain bars
│   │       └── QuickLogPanel.jsx   # Voice/text input with auto-detect
│   ├── pages/
│   │   ├── Login.jsx               # Split-screen login (email/password/role)
│   │   ├── SupervisorDashboard.jsx # District overview
│   │   ├── WorkerView.jsx          # Morning digest
│   │   ├── ChildProfile.jsx        # Full child profile
│   │   └── SectionPage.jsx         # Generic shell for other routes
│   ├── data/
│   │   └── mockData.js             # Complete mock dataset
│   ├── App.jsx                     # BrowserRouter with 10 routes
│   ├── main.jsx                    # React 18 root render
│   └── index.css                   # Tailwind directives + global styles
├── .gitignore                      # Git ignore patterns
├── package.json                    # Dependencies (React, Vite, Tailwind, Recharts, Lucide)
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Extended color palette (forest, sage, mint, alert)
├── postcss.config.js               # PostCSS plugins (Tailwind, Autoprefixer)
├── index.html                      # Entry point
└── README.md                       # This file
```

## 🛠 Installation

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** 10+ (comes with Node.js)
- **Git** (for cloning the repository)

### Setup Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/thuli.git
cd thuli
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the development server**
```bash
npm run dev
```

The app will be available at **http://localhost:5173/**

### Test Login Credentials

| Role | Email | Password |
|------|-------|----------|
| Supervisor | supervisor@district.gov.in | password | 
| Anganwadi Worker | worker@centre.gov.in | password |

Both roles navigate to different dashboards automatically.

## 🚀 Usage

### Development

```bash
# Start dev server with hot reload
npm run dev

# Runs on: http://localhost:5173/
```

### Build for Production

```bash
# Create optimized build
npm run build

# Output: dist/ folder with production files
# - index.html
# - assets/index-*.css (22.77 KB gzipped)
# - assets/index-*.js (609.46 KB gzipped)
```

### Preview Production Build

```bash
# Test production build locally
npm run preview

# Runs on: http://localhost:4173/
```

## 📍 Pages & Routes

| Route | Page | Role | Description |
|-------|------|------|-------------|
| `/` | Login | Both | Split-screen login with role selection |
| `/dashboard` | SupervisorDashboard | Supervisor | District overview with KPIs and charts |
| `/worker` | WorkerView | Worker | Morning digest with priority actions |
| `/child/:id` | ChildProfile | Both | Full child profile with developmental data |
| `/children` | SectionPage | Both | District children registry (8-card grid) |
| `/workers` | SectionPage | Supervisor | Worker directory and performance |
| `/referrals` | SectionPage | Both | Referral pipeline and tracking |
| `/analytics` | SectionPage | Supervisor | District analytics and insights |
| `/attendance` | SectionPage | Worker | Attendance tracking for today |
| `/reports` | SectionPage | Worker | Generate and view reports |
| `*` | Redirect | Both | Catch-all redirects to `/` |

## 🎨 Design System

### Color Palette

**Forest Palette** (Primary - Government Authority)
- 950: `#0f2e2b` (Darkest - Sidebar)
- 900: `#1a3d39` (Dark accents)
- 800: `#235347` (Active states, buttons)
- 700: `#2d6d66` (Hover states, links)

**Sage Palette** (Secondary - Calm, Professional)
- Sage: `#8EB69B` (Borders, secondary text)
- Lighter: Sage/70, Sage/50, Sage/30, Sage/10 (Various opacities)

**Mint Palette** (Accent - Light, Positive)
- 100: `#E8F5EE` (Cards, backgrounds)
- 50: `#F1F8F5` (Page background)

**Alert Palette** (Status Indicators)
- Red: `#D64045` (High risk, critical)
- Yellow: `#E8A838` (Watch, caution)
- Green: `#3A9E5F` (Safe, positive)

### Typography

- **Font Stack**: `-apple-system, Segoe UI, Roboto, system-ui, sans-serif`
- **Headings**: `font-semibold` (600 weight)
- **Body**: Regular (400 weight)
- **Sizes**:
  - Page titles: `text-2xl` (responsive: `sm:text-2xl`)
  - Card titles: `text-base`
  - Body text: `text-sm`
  - Labels: `text-xs`

### Spacing Scale

- **Compact** (mobile): `p-3` (12px)
- **Standard** (tablet): `p-4` (16px)
- **Spacious** (desktop): `p-5` (20px) to `p-6` (24px)

### Responsive Breakpoints (Tailwind)

- **Mobile**: 0-639px (default)
- **Small (sm)**: 640px+ (tablets)
- **Medium (md)**: 768px+ (tablets+)
- **Large (lg)**: 1024px+ (desktops)
- **XL (xl)**: 1280px+ (large desktops)

## 🧩 Components

### Layout Components

#### `Layout.jsx`
- Main page wrapper with sidebar, topbar, and main content
- Props: `title`, `breadcrumb`, `children`
- Responsive: Mobile sidebar toggle, desktop always visible

#### `Sidebar.jsx`
- Fixed left navigation (768px+ on desktop, drawer on mobile)
- Role-aware items (Supervisor vs Worker)
- User profile section with logout
- Props: `open`, `onClose`

#### `TopBar.jsx`
- Fixed header with search, notifications, user avatar
- Mobile: Toggle search input, hamburger menu
- Props: `title`, `breadcrumb`, `onMenuClick`

### UI Components

#### `StatCard.jsx`
- KPI metric display with trend indicator
- Props: `value`, `label`, `icon`, `trend`, `trendLabel`, `accent`
- Colors: green, red, neutral

#### `RiskBadge.jsx`
- Risk level indicator (HIGH RISK, WATCH, SAFE)
- Props: `risk`, `size`, `label`
- Sizes: sm (small), lg (large)

#### `ChildAvatar.jsx`
- Avatar circle with initials
- Props: `name`, `size`, `className`
- Sizes: sm (8px), md (9px), lg (12px), xl (16px)

### Dashboard Components

#### `RiskDonut.jsx`
- Recharts PieChart with inner/outer radius
- Center label showing total children
- Legend with percentage breakdown

#### `AlertsFeed.jsx`
- Chronological alert rows with risk-color left border
- Clickable to child profile
- Shows: Name, domain concern, centre, last seen

#### `WorkerPerformance.jsx`
- 4 worker cards with score progress bars
- Shows: Name, centre, score, performance percentage

#### `ReferralPipeline.jsx`
- 5-stage horizontal workflow (Flagged → Confirmed → Referred → Visited → Closed)
- Shows count and label per stage
- Alternating backgrounds

### Child Components

#### `DomainRadar.jsx`
- Recharts RadarChart with 5 domains
- Month tabs (Mar/Feb/Jan) for comparison
- This Month vs Last Month overlays
- Domain score bars below chart

#### `MilestoneList.jsx`
- Filterable by domain (All/Physical/Language/etc)
- Status icons: ✓ (achieved), ◯ (pending), ✗ (overdue)
- Summary count at bottom
- Responsive filter pills

#### `EmotionHistory.jsx`
- 7-day emotion bubbles with emoji
- Distress alert if 3+ sad/scared days
- Recent observations feed (3 latest)
- Action buttons: Generate Report, Flag Review, Add Note

### Worker Components

#### `PriorityCards.jsx`
- 3 action cards (home-visit, referral, report)
- Urgent items: red left border
- Non-urgent: sage left border
- Icons in mint circle

#### `ChildGrid.jsx`
- 6-child card grid (2 cols mobile, 3 cols desktop)
- Risk filtering: All/Red/Yellow/Green
- Shows: Avatar, name, age, centre, 5-domain bars, risk badge
- Clickable to profile

#### `QuickLogPanel.jsx`
- Child selector dropdown
- Text/voice input textarea
- Auto-detect domain via regex keywords
- Mic toggle with pulse animation

## 🏗 Architecture

### Data Flow

```
App.jsx (Router)
  ├─ Login.jsx (Role Selection)
  │  └─ sessionStorage['thuli-role']
  │
  ├─ SupervisorDashboard.jsx (Layout)
  │  ├─ StatCard (KPIs from mockData.stats)
  │  ├─ RiskDonut (children filtered by risk)
  │  ├─ AlertsFeed (children where risk !== 'green')
  │  ├─ WorkerPerformance (mockData.workers)
  │  ├─ ReferralPipeline (mockData.referralPipeline)
  │  └─ Recent Observations (mockData.dashboardObservations)
  │
  ├─ WorkerView.jsx (Layout)
  │  ├─ Greeting (role from sessionStorage)
  │  ├─ PriorityCards (mockData.priorityActions)
  │  ├─ ChildGrid (mockData.workerChildList)
  │  └─ QuickLogPanel (workerChildList with domain detection)
  │
  └─ ChildProfile.jsx (Layout)
     ├─ Header (child from mockData.children)
     ├─ DomainRadar (child.domains, emotionHistory)
     ├─ MilestoneList (child.milestones)
     └─ EmotionHistory (emotionHistory, observations)
```

### State Management

- **Local State**: Component useState hooks
- **Session State**: `sessionStorage['thuli-role']` for role persistence
- **Mock Data**: `mockData.js` (10 children, 4 workers, 5 domains per child, etc)
- **Routing State**: React Router's useNavigate, useParams

### Domain Detection Algorithm

Text keywords → Domain mapping:

| Keywords | Domain |
|----------|--------|
| respond, name, say, speak, word, call, listen | Language |
| weight, walk, run, eat, feed, grow, height, sick | Physical |
| shape, count, match, solve, sort, puzzle, memory | Cognitive |
| play, group, share, alone, eye contact, smile, cry, fear | Social-Emotional |
| spoon, cup, dress, toilet, wash, bath, self-care | Self-Care |

## 📊 Data Structure

### Mock Data (`src/data/mockData.js`)

```javascript
// 10 Children with full profiles
children: [
  {
    id: "TN-CBE-2024-0047",
    name: "Riya Kumari",
    age: "20 months",
    centre: "Centre 12, Ukkadam",
    worker: "Meenakshi R.",
    risk: "red",
    domain: "Language",
    domains: {
      Physical: 72,
      Language: 28,      // <40 = red (high risk)
      Cognitive: 61,     // 40-65 = yellow
      SocialEmotional: 45,
      SelfCare: 68       // >65 = green
    },
    lastSeen: "2 days ago",
    milestones: [...],
    emotions: [...]
  },
  // ... 9 more children
]

// 4 Workers
workers: [
  { name: "Meenakshi R.", centre: "Centre 12", score: 87 },
  // ... more workers
]

// 5-Stage Referral Pipeline
referralPipeline: {
  flagged: 23,
  confirmed: 18,
  referred: 11,
  visited: 6,
  closed: 3
}

// Milestones (3-4 per domain, 5 domains)
milestones: {
  Physical: [
    { text: "Holds spoon independently", status: "achieved" },
    // ...
  ],
  // ... other domains
}

// Emotion History (7-day)
emotionHistory: [
  { day: "Mon", emotion: "happy" },
  // ... 7 entries
]

// Dashboard observations (voice log)
dashboardObservations: [
  { worker: "Isha Kumar", time: "10:20 AM", text: "...", domain: "Language" },
  // ...
]
```

## 🔧 Development

### Adding a New Page

1. Create component in `src/pages/NewPage.jsx`
2. Import and add route in `App.jsx`
3. Add navigation item in `Sidebar.jsx` (if needed)

### Adding a New Component

1. Create in appropriate folder (`ui/`, `dashboard/`, `child/`, `worker/`)
2. Import in parent component
3. Pass required props

### Styling Guidelines

- Use Tailwind classes (no CSS files for components)
- Mobile-first: base classes → sm: → md: → lg:
- Responsive sizes: `p-3 sm:p-4 md:p-5`
- Colors from palette: `bg-forest-800`, `text-sage`, `border-alert-red`
- Borders: `border-sage/20` (20% opacity)

### Common Responsive Patterns

```jsx
// Two-column to three-column grid
className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3"

// Text scaling
className="text-xs sm:text-sm md:text-base"

// Padding/gaps
className="p-3 sm:p-4 md:p-5 gap-2 sm:gap-3 md:gap-4"

// Hide on mobile
className="hidden sm:block"

// Show only on mobile
className="sm:hidden"
```

## 📦 Build & Deployment

### Production Build

```bash
npm run build
```

**Output:**
- `dist/index.html` - Optimized entry point
- `dist/assets/index-*.css` - Minified styles (4.77 KB gzipped)
- `dist/assets/index-*.js` - Minified JS (173.45 KB gzipped)

**Total Bundle Size**: ~178 KB gzipped (605 KB unminified)

### Deployment Options

#### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm run build
# Deploy dist/ folder
```

#### GitHub Pages
```bash
# Add to package.json: "homepage": "https://username.github.io/thuli"
npm run build
# Deploy dist/ folder using gh-pages
```

#### Docker
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built for India's Anganwadi ecosystem
- Inspired by government-grade applications
- Designed with accessibility and responsiveness as core principles
- Created during hackathon by Team ZENQ

## 📞 Support

For issues, feature requests, or questions:
- Open an issue on GitHub
- Contact: support@thulidashboard.in
- Documentation: [Full Docs](https://github.com/yourusername/thuli/wiki)

---

**Version**: 1.0 — Hackathon Demo · Team ZENQ

Made with ❤️ for India's children
