
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Shield, Zap, Target } from 'lucide-react';

const painPoints = [
  {
    icon: TrendingUp,
    title: "Revenue Recognition Complexity",
    description: "Manual processes delay close by 12+ days",
    roi: "Reduce close time by 75%",
    metric: "$2.4M annual savings"
  },
  {
    icon: Shield,
    title: "Compliance Risk Management",
    description: "Regulatory changes require constant monitoring",
    roi: "99.7% compliance accuracy",
    metric: "Avoid $50M+ penalties"
  },
  {
    icon: Zap,
    title: "Operational Inefficiencies",
    description: "Fragmented systems create data silos",
    roi: "80% process automation",
    metric: "300+ hours saved monthly"
  },
  {
    icon: Target,
    title: "Strategic Decision Delays",
    description: "Limited real-time financial insights",
    roi: "5x faster reporting",
    metric: "Improve ROI by 23%"
  }
];

export const Hero = () => {
  const [currentPainPoint, setCurrentPainPoint] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPainPoint((prev) => (prev + 1) % painPoints.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-amber-100 bg-clip-text text-transparent">
            AI-First Finance for<br />Fortune 100 CFOs
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Transform your financial operations with enterprise-grade AI that reduces risk, 
            accelerates close, and delivers predictive insights for strategic decision-making.
          </p>
        </div>

        {/* Problem Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            const isActive = index === currentPainPoint;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={index}
                className={`relative p-6 rounded-xl backdrop-blur-sm border transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? 'bg-gradient-to-br from-blue-600/20 to-amber-600/20 border-blue-500/50 scale-105' 
                    : 'bg-slate-800/50 border-slate-600/50 hover:border-slate-500'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setCurrentPainPoint(index)}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`w-6 h-6 mr-3 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                  <h3 className="font-semibold text-white">{point.title}</h3>
                </div>
                
                <p className="text-slate-300 text-sm mb-4">{point.description}</p>
                
                {/* ROI Reveal on Hover */}
                <div className={`transition-all duration-300 ${isHovered || isActive ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'} overflow-hidden`}>
                  <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-3 border border-green-500/30">
                    <div className="text-green-400 font-semibold text-sm">{point.roi}</div>
                    <div className="text-blue-300 text-xs">{point.metric}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-amber-600 rounded-xl font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
            <div className="flex items-center space-x-2">
              <Calculator className="w-5 h-5" />
              <span>Calculate Your Impact</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-amber-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          <p className="text-slate-400 text-sm mt-3">See potential ROI in under 2 minutes</p>
        </div>
      </div>
    </section>
  );
};
