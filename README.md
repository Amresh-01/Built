# ⚡ Built - Full-Stack Website Builder

**A powerful Full stack website builder inspired by Bolt.new - Create professional websites visually without code**

## 🚀 What It Does

Built is a comprehensive website builder that allows users to create professional websites through an intuitive visual interface. Similar to Webflow or Bolt.new, but built entirely from scratch with modern web technologies.

**Key Capabilities:**
- Visual drag-and-drop website editor
- Real-time preview and editing
- Component-based architecture
- Responsive design system
- User project management
- Export functionality for generated websites

## ⚡ Core Features

### 🎨 Visual Website Editor
- **Drag-and-Drop Interface** - Intuitive visual builder for creating layouts without code
- **Live Preview System** - Real-time rendering as you design and edit
- **Component Library** - Pre-built UI components (headers, forms, galleries, cards, etc.)
- **Visual Property Panel** - Click any element to modify colors, typography, spacing, and styles
- **Responsive Breakpoints** - Design for desktop, tablet, and mobile with visual controls
- **Layer Management** - Organize and manage website elements with precision

### 💾 Full-Stack Architecture
- **Real-Time Database** - Convex backend for instant data synchronization across sessions
- **User Authentication** - Complete auth system with user profiles and project management  
- **Project Persistence** - Save, load, and manage multiple website projects
- **File Management** - Handle image uploads and media assets
- **Export System** - Generate clean, production-ready HTML/CSS code

### 🚀 Production-Ready Features
- **SEO Optimization** - Meta tags, structured data, and search engine friendly output
- **Performance Optimized** - Code splitting, lazy loading, and optimized bundle sizes
- **Mobile-First Design** - Responsive layouts that work across all screen sizes
- **Accessibility** - WCAG-compliant components with proper semantic markup
- **Dark/Light Themes** - Built-in theme switching capability

## 🛠️ Tech Stack & Implementation

### Frontend Architecture
| Technology | Purpose | Implementation Details |
|------------|---------|----------------------|
| **Next.js 14** | React Framework | App Router, Server Components, Image Optimization, Streaming |
| **TypeScript** | Type Safety | Strict typing throughout, Interface-driven development |
| **Tailwind CSS** | Styling System | Utility-first CSS, Responsive design, Custom design tokens |
| **shadcn/ui** | Component Library | Accessible, customizable UI components with consistent design |

### Backend & Database
| Technology | Purpose | Key Features |
|------------|---------|-------------|
| **Convex** | Real-time Database | WebSocket synchronization, Serverless functions, Schema validation |
| **Authentication** | User Management | Secure auth flows, Session handling, Protected routes |
| **File Storage** | Media Handling | Cloud-based asset storage and optimization |

### Development Tools
- **ESLint & Prettier** - Code quality and consistent formatting
- **GitHub Actions** - Automated CI/CD pipeline
- **Vercel Deployment** - Production hosting with automatic deployments

## 📁 Project Architecture

```
Built/
├── app/                    # Next.js 14 App Router
│   ├── globals.css         # Global styles and CSS variables
│   ├── layout.tsx          # Root layout with providers
│   └── (routes)/           # Application pages
├── components/             # React component library
│   ├── ui/                # shadcn/ui base components  
│   ├── editor/            # Website builder interface
│   ├── layout/            # Layout components
│   └── custom/            # Project-specific components
├── context/               # React Context for state management
├── convex/                # Convex backend configuration
│   ├── schema.ts          # Database schemas and types
│   └── functions/         # Server functions and APIs
├── lib/                   # Utility functions and helpers
├── data/                  # Static configurations and constants
└── public/               # Static assets and media
```

## 🏃‍♂️ Quick Start

```bash
# Clone and setup the project
git clone https://github.com/Amresh-01/Built.git
cd Built
npm install

# Configure environment variables
cp .env.example .env.local
# Add your Convex configuration

# Initialize Convex backend
npx convex dev

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 🌟 Technical Highlights

### Complex Problem Solving
- **Advanced State Management** - Complex UI state for drag-and-drop with precise positioning
- **Real-Time Synchronization** - WebSocket-based live collaboration and data sync
- **Component Architecture** - Modular, reusable component system with dynamic rendering
- **Performance Optimization** - Efficient rendering with React optimization patterns

### Modern Development Practices
- **Type-Safe Development** - Comprehensive TypeScript integration throughout the stack
- **Component-Driven Design** - Systematic approach using shadcn/ui design system
- **Server-Side Rendering** - Next.js 14 App Router with React Server Components
- **Database Design** - Efficient schema modeling for complex nested component structures

### Production Considerations
- **Scalable Architecture** - Code organized for maintainability and feature expansion
- **User Experience Focus** - Intuitive interface that abstracts technical complexity
- **Security Best Practices** - Secure authentication and data handling
- **Deployment Ready** - Configured for production deployment with proper optimizations

## Live Demo Currently Under Maintenance  
We're working on improvements—please check back soon!

## 📞 Contact

Built by [Amresh-01](https://github.com/Amresh-01) | [LinkedIn](https://www.linkedin.com/in/amresh-chaurasiya-/)

---
*This project demonstrates advanced full-stack development skills using the modern React ecosystem and showcases the ability to build complex, production-ready applications with intuitive user experiences.*
