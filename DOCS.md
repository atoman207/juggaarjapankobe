# Juggaar Japan Website Clone - Documentation

## Project Overview

This project is a React-based clone of the [juggaarjapankobe.com](https://juggaarjapankobe.com/) website. The application is built using Vite, React, TypeScript, and CSS Modules.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI Framework |
| **TypeScript** | Type Safety |
| **Vite** | Build Tool & Dev Server |
| **React Router v7** | Client-side Routing |
| **CSS Modules** | Scoped Component Styling |
| **Bun** | Package Manager |

---

## Project Structure

```
src/
├── assets/
│   ├── css/
│   │   └── index.css          # Global styles & design tokens
│   └── image/                  # All image assets
│       ├── mv1.jpg, mv2.jpg, mv3.jpg     # Hero carousel
│       ├── service01-03.jpg              # Service gallery
│       ├── posting01-02.jpg              # BPO banner posters
│       ├── recruit01-02.jpg              # Recruit illustrations
│       ├── staff01-02.jpg                # Staff photos
│       ├── company.jpg                   # Company building
│       ├── parallax1-2.jpg               # Parallax backgrounds
│       └── logo.svg                      # Company logo
├── components/
│   ├── Header/                 # Site header with navigation
│   ├── Footer/                 # Site footer with CTA
│   ├── Layout/                 # Main layout wrapper
│   ├── HeroCarousel/           # Homepage hero slider
│   ├── LineBanner/             # LINE registration banner
│   └── ServiceGrid/            # Service cards grid
├── pages/
│   ├── HomePage.tsx            # Main landing page
│   ├── ConceptPage.tsx         # Company concept/philosophy
│   ├── ServicesPage.tsx        # Services offered
│   ├── RecruitmentPage.tsx     # Job recruitment
│   ├── StaffPage.tsx           # Staff introduction
│   ├── FaqPage.tsx             # FAQ with accordions
│   ├── CompanyPage.tsx         # Company info & map
│   ├── BlogPage.tsx            # Blog posts grid
│   ├── ContactPage.tsx         # Contact form
│   └── EntryPage.tsx           # Job application form
└── App.tsx                     # Main app with routing
```

---

## Pages Implemented

### 1. HomePage (`/`)
The main landing page featuring:
- **Hero Carousel** - Auto-sliding image carousel with 3 slides
- **LINE Banner** - Registration call-to-action
- **Concept Section** - Mission statement with service tags
- **Service Gallery** - 3-photo grid with hover overlays
- **Service Text Cards** - Detailed descriptions in 3-column layout
- **Posting Section** - 95% repeat rate badge
- **BPO Banners** - Large promotional poster images
- **Parallax Sections** - Fixed background scrolling effects
- **Recruit Section** - Illustrated job opportunity cards
- **Staff Section** - Team introduction
- **Q&A Section** - FAQ accordion items
- **Company Section** - Building image and contact info

### 2. ConceptPage (`/concept`)
- Company philosophy and vision
- Service categories grid
- Core values: Sincerity, Politeness, Speed

### 3. ServicesPage (`/service`)
- Detailed service descriptions
- Pricing tables
- CTA sections

### 4. RecruitmentPage (`/recruit`)
- Job listings with requirements
- Benefits section
- Application CTA

### 5. StaffPage (`/staff`)
- Team member cards
- Roles and messages

### 6. FaqPage (`/faq`)
- Category tabs (Customer/Applicant)
- Accordion-style Q&A items
- Animated expand/collapse

### 7. CompanyPage (`/company`)
- Company information table
- Embedded Google Maps
- Contact details

### 8. BlogPage (`/blog`)
- Blog post card grid
- Post previews with dates

### 9. ContactPage (`/contact`)
- Contact form with validation
- Phone and LINE contact options
- Success message state

### 10. EntryPage (`/entry`)
- Job application form
- Personal info fields
- Position selection
- Privacy policy agreement

---

## Components

### Header
- Sticky positioning
- Top bar with phone numbers and business hours
- Desktop navigation menu
- Mobile hamburger menu with drawer
- "Contact" and "Entry" CTA buttons

### Footer
- CTA banner section
- Company logo and contact info
- 5-column navigation links
- Social media icons (LINE, Instagram, Facebook, Twitter)
- Copyright notice

### HeroCarousel
- Auto-sliding every 5 seconds
- Previous/Next navigation arrows
- Dot indicators
- Text overlay with title/subtitle
- Smooth fade transitions

### LineBanner
- LINE icon and registration message
- "Add Friend" CTA button
- Gradient background

### ServiceGrid
- 4-card service showcase
- Icon + title + description
- Hover effects

---

## Design System

### Colors
```css
--primary-blue: #00A3DB
--primary-blue-light: #23C8E4
--primary-gradient: linear-gradient(to right, #00A3DB, #23C8E4, #00A3DB)
--bg-white: #ffffff
--bg-light-gray: #f5f7fa
--bg-light-cyan: rgba(0, 163, 219, 0.08)
--text-dark: #1a1a1a
--text-body: #333333
--text-muted: #666666
```

### Typography
```css
--font-family-jp: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif
```

### Spacing
```css
--section-padding-y: 80px
--section-padding-x: 20px
--container-max-width: 1200px
```

---

## Assets Downloaded

| Image | Description |
|-------|-------------|
| `mv1.jpg`, `mv2.jpg`, `mv3.jpg` | Hero carousel slides |
| `service01.jpg` | Service 01 - Trust building |
| `service02.jpg` | Service 02 - Customer-centric |
| `service03.jpg` | Service 03 - Satisfaction |
| `posting01.jpg` | BPO poster with team photo |
| `posting02.jpg` | BPO poster with company info |
| `recruit01.jpg` | Delivery driver illustration (day) |
| `recruit02.jpg` | Charter driver illustration (night) |
| `staff01.jpg` | Staff photo 1 |
| `staff02.jpg` | Staff photo 2 |
| `company.jpg` | Company building exterior |
| `parallax1.jpg` | Parallax background 1 |
| `parallax2.jpg` | Parallax background 2 |

---

## Running the Project

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

**Development URL:** http://127.0.0.1:5173/

---

## Routing Structure

| Route | Page Component |
|-------|----------------|
| `/` | HomePage |
| `/concept` | ConceptPage |
| `/service` | ServicesPage |
| `/recruit` | RecruitmentPage |
| `/staff` | StaffPage |
| `/faq` | FaqPage |
| `/company` | CompanyPage |
| `/blog` | BlogPage |
| `/contact` | ContactPage |
| `/entry` | EntryPage |

---

## Key Features

1. **Responsive Design** - Mobile-first approach with breakpoints at 768px and 1024px
2. **Japanese Language Support** - Proper font stacks for Japanese typography
3. **CSS Modules** - Scoped styling prevents class conflicts
4. **Form Validation** - Contact and Entry forms with client-side validation
5. **Interactive Components** - Accordion FAQ, carousel, mobile menu
6. **Parallax Effects** - Fixed background scrolling on desktop
7. **Hover Animations** - Smooth transitions on buttons and cards

---

## Future Enhancements

- [ ] Column/Blog detail pages
- [ ] Privacy Policy page
- [ ] Service sub-pages (charter price, posting price)
- [ ] Contact form confirmation page
- [ ] SEO meta tags and structured data
- [ ] Image optimization and lazy loading
- [ ] Analytics integration

---

## Git Repository

- **Branch:** `feat/all_pages`
- **Remote:** https://github.com/atoman207/juggaarjapankobe

---

*Documentation generated: February 3, 2026*
