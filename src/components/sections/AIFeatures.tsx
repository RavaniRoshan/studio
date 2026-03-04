'use client';

import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    title: 'Screen-aware support',
    description:
      'Sprout AI responds to where you are: planning on Bulletin Dashboard, drafting in Leaf Editor, or reflecting in Session Logbook.',
    image: '/images/feature-knows.png',
  },
  {
    id: 2,
    title: 'Built for deep focus',
    description:
      'From Focus Gadget nudges to low-friction AI prompts, Studio-One helps students and researchers protect attention during demanding work.',
    image: '/images/feature-helps.png',
  },
  {
    id: 3,
    title: 'Local-first confidence',
    description:
      'Offline-first architecture keeps your study flow available without constant connectivity, with control centralized in Settings & Preferences.',
    image: '/images/feature-explains.png',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function AIFeatures() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16"
        >
          Screens that work together,
          <br />
          so your energy lasts longer
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-6 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-40 h-40 object-contain animate-float"
                  style={{ animationDelay: `${feature.id * 0.5}s` }}
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
