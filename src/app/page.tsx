'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import TrustBar from '@/components/sections/TrustBar';
import FeaturesTabs from '@/components/sections/FeaturesTabs';
import AIFeatures from '@/components/sections/AIFeatures';
import BuiltForSection from '@/components/sections/BuiltForSection';
import FeatureCards from '@/components/sections/FeatureCards';
import CTABanner from '@/components/sections/CTABanner';
import Footer from '@/components/sections/Footer';

export default function LandingPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white"
    >
      <Navbar />
      <main>
        <HeroSection />
        <TrustBar />
        <FeaturesTabs />
        <AIFeatures />
        <FeatureCards />
        <BuiltForSection />
        <CTABanner />
      </main>
      <Footer />
    </motion.div>
  );
}
