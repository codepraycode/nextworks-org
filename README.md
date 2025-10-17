# NeXtworks Limited - Company Website

A modern, responsive company website built for NeXtworks Limited, a leading provider of ICT and Power Infrastructure services in Africa.

![NeXtworks Website](https://img.shields.io/badge/NeXtworks-Limited-blue) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC)

## 🚀 Live Demo

[View Live Site](https://nextworks.com.ng) • [Company Profile](./NextWorks%20Business%20Profile_S'.pdf)

## 📋 Project Overview

NeXtworks Limited is an established technology solutions provider with over 15 years of experience serving major clients across Nigeria and Africa. This website showcases their comprehensive IT services, client portfolio, and professional expertise.

### Key Business Areas

- **Network Infrastructure Solutions**
- **Information Services & Collaboration**
- **IP Surveillance & Security Systems**
- **Automation Solutions**
- **IT Consultancy & Training**

## 🛠 Tech Stack

### Core Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **UI Components**: Custom component library
- **Icons**: Lucide React
- **Animation**: Framer Motion
- **Deployment**: Vercel

### Development Tools

- **Package Manager**: pnpm
- **Code Quality**: ESLint + Prettier
- **Version Control**: Git
- **Analytics**: Vercel Analytics

## 📁 Project Structure

```bash
nextworks-website/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── services/          # Services pages
│   ├── portfolio/         # Portfolio page
│   ├── team/              # Team page
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   └── not-found.tsx      # 404 page
├── components/
│   ├── layout/            # Layout components
│   │   ├── header.tsx     # Navigation header
│   │   └── footer.tsx     # Site footer
│   ├── home/              # Homepage sections
│   │   ├── hero.tsx       # Hero section
│   │   ├── services-preview.tsx
│   │   ├── clients-section.tsx
│   │   ├── why-choose-us.tsx
│   │   └── cta-section.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   └── shared/            # Shared components
├── lib/
│   ├── constants.ts       # Company data and content
│   ├── utils.ts           # Utility functions
│   └── types.ts           # TypeScript definitions
├── public/                # Static assets
│   ├── images/
│   └── icons/
└── styles/                # Global styles
```

## 🎨 Design System

### Color Palette (Tailwind v4 CSS Variables)

```css
:root {
  --primary: oklch(0.35 0.12 250);      /* Deep professional blue */
  --secondary: oklch(0.55 0.15 240);    /* Lighter blue accent */
  --accent: oklch(0.6 0.2 235);         /* Bright blue for CTAs */
  --background: oklch(0.99 0 0);        /* White background */
  --foreground: oklch(0.15 0.01 240);   /* Dark text */
  --muted: oklch(0.96 0.005 240);       /* Muted backgrounds */
}
```

### Typography

- **Primary Font**: Inter (Sans-serif)
- **Display Font**: Sora (Headings)
- **Monospace**: Geist Mono

### Components

- Fully responsive design
- Mobile-first approach
- Accessible navigation
- Smooth animations and transitions

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/codepraycode/nextworks-org.git
   cd nextworks-org
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   NEXT_PUBLIC_SITE_URL=https://nextworks.com.ng
   NEXT_PUBLIC_GOOGLE_ANALYTICS=your_ga_id
   CONTACT_EMAIL=info@nextworks.com.ng
   ```

4. **Run the development server**

   ```bash
   pnpm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
pnpm run dev          # Start development server
pnpm run build        # Build for production
pnpm run start        # Start production server
pnpm run lint         # Run ESLint
pnpm run type-check   # Run TypeScript compiler
```

## 📱 Features

### 🎯 Core Website Features

- **Responsive Design** - Optimized for all devices
- **Fast Performance** - Built with Next.js 15 and optimized images
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessible** - WCAG compliant navigation and interactions
- **Modern UI/UX** - Clean, professional design matching company branding

### 🏢 Business Features

- **Service Showcases** - Detailed service pages with case studies
- **Client Portfolio** - Showcase of major clients (British Airways, Lufthansa, etc.)
- **Team Profiles** - Professional team member introductions
- **Contact Integration** - Multiple contact methods and forms
- **Privacy Compliance** - NDPR compliant privacy policy

### 🔧 Technical Features

- **Type Safety** - Full TypeScript implementation
- **Component Library** - Reusable, consistent UI components
- **Performance Monitoring** - Vercel analytics integration
- **Modern Styling** - Tailwind CSS 4 with CSS variables
- **Smooth Animations** - Framer Motion for interactive elements

## 🎨 Customization

### Updating Company Information

Edit `src/lib/constants.ts` to update:

- Company contact information
- Service offerings
- Team member details
- Client portfolio

### Modifying Styles

- Update CSS variables in `src/app/globals.css`
- Modify component styles using Tailwind classes
- Customize color scheme in Tailwind config

### Adding New Pages

1. Create new route directory in `app/`
2. Add `page.tsx` for the route
3. Update navigation in `components/layout/header.tsx`

## 📈 Performance

- **Lighthouse Score**: 95+
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and owned by NeXtworks Limited. All rights reserved.

## 🏢 About NeXtworks Limited

NeXtworks Limited is an indigenous technology company established to provide high-quality Information Technology services and Power solutions. With over 15 years of experience, we help organizations improve operational efficiency and profitability by aligning ICT infrastructure with business needs.

**Company Details:**

- **Name**: NeXtworks Limited
- **RC Number**: RC488002
- **Location**: 8 Kehinde Akamo, Off Michael Adekoya Road, Ilupeju Lagos
- **Contact**: +234 (0) 808 024 0366 | <info@nextworks.com.ng>

## 📞 Support

For technical support or questions about this website:

- **Email**: [info@nextworks.com.ng](mailto:info@nextworks.com.ng)
- **Phone**: +234 (0) 808 024 0366
- **Website**: [www.nextworks.com.ng](https://www.nextworks.com.ng)

---

**Built with ❤️ for NeXtworks Limited**
