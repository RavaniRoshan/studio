'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
}

export default function Testimonial({ quote, author, role }: TestimonialProps) {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Star Rating */}
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-star text-star animate-twinkle"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
          "{quote}"
        </blockquote>

        {/* Attribution */}
        <div className="text-gray-600">
          <span className="font-medium text-gray-900">{author}</span>
          <span className="mx-2">·</span>
          <span>{role}</span>
        </div>
      </motion.div>
    </section>
  );
}
