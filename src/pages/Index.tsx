
import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { RevenueIntelligence } from '../components/RevenueIntelligence';
import { RiskCompliance } from '../components/RiskCompliance';
import { OperationalEfficiency } from '../components/OperationalEfficiency';
import { StrategicDecisions } from '../components/StrategicDecisions';
import { FloatingCalculator } from '../components/FloatingCalculator';

const Index = () => {
  const [showCalculator, setShowCalculator] = useState(false);

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
      {showCalculator && <FloatingCalculator />}
    </div>
  );
};

export default Index;
