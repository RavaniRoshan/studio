'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: '1) Orient in Bulletin Dashboard',
    description: 'Review priorities, pick a target leaf, and start a calm session plan in under a minute.',
    image: '/images/notes-card.png',
    bgColor: 'bg-accent-yellow',
  },
  {
    id: 2,
    title: '2) Capture in Leaf Editor',
    description: 'Collect source notes, structure your argument, and mark unclear areas while context is fresh.',
    image: '/images/ai-chat-card.png',
    bgColor: 'bg-accent-pink',
  },
  {
    id: 3,
    title: '3) Lock in with Focus Gadget',
    description: 'Run a distraction-limited deep work block with a timer and intentional break checkpoints.',
    image: '/images/recorder-card.png',
    bgColor: 'bg-accent-green',
  },
  {
    id: 4,
    title: '4) Clarify with Sprout AI',
    description: 'Ask for concise explanations, rewrite options, or next-step prompts grounded in your current leaf.',
    image: '/images/tutorials-card.png',
    bgColor: 'bg-accent-orange',
  },
  {
    id: 5,
    title: '5) Close in Session Logbook',
    description: 'Record outcomes, blockers, and tomorrow\'s first move, then tune defaults in Settings & Preferences.',
    image: '/images/practice-card.png',
    bgColor: 'bg-accent-light-blue',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export default function FeatureCards() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4"
        >
          Deep Work Session flow
        </motion.h2>
        <p className="text-gray-600 text-center mb-12">
          A 5-step rhythm designed to reduce context switching and rebuild consistent study momentum.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className={`${feature.bgColor} rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8`}
            >
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>

              <div className="flex-shrink-0">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
