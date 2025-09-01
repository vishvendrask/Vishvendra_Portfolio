"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, ChevronUp, ChevronDown } from 'lucide-react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant. I can help you learn more about Vishvendra's skills, experience, and projects. What would you like to know?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue.trim(),
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(inputValue.trim())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 2000) // Random delay between 1-3 seconds
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes('skill') || input.includes('technology') || input.includes('tech')) {
      return "Vishvendra is proficient in React, Angular, Node.js, MongoDB, React Native, and many more technologies. He has 7+ years of experience across frontend, backend, mobile, and cloud development. Would you like to know about a specific technology?"
    }
    
    if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      return "Vishvendra has worked at IBM as a Senior Full-Stack Developer, DBS Bank, Tech Solutions Inc., and StartupXYZ. He has 7+ years of experience delivering 100+ projects. Would you like to know about his specific roles or achievements?"
    }
    
    if (input.includes('project') || input.includes('portfolio') || input.includes('work')) {
      return "Some of his notable projects include Google Test Data Automation Platform, DBS Digital Banking Platform, E-commerce Platform, and Food Delivery Mobile App. Each project demonstrates different technical skills and business impact. Which project interests you most?"
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      return "You can reach Vishvendra at vishvendrask@gmail.com, on LinkedIn at linkedin.com/in/vishvendrask, or through the contact form on this website. He's currently available for new projects and responds within 24 hours."
    }
    
    if (input.includes('resume') || input.includes('cv') || input.includes('download')) {
      return "You can download Vishvendra's resume from the Resume section of this website. It includes his complete work history, education, certifications, and key projects."
    }
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return "Hello! I'm here to help you learn more about Vishvendra Singh Khangarot. Feel free to ask me about his skills, experience, projects, or anything else!"
    }
    
    if (input.includes('education') || input.includes('degree') || input.includes('university')) {
      return "Vishvendra has a Bachelor of Technology in Computer Science from Rajasthan Technical University (2013-2017) with a GPA of 8.5/10. He also holds certifications in AWS, Google Cloud, and MongoDB."
    }
    
    if (input.includes('location') || input.includes('where') || input.includes('city')) {
      return "Vishvendra is based in Jaipur, Rajasthan, India, but he's available for remote work worldwide. He has experience working with international clients and teams."
    }
    
    if (input.includes('rate') || input.includes('price') || input.includes('cost')) {
      return "Vishvendra's rates vary based on project complexity and scope. For freelance projects, he typically charges $50-80/hour. He's open to discussing project-based pricing for larger engagements."
    }
    
    if (input.includes('availability') || input.includes('available') || input.includes('free')) {
      return "Yes, Vishvendra is currently available for new projects! He can work on full-time positions, freelance projects, or consulting engagements. He's flexible with project duration and can work remotely."
    }
    
    return "That's an interesting question! While I can provide general information about Vishvendra's background, skills, and experience, for specific technical details or project discussions, I'd recommend reaching out to him directly through the contact form or email."
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 left-6 w-80 h-96 chat-window rounded-2xl shadow-2xl z-50 flex flex-col"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: "spring" }}
          >
            {/* Chat Header */}
            <div className="flex items-center justify-between p-4 border-b border-glass-border dark:border-glass-borderDark">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">AI Assistant</h3>
                  <p className="text-xs text-text-secondary">Ask me anything!</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMinimize}
                  className="p-1 hover:bg-glass-dark dark:hover:bg-glass-white/20 rounded-lg transition-colors"
                >
                  {isMinimized ? (
                    <ChevronUp className="w-4 h-4 text-text-secondary" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-text-secondary" />
                  )}
                </button>
                <button
                  onClick={toggleChat}
                  className="p-1 hover:bg-glass-dark dark:hover:bg-glass-white/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-text-secondary" />
                </button>
              </div>
            </div>

            {/* Chat Messages */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.sender === 'user'
                            ? 'bg-neon-blue text-white rounded-br-md'
                            : 'chat-message text-theme-primary rounded-bl-md'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      className="flex justify-start"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="chat-message text-theme-primary rounded-2xl rounded-bl-md p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-text-secondary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-glass-border dark:border-glass-borderDark">
                  <div className="flex gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2 chat-input text-theme-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-neon-blue focus:border-transparent transition-all duration-300"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim()}
                      className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
