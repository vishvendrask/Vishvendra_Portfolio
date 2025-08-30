# Vishvendra Singh Khangarot - Portfolio

A modern, futuristic portfolio website built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, and React Three Fiber. This portfolio showcases professional experience, skills, projects, and provides an immersive user experience with cutting-edge web technologies.

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism** - Beautiful glass-like UI elements with backdrop blur effects
- **Neon Accents** - Vibrant neon colors for a futuristic aesthetic
- **Apple-inspired Design** - Clean, premium interface with smooth animations
- **Responsive Layout** - Mobile-first design that works on all devices

### 🚀 **Interactive Elements**
- **3D Graphics** - React Three Fiber integration for immersive 3D scenes
- **Scroll-based Animations** - Framer Motion animations triggered by scroll position
- **Micro-interactions** - Smooth hover effects, transitions, and animations
- **AI Chatbot** - Interactive AI assistant for portfolio information

### 📱 **Sections**
- **Hero Section** - Apple-inspired design with 3D elements and scroll animations
- **About** - Liquid glass cards with search functionality
- **Skills** - Neon glowing skill cards with proficiency indicators
- **Experience** - Interactive timeline with expandable details
- **Projects** - Detailed project showcase with modal views
- **Resume** - Elegant, minimalist one-scroll resume
- **Contact** - Modern contact form with social links
- **Footer** - Comprehensive footer with navigation and social links

### 🎭 **Animations & Effects**
- **Intro Loader** - Typewriter effect with loading animations
- **Matrix Background** - Subtle animated background patterns
- **Floating Elements** - Animated floating orbs and shapes
- **Cursor Effects** - Interactive cursor animations
- **Page Transitions** - Smooth page loading and transitions

## 🛠️ Tech Stack

### **Frontend Framework**
- **Next.js 15** - React framework with App Router
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development

### **Styling & Design**
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **Custom Animations** - Tailwind-extended animations and keyframes

### **3D & Graphics**
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber
- **Three.js** - 3D graphics library

### **Animations & Interactions**
- **Framer Motion** - Production-ready motion library
- **Custom Hooks** - Scroll-based animations and interactions
- **CSS Animations** - Advanced CSS keyframes and transitions

### **Development Tools**
- **ESLint** - Code quality and consistency
- **TypeScript** - Static type checking
- **Hot Reload** - Fast development experience

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vishvendrask/portfolio-nextjs.git
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- **`npm run dev`** - Start development server
- **`npm run build`** - Build for production
- **`npm run start`** - Start production server
- **`npm run lint`** - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page component
├── components/             # React components
│   ├── IntroLoader.tsx    # Loading animation component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section with 3D elements
│   ├── About.tsx          # About section with glass cards
│   ├── Skills.tsx         # Skills showcase
│   ├── Experience.tsx     # Work experience timeline
│   ├── Projects.tsx       # Project portfolio
│   ├── Resume.tsx         # Professional resume
│   ├── Contact.tsx        # Contact form and info
│   ├── Footer.tsx         # Site footer
│   ├── ChatBot.tsx        # AI assistant chatbot
│   └── theme-provider.tsx # Dark/light mode provider
└── lib/                   # Utility functions and types
```

## 🎨 Customization

### **Colors & Themes**
The portfolio uses a custom color palette defined in `tailwind.config.ts`:

- **Primary Colors**: Neon blue, purple, green, pink, yellow
- **Background Colors**: Dark theme with glass effects
- **Text Colors**: High contrast for readability
- **Glass Effects**: Semi-transparent backgrounds with blur

### **Animations**
Custom animations are defined in the Tailwind config:

- **Fade effects** - Smooth opacity transitions
- **Slide animations** - Directional movement
- **Scale effects** - Size transformations
- **Glow effects** - Neon lighting
- **Matrix background** - Animated patterns

### **Components**
Each component is modular and can be easily customized:

- **Props interface** - TypeScript interfaces for component props
- **Animation variants** - Framer Motion animation variants
- **Responsive design** - Mobile-first approach with breakpoints
- **Accessibility** - ARIA labels and keyboard navigation

## 🌐 Deployment

### **Vercel (Recommended)**
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js and deploy
3. Custom domain can be added in Vercel dashboard

### **Netlify**
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify
3. Configure build settings in Netlify dashboard

### **Other Platforms**
- **AWS Amplify** - Full-stack deployment
- **DigitalOcean App Platform** - Scalable hosting
- **Heroku** - Traditional hosting platform

## 📱 Performance & SEO

### **Performance Optimizations**
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic code splitting by routes
- **Lazy Loading** - Components loaded on demand
- **Bundle Analysis** - Webpack bundle analyzer integration

### **SEO Features**
- **Meta Tags** - Comprehensive meta tag configuration
- **Open Graph** - Social media sharing optimization
- **Structured Data** - JSON-LD schema markup
- **Sitemap** - Automatic sitemap generation
- **Robots.txt** - Search engine crawling configuration

## 🔧 Configuration

### **Tailwind CSS**
Custom configuration in `tailwind.config.ts`:

```typescript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom color palette
        'neon-blue': '#00d4ff',
        'neon-purple': '#a855f7',
        // ... more colors
      },
      animation: {
        // Custom animations
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        // ... more animations
      }
    }
  }
}
```

### **Framer Motion**
Animation variants and transitions:

```typescript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
}
```

## 🎯 Key Features Explained

### **3D Integration**
The portfolio uses React Three Fiber for 3D elements:

- **Hero Section** - Floating wireframe sphere and boxes
- **Background Elements** - Subtle 3D shapes for depth
- **Interactive 3D** - Orbit controls and animations

### **AI Chatbot**
Built-in AI assistant with:

- **Natural Language Processing** - Understands user questions
- **Portfolio Information** - Provides details about skills, experience, projects
- **Interactive Interface** - Chat-like experience with typing indicators
- **Responsive Design** - Works on all device sizes

### **Glassmorphism Design**
Modern UI design trend featuring:

- **Backdrop Blur** - Frosted glass effect
- **Semi-transparent Backgrounds** - Layered depth
- **Subtle Borders** - Minimal border definitions
- **Shadow Effects** - Soft, realistic shadows

## 🚀 Future Enhancements

### **Planned Features**
- **Blog Integration** - Technical blog with MDX
- **Portfolio Analytics** - Visitor tracking and insights
- **Multi-language Support** - Internationalization
- **Advanced 3D Scenes** - More complex 3D interactions
- **Performance Monitoring** - Real-time performance metrics

### **Technical Improvements**
- **PWA Support** - Progressive Web App features
- **Service Workers** - Offline functionality
- **Advanced Caching** - Intelligent content caching
- **Micro-frontends** - Modular architecture

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### **Development Guidelines**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### **Code Style**
- Use TypeScript for type safety
- Follow ESLint configuration
- Write meaningful commit messages
- Include JSDoc comments for complex functions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - Amazing React framework
- **Framer Motion** - Smooth animation library
- **React Three Fiber** - 3D graphics integration
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide Icons** - Beautiful icon library

## 📞 Contact

- **Email**: vishvendrask@gmail.com
- **LinkedIn**: [linkedin.com/in/vishvendrask](https://linkedin.com/in/vishvendrask)
- **GitHub**: [github.com/vishvendrask](https://github.com/vishvendrask)
- **Portfolio**: [vishvendrask.dev](https://vishvendrask.dev)

---

**Built with ❤️ using Next.js, React, and modern web technologies**
