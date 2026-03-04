'use client';

import { motion } from 'framer-motion';
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

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Button
            size="lg"
            className="bg-gray-900 text-white hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] px-8 py-6 text-base font-medium"
          >
            Try it free
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
