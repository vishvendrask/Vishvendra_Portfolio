"use client"

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, MessageCircle } from 'lucide-react'

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! I will get back to you soon.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vishvendrask@gmail.com',
      link: 'mailto:vishvendrask@gmail.com',
      color: 'neon-blue'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 98765 43210',
      link: 'tel:+919876543210',
      color: 'neon-green'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Jaipur, Rajasthan, India',
      link: '#',
      color: 'neon-purple'
    }
  ]

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
    }
  ]

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-primary via-background-secondary to-background-tertiary" />
      <div className="absolute inset-0 matrix-bg opacity-5" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-32 left-32 w-40 h-40 bg-neon-blue/10 rounded-full blur-2xl"
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-32 w-32 h-32 bg-neon-purple/10 rounded-full blur-xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Let&apos;s <span className="text-gradient">Connect</span>
          </motion.h2>
          <motion.p
            className="text-xl text-text-secondary max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Ready to start a project or just want to chat? I&apos;d love to hear from you!
            Let&apos;s discuss how we can work together to bring your ideas to life.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="glass-card"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">Send Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-glass-dark dark:bg-glass-white/20 border border-glass-border dark:border-glass-borderDark rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-glass-dark dark:bg-glass-white/20 border border-glass-border dark:border-glass-borderDark rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-glass-dark dark:bg-glass-white/20 border border-glass-border dark:border-glass-borderDark rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-glass-dark dark:bg-glass-white/20 border border-glass-border dark:border-glass-borderDark rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="glass-card group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 1.0 + index * 0.1 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                  onClick={() => window.open(info.link, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${info.color} to-${info.color}/60 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-text-primary mb-1">
                        {info.title}
                      </h4>
                      <p className="text-text-secondary group-hover:text-neon-blue transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              className="glass-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              <h4 className="text-xl font-bold text-text-primary mb-4">Connect With Me</h4>
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

            {/* Availability Status */}
            <motion.div
              className="glass-card text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.6 }}
            >
              <div className="flex items-center justify-center gap-2 mb-3">
                <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
                <span className="text-neon-green font-semibold">Available for new projects</span>
              </div>
              <p className="text-text-secondary text-sm">
                I&apos;m currently accepting new clients and opportunities.
                <br />
                Response time: Usually within 24 hours
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.8 }}
        >
          <div className="glass-card inline-block max-w-4xl">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-text-secondary mb-6">
              Whether you have a specific project in mind or just want to explore possibilities,
              I&apos;m here to help. Let&apos;s discuss your ideas and see how we can work together
              to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:vishvendrask@gmail.com" className="btn-primary">
                <Mail className="w-5 h-5" />
                Send Email
              </a>
              <a href="https://linkedin.com/in/vishvendrask" target="_blank" rel="noopener noreferrer" className="btn-neon">
                <Linkedin className="w-5 h-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
