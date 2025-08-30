# Vishvendra Singh Khangarot - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This portfolio showcases my professional experience, skills, projects, and provides a way for potential clients and employers to get in touch.

## 🚀 Features

- **Modern Design**: Clean, professional design inspired by modern portfolio websites
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion animations and CSS transitions
- **SEO Optimized**: Meta tags and structured content for better search engine visibility
- **Performance**: Optimized for fast loading and smooth user experience
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📱 Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About**: Professional summary and social links
3. **Skills**: Technical skills organized by category
4. **Experience**: Work history with detailed project information
5. **Projects**: Featured projects with descriptions and tech stacks
6. **Contact**: Contact form and contact information
7. **Footer**: Additional links and information

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd vish-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This creates a `build` folder with the production-ready files.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  'colorfull': '#6366f1',  // Primary brand color
  'white-1': '#fafafa',    // Light backgrounds
  'white-2': '#f5f5f5',    // Secondary backgrounds
  'white-3': '#e5e5e5',    // Borders
}
```

### Content
Update the content in each component file to match your information:
- Personal details in `Hero.tsx` and `About.tsx`
- Work experience in `Experience.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`
- Contact information in `Contact.tsx`

### Styling
Modify the Tailwind CSS classes in each component to adjust the design and layout.

## 📧 Contact Form

The contact form is currently set up to log form data to the console. To make it functional, you can:

1. **Use Formspree**: Sign up at [formspree.io](https://formspree.io) and update the form action
2. **Use Netlify Forms**: Deploy to Netlify and add the `netlify` attribute to the form
3. **Build a backend**: Create your own API endpoint to handle form submissions

## 🌐 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Deploy automatically on push

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

### GitHub Pages
1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly

## 🔧 Performance

- Optimized images and assets
- Lazy loading for components
- Efficient CSS with Tailwind
- Minimal JavaScript bundle

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: vishvendrask@gmail.com
- **LinkedIn**: [vishvendrask](https://www.linkedin.com/in/vishvendrask/)
- **GitHub**: [vishvendrask](https://github.com/vishvendrask)

---

Made with ❤️ by Vishvendra Singh Khangarot
