
import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { RevenueIntelligence } from '../components/RevenueIntelligence';
import { RiskCompliance } from '../components/RiskCompliance';
import { OperationalEfficiency } from '../components/OperationalEfficiency';
import { StrategicDecisions } from '../components/StrategicDecisions';
import { EnterpriseSolutions } from '../components/EnterpriseSolutions';
import { Testimonials } from '../components/Testimonials';
import { SecurityCertifications } from '../components/SecurityCertifications';
import { EnterpriseIntegrations } from '../components/EnterpriseIntegrations';
import { Footer } from '../components/Footer';
import { FloatingCalculator } from '../components/FloatingCalculator';
import { DemoModal } from '../components/DemoModal';

const Index = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowCalculator(scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Header />
      <Hero />
      <RevenueIntelligence />
      <RiskCompliance />
      <OperationalEfficiency />
      <StrategicDecisions />
      <EnterpriseSolutions />
      <Testimonials />
      <SecurityCertifications />
      <EnterpriseIntegrations />
      <Footer />
      {showCalculator && <FloatingCalculator />}
      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </div>
  );
};

export default Index;
