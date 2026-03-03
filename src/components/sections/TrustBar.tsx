'use client';

import { motion } from 'framer-motion';

const universities = [
  { name: 'Yale', abbr: 'Yale' },
  { name: 'Caltech', abbr: 'Caltech' },
  { name: 'Stanford', abbr: 'Stanford' },
  { name: 'Carnegie Mellon', abbr: 'CMU' },
  { name: 'MIT', abbr: 'MIT' },
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function TrustBar() {
  return (
    <section className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {universities.map((uni) => (
            <motion.div
              key={uni.name}
              variants={itemVariants}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-300 cursor-default"
            >
              <span className="text-lg md:text-xl font-semibold tracking-wide">
                {uni.abbr}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
