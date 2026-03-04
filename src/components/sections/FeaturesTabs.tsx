'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'galileo', label: 'Ask Galileo' },
  { id: 'visualize', label: 'Visualize concepts' },
  { id: 'connect', label: 'Connect your resources' },
  { id: 'practice', label: 'Practice suggestions' },
  { id: 'learn', label: 'Practice & learn' },
];

const tabContent = {
  galileo: {
    title: 'Meet Galileo',
    description: 'Your AI learning partner. Ask questions, get explanations, and deepen your understanding with personalized guidance.',
  },
  visualize: {
    title: 'Visual Learning',
    description: 'Transform complex concepts into visual diagrams and mind maps that make learning intuitive and memorable.',
  },
  connect: {
    title: 'Connect Resources',
    description: 'Link your notes, PDFs, and web resources in one unified knowledge graph that grows with your learning.',
  },
  practice: {
    title: 'Smart Practice',
    description: 'Get personalized practice suggestions based on your learning patterns and areas that need reinforcement.',
  },
  learn: {
    title: 'Learn Effectively',
    description: 'Combine active recall, spaced repetition, and interleaved practice for optimal learning outcomes.',
  },
};

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState('galileo');

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Everything you need in one place
        </motion.h2>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.4, 0, 0.2, 1] }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-accent-blue rounded-2xl p-8 md:p-12 text-white"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl">
                {tabContent[activeTab as keyof typeof tabContent].description}
              </p>
              <Button
                variant="secondary"
                className="bg-white text-gray-900 hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02]"
              >
                Try it free
              </Button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
