# TRAVIZO — Where Mountains Meet Clouds

> A full-featured Digital Travel Planning and Booking Portal built with Angular 21.

---

## About the Project

**TRAVIZO** is a premium travel planning and booking web application that lets users discover, explore, and book curated travel experiences across India — from the misty peaks of the Western Ghats to the golden deserts of Rajasthan, sacred ghats of Varanasi, and pristine beaches of Goa.

The platform features a unique **Trip Therapy** system — instead of asking *where* you want to go, it asks *how you feel*, then recommends destinations that match your current emotional state.

> Started as a weekend hiking blog in 2018, TRAVIZO grew into a full travel portal built by a team of local experts, sustainable travel advocates, and passionate storytellers.

---

## Live Features

### Core Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero slideshow, Trip Therapy mood selector, featured destinations |
| Destinations | `/destinations` | Browse 36 destinations with search, filters, and mood tags |
| Destination Detail | `/destinations/:id` | Full info — day-wise itinerary, gallery, food, cultural context, stays |
| Book a Tour | `/booking` | 3-step booking form with package selection and payment simulation |
| About Us | `/about` | Company story, team members, values, and impact stats |
| Contact | `/contact` | Contact form, FAQ accordion, and office location |
| My Bookings | `/booking-history` | View, manage, modify dates, and cancel trips |
| Admin Dashboard | `/admin-dashboard` | Analytics — revenue, bookings by destination, package breakdown |

---

### Trip Therapy — Mood-Based Travel

Instead of browsing by location, users pick an emotional travel mood and get matched destinations:

| Mood | Icon | Travel Style | Destination Types |
|---|---|---|---|
| Serene Escape | 🌊 | Peaceful retreats, rest, renewal | Backwater, Hill Station |
| Adrenaline Rush | ⛰️ | Thrills, peak treks, daring adventures | Trekking |
| Hearts Entwined | 💕 | Romantic getaways, intimate escapes | Heritage, Beach |
| Soul Seeking | 🕌 | Spiritual journeys, inner peace | Heritage |
| Urban Canvas | 🏙️ | City culture, cosmopolitan vibes | City |
| Tropical Paradise | 🏖️ | Sun, sand, sea, island bliss | Beach |

---

### Destination Catalogue — 36 Destinations

**Hill Stations (9):** Kodaikanal · Ooty · Munnar · Coorg · Manali · Shimla · Darjeeling · Nainital · Kashmir

**Heritage (9):** Hampi · Pondicherry · Mahabalipuram · Varanasi · Agra · Jaipur · Rishikesh · Amritsar · Delhi

**Trekking (7):** Kumara Parvatha · Kudremukh · Chembra Peak · Agasthyarkoodam · Tadiyandamol · Leh Ladakh · Udaipur

**City (5):** Chennai · Vishakhapatnam · Mangalore · Mysuru · Kochi

**Beach (3):** Varkala · Goa Beaches · Gokarna

**Backwater (3):** Alleppey · Kumarakom · Chilika Lake

Each destination includes:
- Day-wise itinerary
- Photo gallery
- Local food recommendations
- Accommodation options
- Nearby attractions
- Cultural/historical significance
- Festival and best season info

---

### Booking System — Packages per Destination Type

Every destination offers **3 tiered packages** tailored to the destination type:

| Destination Type | Package 1 | Package 2 | Package 3 |
|---|---|---|---|
| Hill Station | Nature Trail (₹9,500) | Plantation Retreat (₹18,500) | Summit Adventure (₹32,000) |
| Backwater | Houseboat Classic (₹12,000) | Heritage Cruise (₹24,000) | Village Immersion (₹38,000) |
| Beach | Beach Escape (₹9,000) | Adventure Coast (₹19,500) | Luxury Shores (₹42,000) |
| Trekking | Day Hiker (₹7,500) | Multi-Day Trek (₹22,000) | Expedition Elite (₹45,000) |
| Heritage | Cultural Explorer (₹8,500) | Heritage Odyssey (₹20,000) | Legacy Grand Tour (₹38,000) |
| City | City Essentials (₹6,000) | Metro Deep Dive (₹15,000) | Urban Luxury (₹28,000) |

Prices are **per person**; group discounts apply automatically.

---

### Key Functionalities

