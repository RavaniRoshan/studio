'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function CTABanner() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="paper-surface radius-rough shadow-hard p-8 md:p-12 lg:p-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your ideas deserve
                <br />
                better tools
              </h2>
              <p className="text-foreground/80 mb-8 max-w-md">
                No matter what you're learning, Opennote is where it all comes together.
              </p>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 hover:scale-[1.02] px-8"
              >
                Try it free
              </Button>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <img
                src="/images/cta-people.png"
                alt="People collaborating"
                className="w-full max-w-md animate-float"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
