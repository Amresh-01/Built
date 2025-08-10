# Built 🚀

[![Stars](https://img.shields.io/github/stars/Amresh-01/Built)](https://github.com/Amresh-01/Built/stargazers)
[![Forks](https://img.shields.io/github/forks/Amresh-01/Built)](https://github.com/Amresh-01/Built/forks)
[![License](https://img.shields.io/github/license/Amresh-01/Built)](https://github.com/Amresh-01/Built/blob/master/LICENSE)

A responsive **Bolt-like website builder** that empowers users to create stunning websites with ease. Built with modern web technologies for optimal performance and user experience.

## ✨ Features

- 🎨 **Intuitive Visual Editor** - Drag-and-drop interface for seamless website building
- 📱 **Fully Responsive** - Creates websites that look perfect on all devices
- ⚡ **Real-time Preview** - See changes instantly as you build
- 🔧 **Component Library** - Pre-built, customizable components
- 💾 **Database Integration** - Connected with Convex for data persistence
- 🚀 **Fast Performance** - Built with Next.js for optimal speed
- 🎯 **Modern UI/UX** - Clean, professional interface powered by shadcn/ui

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Database**: Convex (Real-time backend)
- **Build Tool**: Next.js with App Router
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
Built/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── context/            # React Context providers
├── convex/             # Convex backend configuration
├── data/               # Static data and configurations
├── lib/                # Utility functions and helpers
├── public/             # Static assets
├── components.json     # shadcn/ui configuration
├── next.config.mjs     # Next.js configuration
└── package.json        # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Amresh-01/Built.git
   cd Built
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Add your Convex configuration and other required environment variables.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔧 Configuration

### Convex Setup

This project uses Convex as its backend. To set up Convex:

1. Install Convex CLI: `npm install -g convex`
2. Initialize Convex: `npx convex dev`
3. Follow the setup instructions in your terminal

### Environment Variables

Create a `.env.local` file with the following variables:

```env
CONVEX_DEPLOYMENT=your_convex_deployment_url
NEXT_PUBLIC_CONVEX_URL=your_public_convex_url
```

## 📚 Usage

### Building Websites

1. **Start with Templates** - Choose from pre-designed templates
2. **Drag & Drop Components** - Add elements like headers, sections, buttons, and forms
3. **Customize Styling** - Modify colors, fonts, spacing, and layouts
4. **Real-time Preview** - See changes instantly in the preview panel
5. **Publish** - Deploy your website with a single click

### Component System

The project includes a comprehensive component library:

- **Layout Components**: Headers, footers, sections, containers
- **Content Components**: Text blocks, images, videos, galleries
- **Interactive Components**: Forms, buttons, modals, carousels
- **Navigation Components**: Menus, breadcrumbs, pagination

## 🎨 Customization

### Adding New Components

1. Create component in `/components` directory
2. Export from `/components/index.js`
3. Add to component library in the editor

### Styling Guidelines

- Use Tailwind CSS for styling
- Follow the existing component patterns
- Maintain responsiveness across all components
- Use shadcn/ui components where applicable

## 🚧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run convex` - Start Convex development

### Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Support

- ⭐ Star this repository if you find it helpful
- 🐛 Report issues on the [Issues page](https://github.com/Amresh-01/Built/issues)
- 💬 Join our discussions in the [Discussions tab](https://github.com/Amresh-01/Built/discussions)

## 🙏 Acknowledgments

- Thanks to the Next.js team for the amazing framework
- shadcn/ui for the beautiful component library
- Convex for the real-time backend solution
- The open-source community for inspiration and support

---

**Built with ❤️ by [Amresh-01](https://github.com/Amresh-01)**

*Creating websites has never been this easy!*
