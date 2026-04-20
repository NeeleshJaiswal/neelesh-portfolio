# 🚀 Neelesh Jaiswal - Senior Java Developer Portfolio

A modern, responsive portfolio website showcasing the professional experience and expertise of Neelesh Jaiswal, a Senior Software Engineer specializing in fintech systems, microservices architecture, and enterprise Java development across global financial institutions.

## 🌟 Live Demo

- **Local Development**: [http://localhost:3001](http://localhost:3001)
- **Production**: [Deploy to your preferred platform](#deployment)

## 📋 Features

### 🎨 **Modern Design**
- Clean, professional UI with sophisticated Tailwind CSS design system
- Glassmorphism effects and subtle animations
- Fully responsive design (mobile-first approach)
- Professional color palette optimized for fintech branding
- Advanced typography using Inter + JetBrains Mono fonts

### 💼 **Professional Content**
- **Hero Section**: Compelling introduction with fintech focus
- **About**: Detailed professional narrative spanning 10+ years
- **Skills**: Comprehensive Java ecosystem and fintech technology stack
- **Experience**: Career progression through global companies (ING, Bridgestone, Northern Trust)
- **Projects**: 6 enterprise-level projects showcasing scalable system design
- **Contact**: Professional contact form with international presence

### 🔧 **Technical Features**
- Built with **React 18** and **TypeScript** for enterprise-grade development
- **Tailwind CSS** with custom configuration and professional animations
- Smooth scrolling navigation with active section highlighting
- SEO optimized for Amsterdam tech market and fintech sector
- Accessible design following international WCAG guidelines
- Performance optimized for global audience

### 📧 **Contact Integration**
- Working contact form with professional mailto integration
- Social media presence (LinkedIn, GitHub)
- Resume download functionality
- Amsterdam-based professional availability

## 🛠 Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Enterprise-grade type safety
- **Tailwind CSS** - Utility-first CSS framework with fintech-optimized design

### **Build Tools**
- **Create React App** - Zero-config React development setup
- **PostCSS** - CSS processing and optimization
- **ESLint** - Enterprise code quality standards

### **Design System**
- **Color Palette**: Professional blue gradient with fintech-inspired accents
- **Typography**: Inter (corporate headings) + JetBrains Mono (technical content)
- **Spacing**: 8pt grid system for enterprise consistency
- **Animations**: Subtle professional animations with performance focus

### **Professional Focus Areas**
- **Backend**: Java, Spring Boot, Microservices
- **Cloud**: AWS, Kubernetes, Docker
- **Databases**: PostgreSQL, MongoDB, Redis
- **Integration**: Kafka, REST APIs, GraphQL
- **Financial**: Trading systems, Payment processing, Banking APIs

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd neelesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:3001
   ```

### Available Scripts

```bash
# Development server
npm start

# Production build
npm run build

# Run tests
npm test

# Eject configuration (not recommended)
npm run eject
```

## 📁 Project Structure

```
neelesh-portfolio/
├── public/
│   ├── index.html              # Main HTML file
│   ├── Neelesh_Jaiswal_Resume.pdf # Resume download
│   └── assets/                 # Static assets
├── src/
│   ├── components/             # React components
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Hero.tsx           # Hero section
│   │   ├── About.tsx          # About section
│   │   ├── Skills.tsx         # Skills & tech stack
│   │   ├── Experience.tsx     # Work experience
│   │   ├── Projects.tsx       # Enterprise projects showcase
│   │   ├── Timeline.tsx       # Career timeline
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Site footer
│   ├── styles/
│   │   └── globals.css        # Global styles & Tailwind config
│   ├── App.tsx                # Main app component
│   └── index.tsx              # React entry point
├── tailwind.config.js         # Tailwind configuration
├── postcss.config.js          # PostCSS configuration
└── package.json               # Dependencies & scripts
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--primary-600: #2563eb    /* Professional blue */
--primary-700: #1d4ed8    /* Darker blue */

/* Accent Colors */
--accent-500: #06b6d4     /* Teal accent */
--accent-600: #0891b2     /* Darker teal */

/* Neutral Colors */
--neutral-900: #171717    /* Dark text */
--neutral-600: #525252    /* Medium gray */
--neutral-100: #f5f5f5    /* Light background */

/* Fintech Colors */
--success: #10b981       /* Trading green */
--warning: #f59e0b       /* Financial amber */
```

### Typography Scale
- **Display**: 48px (3rem) - Hero headings
- **Heading 1**: 36px (2.25rem) - Section titles
- **Heading 2**: 24px (1.5rem) - Subsections
- **Body**: 16px (1rem) - Regular text
- **Code**: 14px (0.875rem) - Technical content

### Spacing System
Based on 8pt grid: `8px, 16px, 24px, 32px, 40px, 48px, 64px, 80px`

## ⚙️ Customization

### Content Updates
1. **Personal Information**: Update contact details in `Contact.tsx` and `Footer.tsx`
2. **Professional Experience**: Modify experience and projects in respective components
3. **Resume**: Replace `public/Neelesh_Jaiswal_Resume.pdf` with updated resume
4. **Social Links**: Update LinkedIn and GitHub URLs throughout components
5. **Professional Memberships**: Update AJUG and UJUG affiliations

### Styling Customization
1. **Colors**: Modify `tailwind.config.js` for brand colors
2. **Fonts**: Update Google Fonts imports in `public/index.html`
3. **Animations**: Customize animations in `src/styles/globals.css`
4. **Layout**: Adjust component layouts for different content needs

### Adding New Sections
1. Create new component in `src/components/`
2. Import and add to `App.tsx`
3. Update navigation in `Header.tsx`
4. Style with Tailwind utilities following design system

## 🌐 Deployment

### Netlify (Recommended)
```bash
npm run build
# Deploy build folder to Netlify
```

### Vercel (Optimal for React)
```bash
npm install -g vercel
vercel
```

### AWS Amplify (Enterprise)
```bash
npm run build
# Deploy through AWS Amplify Console
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Add to package.json scripts:
# "homepage": "https://yourusername.github.io/neelesh-portfolio"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"
npm run deploy
```

## 🔧 Environment Configuration

### Development
```bash
# .env.local (optional)
REACT_APP_ANALYTICS_ID=your_analytics_id
REACT_APP_CONTACT_EMAIL=neelesh.jaiswal.dev@gmail.com
REACT_APP_LINKEDIN_ID=jaiswalneelesh
```

### Production Build Optimization
- Automatic code splitting and lazy loading
- CSS purging removes unused Tailwind styles
- Image optimization and compression
- Minified JavaScript and CSS bundles
- CDN-ready for global deployment

## 📊 Performance

### Lighthouse Scores (Target)
- **Performance**: 95+ 
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Enterprise Optimization Features
- Component lazy loading for faster initial paint
- Image optimization with next-gen formats
- CSS purging (unused Tailwind styles removed)
- Minified production bundles
- SEO optimization for Amsterdam tech market
- International accessibility compliance

## 💼 Professional Highlights

### **Current Focus Areas**
- **Fintech Systems**: Banking, trading, payment processing
- **Microservices**: Scalable enterprise architecture
- **Cloud Native**: AWS, Kubernetes, containerization
- **Data Integration**: Real-time processing, event streaming

### **Industry Experience**
- **Financial Services**: ING Bank, Northern Trust
- **Enterprise**: Bridgestone, global corporation systems
- **Geographic Expertise**: Netherlands, Europe, global markets

### **Technical Leadership**
- 10+ years enterprise Java development
- Microservices architecture and design
- Team leadership and mentoring
- Agile development methodologies

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/enterprise-feature`)
3. Commit changes (`git commit -m 'Add enterprise feature'`)
4. Push to branch (`git push origin feature/enterprise-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Modern fintech and enterprise developer portfolios
- **Icons**: Heroicons and custom SVG icons for professional appearance
- **Fonts**: Google Fonts (Inter, JetBrains Mono)
- **Colors**: Professional palette optimized for fintech sector

## 📧 Contact

**Neelesh Jaiswal**
- Email: [neelesh.jaiswal.dev@gmail.com](mailto:neelesh.jaiswal.dev@gmail.com)
- LinkedIn: [linkedin.com/in/jaiswalneelesh](https://linkedin.com/in/jaiswalneelesh)
- GitHub: [github.com/neelesh-jaiswal](https://github.com/neelesh-jaiswal)
- Location: Amsterdam, Netherlands
- Professional Memberships: AJUG (Amsterdam Java User Group), UJUG (Utrecht Java User Group)

### **Professional Summary**
*Senior Software Engineer with 10+ years building scalable financial systems for global institutions like ING, Bridgestone, and Northern Trust. Expert in Java ecosystem, microservices architecture, and cloud-native development in Amsterdam's fintech landscape.*

---

**Built with ❤️ by GitHub Copilot CLI**

*Enterprise-grade portfolio showcasing Java expertise, fintech systems, and microservices architecture for the global financial technology sector.*