- **Trip Therapy** — 6 emotion-based travel moods matching you to curated destinations
- **Smart Search & Filter** — filter by destination type, mood tag, or keyword search
- **3-Step Booking Flow** — Trip Details → Traveler Info → Review & Confirm
- **Package Tiers** — 3 packages per destination type with full inclusions listed
- **Payment Simulation** — UPI, Credit/Debit Card, Net Banking, Digital Wallets (Razorpay-style UI)
- **PDF Receipt Download** — auto-generated booking confirmation PDF via jsPDF
- **User Authentication** — login/signup modal with `localStorage` session persistence
- **Booking History** — view all bookings, modify check-in/check-out dates and traveler count
- **Booking Cancellation** — cancel any booking from My Bookings page
- **Group Discounts** — automatic 5% for 4–7 travelers, 10% for 8+ travelers
- **Admin Dashboard** — analytics: total bookings, total revenue, package & destination breakdowns
- **Scroll Animations** — custom `AnimateOnScrollDirective` for smooth entrance effects
- **Toast Notifications** — success/error feedback via a global `NotificationService`
- **Hero Slideshow** — auto-rotating background images on the home page (5s interval)
- **Fully Responsive** — mobile, tablet, and desktop layouts with no UI framework dependency

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 21 (Standalone Components) |
| Language | TypeScript 5.9 |
| Styling | Custom CSS3 (no UI framework), CSS Variables |
| Reactive Programming | RxJS 7.8 |
| PDF Generation | jsPDF 4.2 |
| Build Tool | Angular CLI 21 / Vite |
| Testing | Vitest + jsdom |
| Data Storage | localStorage (client-side, no backend required) |

---

## Design System

| Token | Value |
|---|---|
| Primary Color | Deep Forest Green `#1B4332` |
| Accent Color | Golden Sunrise `#D4A03C` |
| Heading Font | DM Serif Display |
| Body Font | Source Sans 3 |
| Decorative Font | Cormorant Garamond |
| Base Spacing | 8px grid |
| Images | 100+ destination photos in `/public/assets/` |

---

## Project Structure

```
travizo/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/               ← Global header with logo & auth button
│   │   │   ├── footer/               ← Global footer with links
│   │   │   ├── login-modal/          ← Login / Signup authentication modal
│   │   │   └── toast/                ← Global toast notification system
│   │   ├── pages/
│   │   │   ├── home/                 ← Landing page: hero, moods, featured destinations
│   │   │   ├── destinations/
│   │   │   │   ├── destinations.ts   ← Browse & filter all 36 destinations
│   │   │   │   ├── destination-detail.ts  ← Individual destination page
│   │   │   │   └── destinations-data.ts   ← Static data for all 36 destinations
│   │   │   ├── booking/              ← 3-step booking form + PDF generation
│   │   │   ├── booking-history/      ← View, modify & cancel bookings
│   │   │   ├── admin-dashboard/      ← Analytics dashboard
│   │   │   ├── about-us/             ← Company story, values, team
│   │   │   └── contact/              ← Contact form, FAQ, map
│   │   ├── services/
│   │   │   ├── auth.service.ts       ← Login / signup / session management
│   │   │   ├── booking.service.ts    ← Booking CRUD + revenue analytics
│   │   │   └── notification.service.ts  ← Toast notification service
│   │   └── shared/
│   │       └── directives/
│   │           └── animate-on-scroll.directive.ts  ← Scroll entrance animations
│   ├── styles.css                    ← Global design system & CSS variables
│   └── index.html                    ← App entry point
├── public/
│   └── assets/                       ← 100+ destination images + logo
├── angular.json
├── package.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+
- Angular CLI: `npm install -g @angular/cli`

### Installation & Run

```bash
# Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd travizo

# Install dependencies
npm install

# Start development server
npm start

# Open browser at http://localhost:4200
```

### Build for Production

```bash
ng build
# Output: dist/travizo/browser/
```

---

## Deployment

### Option 1 — Vercel (Recommended, Free, Easiest)

1. Push this repo to your GitHub account
2. Go to [vercel.com](https://vercel.com) > New Project > Import from GitHub
3. Set **Root Directory** to `travizo` (if in a monorepo) or leave as-is
4. **Build command:** `ng build`
5. **Output directory:** `dist/travizo/browser`
6. Click **Deploy** — live in under 2 minutes

### Option 2 — Netlify (Free)

1. Go to [netlify.com](https://netlify.com) > Add new site > Import from GitHub
2. **Base directory:** `travizo`
3. **Build command:** `ng build`
4. **Publish directory:** `dist/travizo/browser`
5. Add a `_redirects` file inside `public/` with content:
   ```
   /* /index.html 200
   ```

### Option 3 — GitHub Pages

```bash
cd travizo
ng add angular-cli-ghpages
ng deploy --base-href=/<your-repo-name>/
```

---

## Team

Developed by **Batch 8 — Feb 2026** as part of the **Springboard Internship Program**.

---

## License

This project is for educational purposes. All destination images are sourced from Unsplash under the Unsplash License.
