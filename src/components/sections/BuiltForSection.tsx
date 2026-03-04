'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const audiences = [
  {
    label: 'For students',
    description: 'Organize all your lecture materials, notes, and readings. When something doesn\'t click, the AI breaks it down and helps you practice.',
  },
  {
    label: 'For self-learners',
    description: 'Learn at your own pace with personalized guidance and resources tailored to your goals.',
  },
  {
    label: 'For researchers',
    description: 'Connect papers, notes, and ideas in a knowledge graph that helps you see patterns and make breakthroughs.',
  },
];

export default function BuiltForSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Built for how
              <br />
              you learn
            </h2>

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

          {/* Right Illustration with Quote */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <img
              src="/images/learning-illustration.png"
              alt="Person studying"
              className="w-full max-w-lg mx-auto"
            />

            {/* Quote Card Overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:right-0 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-gray-100"
            >
              <p className="text-sm text-gray-700 italic mb-2">
                "I almost don't use Google Drive anymore. Opennote centralizes everything."
              </p>
              <p className="text-xs text-gray-500">
                Sarah, Graduate student
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
