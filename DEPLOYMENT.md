# Deployment Guide

This guide will help you deploy your portfolio website to various hosting platforms.

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended for beginners)

1. **Push to GitHub**: First, push your code to a GitHub repository
2. **Connect to Netlify**: 
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
3. **Deploy**: Netlify will automatically build and deploy your site
4. **Custom Domain**: You can add a custom domain in the site settings

### 2. Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow prompts**: Vercel will guide you through the deployment process

### 3. GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy**:
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages**: Go to your repository settings and enable GitHub Pages

## 🌐 Custom Domain Setup

### Netlify
1. Go to your site's domain settings
2. Click "Add custom domain"
3. Enter your domain name
4. Follow the DNS configuration instructions

### Vercel
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## 🔧 Environment Variables

If you need to add environment variables:

### Netlify
- Go to Site settings > Environment variables
- Add your variables

### Vercel
- Go to Project settings > Environment variables
- Add your variables

## 📱 Performance Optimization

After deployment, you can:

1. **Enable compression** (usually automatic on most platforms)
2. **Set up CDN** (automatic on Netlify/Vercel)
3. **Enable caching** (configure in your hosting platform)
4. **Monitor performance** using tools like Lighthouse

## 🚨 Troubleshooting

### Build Errors
- Check that all dependencies are installed
- Ensure Node.js version is compatible
- Verify Tailwind CSS configuration

### Deployment Issues
- Check build logs in your hosting platform
- Ensure repository is public (for free tiers)
- Verify build command and output directory

### Custom Domain Issues
- Check DNS configuration
- Ensure SSL certificate is provisioned
- Wait for DNS propagation (can take up to 48 hours)

## 📊 Analytics & Monitoring

Consider adding:
- Google Analytics
- Google Search Console
- Performance monitoring tools

## 🔒 Security

- Enable HTTPS (automatic on most platforms)
- Set security headers
- Regular dependency updates

---

For more detailed instructions, refer to the hosting platform's documentation.
