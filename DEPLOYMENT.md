# 🚀 Deployment Guide

This guide covers deploying your Next.js portfolio to various platforms with step-by-step instructions.

## 📋 Prerequisites

Before deploying, ensure you have:

- ✅ **Node.js 18+** installed
- ✅ **Git** repository set up
- ✅ **Portfolio built successfully** (`npm run build`)
- ✅ **Environment variables** configured (if needed)

## 🌐 Deployment Options

### 1. **Vercel (Recommended) ⭐**

Vercel is the creators of Next.js and provides the best integration.

#### **Automatic Deployment**
1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub/GitLab/Bitbucket
   - Click "New Project"
   - Import your portfolio repository

2. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (or your project folder)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

3. **Environment Variables** (if needed)
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy
   - Your site will be live at `https://yourproject.vercel.app`

#### **Custom Domain Setup**
1. **Add Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

2. **DNS Configuration**
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

#### **Automatic Updates**
- Every push to `main` branch triggers automatic deployment
- Preview deployments for pull requests
- Branch deployments for testing

---

### 2. **Netlify**

Great alternative with excellent performance and features.

#### **Deployment Steps**
1. **Build Locally**
   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in and click "New site from Git"
   - Connect your repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Environment Variables**
   ```
   NODE_VERSION=18
   NPM_VERSION=9
   ```

#### **Static Export (Optional)**
If you prefer static hosting:

1. **Update `next.config.js`**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **Build and Deploy**
   ```bash
   npm run build
   # Deploy the 'out' folder
   ```

---

### 3. **AWS Amplify**

Full-stack deployment with AWS integration.

#### **Setup Process**
1. **AWS Console**
   - Go to AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your Git repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
   ```

3. **Environment Variables**
   ```
   NODE_ENV=production
   NODE_VERSION=18
   ```

---

### 4. **DigitalOcean App Platform**

Scalable hosting with global CDN.

#### **Deployment Steps**
1. **Create App**
   - Go to DigitalOcean App Platform
   - Click "Create App"
   - Connect your Git repository

2. **Configure App**
   - **Source**: GitHub repository
   - **Branch**: main
   - **Build Command**: `npm run build`
   - **Run Command**: `npm start`

3. **Resources**
   - **Plan**: Basic ($5/month)
   - **Instance Count**: 1
   - **Instance Size**: Basic

---

### 5. **GitHub Pages**

Free hosting for static sites.

#### **Static Export Setup**
1. **Update `next.config.js`**
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     basePath: '/your-repo-name',
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **GitHub Actions Workflow**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

3. **Repository Settings**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

---

## 🔧 Configuration Files

### **`next.config.js`**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for static hosting
  // output: 'export',
  
  // Base path for GitHub Pages
  // basePath: '/your-repo-name',
  
  // Trailing slash for static hosting
  // trailingSlash: true,
  
  // Image optimization
  images: {
    domains: ['your-domain.com'],
    // unoptimized: true, // For static export
  },
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Headers for security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### **`.env.local`**
```bash
# Site configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=Vishvendra Portfolio

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Contact form (optional)
NEXT_PUBLIC_CONTACT_EMAIL=vishvendrask@gmail.com
```

---

## 📱 Performance Optimization

### **Build Optimization**
1. **Bundle Analysis**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   ```

2. **Update `next.config.js`**
   ```javascript
   const withBundleAnalyzer = require('@next/bundle-analyzer')({
     enabled: process.env.ANALYZE === 'true',
   })
   
   module.exports = withBundleAnalyzer(nextConfig)
   ```

3. **Analyze Bundle**
   ```bash
   ANALYZE=true npm run build
   ```

### **Image Optimization**
1. **Use Next.js Image Component**
   ```jsx
   import Image from 'next/image'
   
   <Image
     src="/hero-image.jpg"
     alt="Hero"
     width={1200}
     height={600}
     priority
   />
   ```

2. **WebP Format**
   - Convert images to WebP for better compression
   - Use tools like [Squoosh](https://squoosh.app/)

### **Lazy Loading**
1. **Component Lazy Loading**
   ```jsx
   import dynamic from 'next/dynamic'
   
   const ChatBot = dynamic(() => import('./ChatBot'), {
     loading: () => <div>Loading...</div>,
     ssr: false
   })
   ```

2. **Intersection Observer**
   - Use Framer Motion's `useInView` for scroll-based loading
   - Implement progressive image loading

---

## 🔒 Security & SEO

### **Security Headers**
```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
        {
          key: 'Permissions-Policy',
          value: 'camera=(), microphone=(), geolocation=()',
        },
      ],
    },
  ]
}
```

### **SEO Optimization**
1. **Meta Tags** (already configured in `layout.tsx`)
2. **Sitemap Generation**
3. **Robots.txt**
4. **Structured Data**

### **Analytics Integration**
1. **Google Analytics**
   ```jsx
   // components/GoogleAnalytics.tsx
   import Script from 'next/script'
   
   export default function GoogleAnalytics() {
     return (
       <>
         <Script
           src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
           strategy="afterInteractive"
         />
         <Script id="google-analytics" strategy="afterInteractive">
           {`
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
           `}
         </Script>
       </>
     )
   }
   ```

2. **Google Search Console**
   - Verify ownership
   - Submit sitemap
   - Monitor performance

---

## 🚨 Troubleshooting

### **Common Issues**

#### **Build Failures**
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

#### **Environment Variables**
- Ensure `.env.local` is in project root
- Restart development server after changes
- Check variable names match exactly

#### **Image Optimization**
- Use relative paths for local images
- Configure domains in `next.config.js`
- Check image file permissions

#### **3D Performance**
- Reduce polygon count for mobile
- Implement level-of-detail (LOD)
- Use `useFrame` sparingly

### **Performance Issues**
1. **Bundle Size**
   - Analyze with bundle analyzer
   - Remove unused dependencies
   - Implement code splitting

2. **Image Loading**
   - Use appropriate image formats
   - Implement lazy loading
   - Optimize image dimensions

3. **3D Rendering**
   - Reduce scene complexity
   - Implement frustum culling
   - Use instanced rendering for repeated objects

---

## 📊 Monitoring & Analytics

### **Performance Monitoring**
1. **Core Web Vitals**
   - Largest Contentful Paint (LCP)
   - First Input Delay (FID)
   - Cumulative Layout Shift (CLS)

2. **Tools**
   - Google PageSpeed Insights
   - Lighthouse
   - WebPageTest
   - Vercel Analytics

### **Error Tracking**
1. **Sentry Integration**
   ```bash
   npm install @sentry/nextjs
   ```

2. **Configuration**
   ```javascript
   // sentry.client.config.js
   Sentry.init({
     dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
     tracesSampleRate: 1.0,
   })
   ```

---

## 🎯 Best Practices

### **Development**
1. **Code Quality**
   - Use TypeScript strictly
   - Follow ESLint rules
   - Write meaningful commit messages

2. **Testing**
   - Unit tests for utilities
   - Integration tests for components
   - E2E tests for critical paths

### **Deployment**
1. **Environment Management**
   - Use environment variables
   - Separate configs for dev/staging/prod
   - Secure sensitive information

2. **CI/CD Pipeline**
   - Automated testing
   - Build verification
   - Deployment approval process

3. **Monitoring**
   - Performance metrics
   - Error tracking
   - User analytics

---

## 📚 Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [Performance Best Practices](https://web.dev/performance/)

---

**Happy Deploying! 🚀**

For any deployment issues, check the troubleshooting section or reach out to the community.
