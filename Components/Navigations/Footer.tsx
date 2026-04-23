"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative py-16 bg-gradient-to-b from-cyan-600/30 to-black border-t border-white/10 overflow-hidden">
      {/* Subtle bg animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl text-white font-bold">
              SwiftCoders
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Building fast, modern websites that scale with your business.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-3"
          >
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2">Home</Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2">About</Link>
              <Link href="/projects" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2">Our Work</Link>
              <Link href="/blog" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2">Blog</Link>
              <Link href="/contact" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2">Contact</Link>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-3"
          >
            <h4 className="text-lg font-bold text-white mb-4">Services</h4>
            <div className="space-y-2">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2">
                Web Development
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2">
                UI/UX Design
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors block hover:translate-x-2">
                Landing Pages
              </Link>
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-bold text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-400 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hello@swiftcoders.com
              </p>
              <div className="flex gap-3 pt-2">
                {/* Instagram */}
                <motion.a href="#" className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110" whileHover={{ rotate: 10 }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                {/* LinkedIn */}
                <motion.a href="#" className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110" whileHover={{ rotate: -10 }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </motion.a>
                {/* X (Twitter) */}
                <motion.a href="#" className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110" whileHover={{ rotate: 10 }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
                {/* TikTok */}
                <motion.a href="#" className="w-10 h-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center hover:bg-white/20 transition-all hover:scale-110" whileHover={{ rotate: -10 }}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm"
          >
            © {new Date().getFullYear()} SwiftCoders. All rights reserved. Made with ❤️ for the web.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
