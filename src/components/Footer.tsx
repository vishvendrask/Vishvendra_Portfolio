"use client"

import { motion } from 'framer-motion'
import { Linkedin, Github, Globe, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/vishvendrask',
      color: 'neon-blue'
    },
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/vishvendrask',
      color: 'neon-purple'
    },
    {
      icon: Globe,
      name: 'Website',
      url: 'https://vishvendrask.dev',
      color: 'neon-green'
    },
    {
      icon: Mail,
      name: 'Email',
      url: 'mailto:vishvendrask@gmail.com',
      color: 'neon-pink'
    }
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' }
  ]

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 matrix-bg opacity-5" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-neon-blue/10 rounded-full blur-xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 bg-neon-purple/10 rounded-full blur-lg"
          animate={{
            x: [0, -30, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gradient mb-3">VS</h3>
                <p className="text-xl font-semibold text-text-primary mb-2">
                  Vishvendra Singh Khangarot
                </p>
                <p className="text-text-secondary">
                  Senior Full-Stack Developer passionate about creating innovative digital solutions
                  that drive business growth and user engagement.
                </p>
              </div>

              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gradient-to-br from-${social.color} to-${social.color}/60 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300`}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-text-secondary hover:text-neon-blue transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-text-primary mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Mail className="w-4 h-4 text-neon-blue" />
                  <a href="mailto:vishvendrask@gmail.com" className="hover:text-neon-blue transition-colors">
                    vishvendrask@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Globe className="w-4 h-4 text-neon-green" />
                  <span>Jaipur, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse" />
                  <span>Available for new projects</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border dark:border-glass-borderDark" />

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <p className="text-text-secondary">
                © {currentYear} Vishvendra Singh Khangarot. All rights reserved.
              </p>
              <p className="text-text-secondary text-sm mt-1">
                Built with Next.js, React, and Tailwind CSS
              </p>
            </motion.div>

            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Back to Top Button for Mobile */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 md:hidden z-40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  )
}

export default Footer
