'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        {/* Illustration */}
        <motion.div variants={itemVariants} className="mb-8">
          <img
            src="/images/hero-illustration.png"
            alt="Person studying with notebook"
            className="w-full max-w-md mx-auto animate-float"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-8"
        >
          The notebook that thinks
          <br />
          with you
        </motion.h1>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="space-y-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] px-8 py-6 text-base font-medium w-full sm:w-auto"
              aria-label="Open in Browser"
            >
              <Link href="/app">Open in Browser</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gray-300 text-gray-900 hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02] px-8 py-6 text-base font-medium w-full sm:w-auto"
              aria-label="Download for Windows"
            >
              <a
                href="https://github.com/your-org/your-app/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download for Windows
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-600">Also available for macOS and Linux.</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
