'use client';

import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin, Github } from 'lucide-react';
import { BookOpen } from 'lucide-react';

const footerLinks = {
  column1: [
    { label: 'Our Mission', href: '#mission' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Community', href: '#community' },
    { label: 'Careers', href: '#careers' },
    { label: 'Invite and Earn!', href: '#invite' },
  ],
  column2: [
    { label: 'Blog', href: '#blog' },
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Use', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
    { label: 'Contact Us', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Logo Column */}
            <div className="col-span-2 md:col-span-1">
              <a href="/" className="flex items-center gap-2 mb-4">
                <BookOpen className="w-6 h-6 text-gray-900" />
                <span className="text-lg font-semibold text-gray-900">Opennote</span>
              </a>
            </div>

            {/* Links Column 1 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column1.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-900 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links Column 2 */}
            <div>
              <ul className="space-y-3">
                {footerLinks.column2.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors relative group"
                    >
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-900 transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links Column */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-gray-900 transition-all duration-200 hover:scale-110"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-100 text-center">
            <p className="text-sm text-gray-500">
              2024 Opennote. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
