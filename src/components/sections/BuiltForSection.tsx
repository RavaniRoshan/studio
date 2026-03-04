'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const audiences = [
  {
    label: 'For students under pressure',
    description: 'Turn scattered assignments into guided sessions that lower overload and make progress visible day by day.',
  },
  {
    label: 'For researchers in burnout cycles',
    description: 'Maintain continuity across reading, drafting, and synthesis without losing context between long-form projects.',
  },
  {
    label: 'Built for desktop depth',
    description: 'Studio-One runs via Tauri on Windows, macOS, and Linux so your core workflow stays stable and local-first.',
  },
];

export default function BuiltForSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Build Guide summary
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              Design direction: Digital Botanist&apos;s Journal — tactile calm, layered notes, and focused rituals over notification-heavy productivity noise.
            </p>

            <div className="space-y-6">
              {audiences.map((audience, index) => (
                <motion.div
                  key={audience.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {audience.label}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <img
              src="/images/learning-illustration.png"
              alt="Student studying in Studio-One"
              className="w-full max-w-lg mx-auto"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:right-0 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-gray-100"
            >
              <p className="text-sm text-gray-700 italic mb-2">
                "Studio-One feels like a desk companion, not another app shouting for my attention."
              </p>
              <p className="text-xs text-gray-500">
                Mira, graduate researcher
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
