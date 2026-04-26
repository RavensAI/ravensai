# RavensAI Eden – Climate Intelligence Platform

A production-ready web platform for **Eden**, an AI-powered climate intelligence system that transforms climate, satellite, and agricultural data into actionable insights for institutions.

## Overview

Eden is designed for governments, NGOs, and research institutions to operationalize climate-smart agriculture across Africa. This website communicates technical credibility, explains complex AI systems clearly, and drives institutional partnerships.

**Live Site:** [ravensai.com](https://ravensai.com)

## Design Philosophy

- **Minimal, scientific aesthetic** inspired by Stripe, OpenAI, Vercel, and Palantir
- **Progressive disclosure**: simple messaging → technical depth
- **Data-driven, not marketing-driven**: real outputs, transparent confidence scores
- **Trust signals**: datasets, metrics, architecture diagrams
- **Institutional credibility**: for partners making high-stakes decisions

## Site Architecture

### Pages

1. **Home (`/`)** – Hero, problem/solution, pipeline overview, output samples, credibility signals
2. **System (`/system`)** – Architecture diagram, model explanations, decision intelligence engine
3. **Data (`/data`)** – Data sources (CHIRPS, NASA, FAO), credibility controls, validation rules
4. **Impact (`/impact`)** – Metrics (reach, improvements, scalability), regional deployment map
5. **Science (`/science`)** – Open datasets, peer-reviewed papers, API endpoints, researcher access
6. **Contact (`/contact`)** – Partnership inquiry form, use cases, engagement flow, team locations

### API Endpoints

- **`GET /api/v1/forecast?region=Nakuru&type=planting-window`** – Sample predictions
- **`POST /api/v1/forecast`** – Batch forecast requests

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS 4 with custom design tokens
- **Fonts:** IBM Plex Sans & Mono (Google Fonts)
- **Animations:** Framer Motion (light, purposeful)
- **Language:** TypeScript
- **Deployment:** Vercel-ready

## Quick Start

### Prerequisites

- Node.js 18+ (or use nvm)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ravensai/eden-platform.git
cd eden-platform

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── page.tsx                          # Homepage
├── layout.tsx                        # Root layout with navbar/footer
├── globals.css                       # Tailwind + design tokens
├── system/page.tsx                   # System Architecture page
├── data/page.tsx                     # Data Sources page
├── impact/page.tsx                   # Impact Metrics page
├── science/page.tsx                  # Open Science page
├── contact/page.tsx                  # Contact & Partnerships page
└── api/
    └── v1/forecast/route.ts          # Sample API endpoint

components/
├── navbar.tsx                        # Sticky navigation
├── footer.tsx                        # Footer with links
├── section.tsx                       # Reusable section wrapper
├── output-card.tsx                   # Climate output display
├── metric-card.tsx                   # Impact metrics
├── data-source-card.tsx              # Dataset cards
├── architecture-diagram.tsx          # System flow visualization
├── map-placeholder.tsx               # Regional deployment map
├── partner-form.tsx                  # Contact form component
├── research-card.tsx                 # Research dataset display
├── api-card.tsx                      # API endpoint documentation
├── fade-in-on-scroll.tsx             # Animation wrapper
└── ...

lib/
├── mock-data.ts                      # All structured data, types, and fixtures

public/
└── (static assets if needed)
```

## Design System

### Color Palette

- **Primary Green:** `#16a34a` (brand-700)
- **Dark Blue:** `#0f172a` (brand-950)
- **Light Background:** `#f5faf8`
- **White:** `#ffffff`
- **Accent Blue:** `#2a7faf`

### Typography

- **Headings:** IBM Plex Sans, 600-700 weight, large sizing (3xl–4xl)
- **Body:** IBM Plex Sans, 400 weight, 14-16px
- **Mono:** IBM Plex Mono, for technical labels and code

### Spacing & Layout

- Max width: 6xl (1152px)
- Sections: 16-20px (py) padding, responsive
- Grid gap: 5-8px
- Border radius: 2xl (16px) for cards

## Mock Data

All sample data is centralized in `lib/mock-data.ts` with TypeScript types:

- **Pipeline stages, architecture flows, model specs**
- **Example outputs** (planting windows, yield forecasts, climate alerts)
- **Datasets & credibility signals**
- **Impact metrics & regional scalability**
- **Research datasets & API endpoints**

See [mock-data.ts](lib/mock-data.ts) for full structure.

## Component Showcase

### OutputCard
Displays climate recommendations with status badges, confidence scores, and lead times.

```tsx
<OutputCard output={climateOutput} />
```

### Section
Wrapper for consistent page sections with eyebrows, titles, and descriptions.

```tsx
<Section
  eyebrow="System Overview"
  title="Architecture designed for..."
  description="..."
>
  {children}
</Section>
```

### PartnerForm
Clean, production-ready contact form with validation and success states.

```tsx
<PartnerForm />
```

## API Documentation

### GET /api/v1/forecast

**Query Parameters:**
- `region` (string): Region name (e.g., "Nakuru")
- `type` (string): Forecast type ("planting-window", "yield-projection", "climate-risk")

**Response Example:**
```json
{
  "success": true,
  "data": {
    "region": "Nakuru",
    "crop": "maize",
    "windowStart": "2024-05-12",
    "windowEnd": "2024-05-23",
    "confidence": 0.92
  }
}
```

### POST /api/v1/forecast

**Request Body:**
```json
{
  "region": "Nakuru",
  "forecastType": "planting-window",
  "crop": "maize"
}
```

**Response Example:**
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2024-05-20T10:30:00Z"
}
```

## Development Workflow

### Adding a New Page

1. Create `app/[route]/page.tsx`
2. Export metadata for SEO
3. Use `<Section>` components for structure
4. Add routes to navbar in `components/navbar.tsx`

### Adding Components

1. Create in `components/[name].tsx`
2. Use TypeScript for prop types
3. Follow Tailwind conventions and custom color tokens

### Updating Mock Data

All data lives in `lib/mock-data.ts`. Add types, update arrays, and reference in pages.

## Performance & Optimization

- **Turbopack compilation:** ~1.8s dev startup
- **Static prerendering:** All pages are static (except API routes)
- **Image optimization:** Future: use next/image for satellite/map assets
- **Font loading:** Google Fonts with next/font (optimized)

## Deployment

### Vercel (Recommended)

```bash
# Push to GitHub
git push origin main

# Connect on Vercel (automatic deploys)
```

### Self-Hosted

```bash
npm run build
npm start
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Make changes and test locally
4. Submit a pull request

## License

© 2024 RavensAI. All rights reserved.

---

## Support & Contact

- **Partnerships:** [partners@ravensai.com](mailto:partners@ravensai.com)
- **Press:** [press@ravensai.com](mailto:press@ravensai.com)
- **Locations:** Nairobi | Kigali | Remote
