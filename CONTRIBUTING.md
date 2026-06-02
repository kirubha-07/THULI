# Contributing to THULI

Thank you for your interest in contributing to THULI! We welcome contributions from the community to help improve the early childhood development platform.

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the goal: better support for India's Anganwadi ecosystem

## Getting Started

### Prerequisites
- Node.js 18+
- npm 10+
- Git

### Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/yourusername/thuli.git
cd thuli

# Install dependencies
npm install

# Start development server
npm run dev
```

## Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `refactor/` - Code refactoring
- `test/` - Test additions

### 2. Make Changes

Follow these guidelines:

#### Code Style
- Use Tailwind CSS for styling (no CSS files)
- Mobile-first approach: base classes → sm: → md: → lg:
- Component naming: PascalCase
- Variable naming: camelCase
- Responsive pattern: `p-3 sm:p-4 md:p-5`

#### Component Structure
```jsx
import { useEffect, useState } from 'react'

export default function ComponentName({ prop1, prop2, children }) {
  const [state, setState] = useState(null)
  
  useEffect(() => {
    // Side effects
  }, [dependencies])
  
  return (
    <div className="responsive-classes">
      {/* JSX */}
    </div>
  )
}
```

#### File Organization
```
src/
├── components/
│   ├── category/
│   │   └── ComponentName.jsx
├── pages/
│   └── PageName.jsx
└── data/
    └── mockData.js
```

### 3. Test Your Changes

```bash
# Development build
npm run dev

# Test on different screen sizes (375px, 768px, 1920px)
# Test on mobile devices if possible

# Production build
npm run build
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Build/tooling

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to the original repository
2. Click "New Pull Request"
3. Select your branch
4. Fill in the PR description (what, why, how)
5. Add screenshots if UI changes
6. Submit!

## PR Review Process

- Code review by maintainers
- All checks must pass (build, responsive, accessibility)
- Constructive feedback and suggestions
- Once approved, merge to main

## Reporting Issues

### Before Creating an Issue
- Check existing issues (open and closed)
- Verify the issue in the latest version
- Clear reproduction steps

### Issue Template

```markdown
## Description
Brief description of the issue

## Steps to Reproduce
1. Go to...
2. Click on...
3. Observe...

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- Device: (e.g., iPhone 12, iPad, Desktop)
- Browser: (e.g., Chrome, Safari)
- Screen size: (e.g., 375px, 768px, 1920px)

## Additional Context
Any other info
```

## Features to Work On

### High Priority
- [ ] Offline mode support
- [ ] Data export (PDF, Excel)
- [ ] Multi-language support (Hindi, Tamil, Telugu)
- [ ] Authentication with backend API
- [ ] Real database integration

### Medium Priority
- [ ] Advanced analytics and reporting
- [ ] Bulk operations (import children, workers)
- [ ] Customizable dashboards
- [ ] Theme switcher

### Nice to Have
- [ ] Dark mode
- [ ] Voice input enhancement
- [ ] Mobile app (React Native)
- [ ] Progressive Web App (PWA)

## Documentation

Help improve documentation by:
- Fixing typos or unclear sections
- Adding examples
- Improving navigation
- Translating to other languages

## Style Guide

### Tailwind CSS

**Mobile-First Responsive**
```jsx
// ✅ Good
className="p-3 sm:p-4 md:p-6 text-xs sm:text-sm md:text-base"

// ❌ Avoid
className="md:p-6 text-base p-3"
```

**Color Palette**
```jsx
// Primary (Forest)
bg-forest-950, bg-forest-800, bg-forest-700

// Secondary (Sage)
bg-sage, border-sage/30, text-sage

// Accent (Mint)
bg-mint-100, bg-mint-50

// Alert
bg-alert-red, bg-alert-yellow, bg-alert-green
```

**Responsive Grids**
```jsx
// 2 cols → 3 cols → 4 cols
className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4"
```

### React Best Practices

- Use functional components and hooks
- Keep components small and focused
- Use `useMemo` for expensive calculations
- Use `useCallback` for event handlers passed to children
- Extract reusable logic into custom hooks

### Naming Conventions

```jsx
// Components
export default function FeatureName() {}

// Hooks
function useFetchData() {}

// Constants
const STAT_COLORS = { red: '#D64045' }

// Variables
const childName = 'Riya'
const [isLoading, setIsLoading] = useState(false)
```

## Performance Considerations

- Use responsive images
- Lazy load charts (Recharts)
- Memoize expensive calculations
- Avoid unnecessary re-renders
- Test mobile performance

## Accessibility

- Use semantic HTML (`<button>`, `<header>`, `<nav>`)
- Add alt text to images
- Proper color contrast ratios
- ARIA labels where needed
- Keyboard navigation support

## Questions?

- Check the [Wiki](https://github.com/yourusername/thuli/wiki)
- Open an Issue with label "question"
- Comment on related PRs/Issues
- Reach out to maintainers

## Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub Contributors page
- Release notes

Thank you for helping make THULI better! 🙏
