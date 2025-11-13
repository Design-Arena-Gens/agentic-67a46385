'use client'

import { Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    Product: ['Features', 'Pricing', 'Documentation', 'API Reference'],
    Company: ['About', 'Blog', 'Careers', 'Press Kit'],
    Resources: ['Community', 'Support', 'Status', 'Partners'],
    Legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-neutral-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="text-2xl font-bold text-primary-400 mb-4 inline-block">
              Brand
            </a>
            <p className="text-neutral-400 mb-4">
              Building the future of design systems with beautiful, accessible components.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-400 text-sm">
            © 2024 Brand. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-neutral-400 hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
