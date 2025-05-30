
import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Shield, Zap, Target } from 'lucide-react';

const painPoints = [
  {
    icon: TrendingUp,
    title: "Reduce monthly close by 75%",
    description: "From 15 days to 3 days with AI automation",
    roi: "Save $2.4M annually",
    metric: "75% time reduction"
  },
  {
    icon: Shield,
    title: "Predict audit issues 90 days early",
    description: "Proactive compliance with 99.2% accuracy",
    roi: "Avoid $50M+ penalties",
    metric: "90-day early warning"
  },
  {
    icon: Zap,
    title: "Automate regulatory compliance",
    description: "Real-time monitoring across all jurisdictions",
    roi: "80% compliance automation",
    metric: "99.7% accuracy rate"
  },
  {
    icon: Target,
    title: "Optimize cash flow with AI",
    description: "Predictive working capital management",
    roi: "Improve ROI by 23%",
    metric: "$12.4M cash released"
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
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-emerald-100 bg-clip-text text-transparent">
            AI-First Finance Platform<br />for Fortune 100 CFOs
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Transform financial operations with autonomous AI agents and predictive intelligence. 
            Built for enterprise scale with Fortune 100 security and compliance standards.
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
                    ? 'bg-gradient-to-br from-blue-600/20 to-emerald-600/20 border-blue-500/50 scale-105' 
                    : 'bg-slate-800/50 border-slate-600/50 hover:border-slate-500'
                }`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setCurrentPainPoint(index)}
              >
                <div className="flex items-center mb-4">
                  <Icon className={`w-6 h-6 mr-3 ${isActive ? 'text-blue-400' : 'text-slate-400'}`} />
                  <h3 className="font-semibold text-white text-sm">{point.title}</h3>
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

        {/* Enhanced CTA Section */}
        <div className="text-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-xl font-semibold text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 mb-4">
            <div className="flex items-center space-x-2">
              <Calculator className="w-5 h-5" />
              <span>Calculate Your ROI Impact</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
          <p className="text-slate-400 text-sm">Enterprise ROI analysis in under 2 minutes</p>
          
          {/* Fortune 100 Proof Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto">
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold text-emerald-400">99.2%</div>
              <div className="text-xs text-slate-400">Fraud Detection Accuracy</div>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">75%</div>
              <div className="text-xs text-slate-400">Faster Month-End Close</div>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold text-amber-400">$500B+</div>
              <div className="text-xs text-slate-400">Transactions Analyzed</div>
            </div>
            <div className="p-4 bg-slate-800/30 rounded-lg">
              <div className="text-2xl font-bold text-green-400">Fortune 100</div>
              <div className="text-xs text-slate-400">Enterprise Scale</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
