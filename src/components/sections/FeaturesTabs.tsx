'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const tabs = [
  { id: 'bulletin', label: 'Bulletin Dashboard' },
  { id: 'leaf', label: 'Leaf Editor' },
  { id: 'focus', label: 'Focus Gadget' },
  { id: 'logbook', label: 'Session Logbook' },
  { id: 'sprout', label: 'Sprout AI' },
  { id: 'settings', label: 'Settings & Preferences' },
];

const tabContent = {
  bulletin: {
    title: 'Bulletin Dashboard',
    description:
      'Start every study sprint with an offline-first command center. See today\'s priorities, active sessions, and pinned leaves at a glance.',
  },
  leaf: {
    title: 'Leaf Editor',
    description:
      'Capture ideas in a calm writing space designed like a Digital Botanist\'s Journal: structured notes, references, and quick links without tab sprawl.',
  },
  focus: {
    title: 'Focus Gadget',
    description:
      'Protect deep work with lightweight timing, break prompts, and distraction guards so you can stay in one intentional session.',
  },
  logbook: {
    title: 'Session Logbook',
    description:
      'Review what you learned, what blocked you, and what to do next. Every session entry builds momentum instead of burnout.',
  },
  sprout: {
    title: 'Sprout AI',
    description:
      'Get grounded help from your local context: ask for summaries, concept checks, and next actions while staying connected to your notes.',
  },
  settings: {
    title: 'Settings & Preferences',
    description:
      'Tune rhythms, themes, and study defaults for your mind. Studio-One works on desktop via Tauri across Windows, macOS, and Linux.',
  },
};

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState('bulletin');

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
        >
          Product overview
        </motion.h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Studio-One is an offline-first digital study companion for students and researchers navigating productivity burnout.
        </p>

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
                Explore Studio-One
              </Button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
