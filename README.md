# A2Z Accounting Next.js Website

A modern, high-performance Next.js conversion of the A2Z Accounting WordPress website, featuring professional accounting and consulting services in Dubai.

## 🚀 Features

- **Next.js 15** with App Router and TypeScript
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Performance Optimized** - Static generation, image optimization, and compression
- **Interactive Components** - Carousels, animations, and smooth scrolling
- **SEO Enhanced** - Comprehensive metadata, Open Graph, and Twitter cards
- **Error Handling** - React Error Boundaries for robust user experience
- **Analytics Ready** - Google Analytics integration (optional)
- **Security Headers** - XSS protection and content security

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** React 18
- **Carousels:** Swiper.js
- **Build Tool:** Next.js CLI
- **Deployment:** Static export ready

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/MoyasiGinko/A2Z-Accounting-Website.git
   cd A2Z-Accounting-Website/nextjs-conversion
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**
   Create a `.env.local` file for Google Analytics:

   ```env
   NEXT_PUBLIC_GA_MEASUREMENT_ID=GA_MEASUREMENT_ID
   ```

4. **Run development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build & Deployment

### Development

```bash
npm run dev          # Start development server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript type checking
```

### Production

```bash
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Build and preview locally
```

### Static Export (for static hosting)

```bash
npm run export       # Export static files
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
3. **Deploy automatically** on every push to main branch

### Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `out` (for static export) or `.next` (for SSR)
3. **Set environment variables** in Netlify dashboard

### Static Hosting (GitHub Pages, AWS S3, etc.)

1. **Build the project:**

   ```bash
   npm run export
   ```

2. **Upload the `out` folder** to your hosting provider

### Deployment Environment Variables

Set these in your hosting platform's environment variables:

```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=GA-XXXXXXXXXX  # Optional
```

## 📁 Project Structure

```text
nextjs-conversion/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Home page
│   │   ├── loading.tsx        # Loading UI
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── Header.tsx         # Site header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── Services.tsx       # Services section
│   │   ├── Testimonials.tsx   # Testimonials carousel
│   │   ├── Footer.tsx         # Site footer
│   │   ├── ErrorBoundary.tsx  # Error handling
│   │   ├── Analytics.tsx      # Google Analytics
│   │   └── LoadingSpinner.tsx # Loading component
│   └── hooks/                 # Custom React hooks
│       ├── useScrollEffects.ts
│       ├── useStickyHeader.ts
│       ├── useCarousels.ts
│       └── ...
├── public/                    # Static assets
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS config
├── tsconfig.json              # TypeScript config
└── package.json               # Dependencies
```

## 🎨 Components

### Core Components

- **Header** - Navigation with sticky behavior
- **Hero** - Main banner with call-to-action
- **Services** - Service offerings grid
- **Testimonials** - Client testimonials carousel
- **Footer** - Contact information and links

### Interactive Features

- **Scroll Effects** - Smooth animations on scroll
- **Carousels** - Swiper-powered image galleries
- **Mobile Menu** - Responsive navigation
- **Scroll to Top** - Navigation helper

## 🔧 Configuration

### Next.js Config (`next.config.js`)

- Image optimization settings
- Security headers
- Compression enabled
- Static asset handling

### Environment Variables

- `NEXT_PUBLIC_GA_MEASUREMENT_ID` - Google Analytics tracking ID

## 🚀 Performance

- **Bundle Size:** ~20.3 kB (optimized)
- **Static Generation:** All pages pre-rendered
- **Image Optimization:** Automatic WebP conversion
- **Code Splitting:** Automatic chunk optimization
- **Compression:** Gzip enabled

## 🔒 Security

- **XSS Protection** - X-Content-Type-Options header
- **Frame Protection** - X-Frame-Options header
- **Referrer Policy** - Origin-when-cross-origin
- **CSP Ready** - Content Security Policy prepared

## 📱 Responsive Design

- **Mobile First** - Progressive enhancement
- **Breakpoint System** - Tailwind CSS responsive utilities
- **Touch Friendly** - Optimized for mobile interactions
- **Performance** - Optimized loading on all devices

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary to A2Z Accounting.

## 📞 Support

For support or questions, contact the development team.

## 🔄 Migration Notes

This project was converted from a WordPress theme to Next.js, maintaining:

- Original design and branding
- All interactive functionality
- SEO optimization
- Performance improvements
- Modern development workflow
