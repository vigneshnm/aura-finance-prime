
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Check, Zap, Database, ChevronDown, ChevronUp, Calculator } from 'lucide-react';

const cashFlowData = [
  { month: 'Jan', actual: 8500, predicted: 8200, variance: 300 },
  { month: 'Feb', actual: 9200, predicted: 9100, variance: 100 },
  { month: 'Mar', actual: 8800, predicted: 9000, variance: -200 },
  { month: 'Apr', actual: 9800, predicted: 9600, variance: 200 },
  { month: 'May', actual: 10200, predicted: 10100, variance: 100 },
  { month: 'Jun', actual: 9600, predicted: 9800, variance: -200 },
  { month: 'Jul', actual: 10400, predicted: 10200, variance: 200 },
  { month: 'Aug', actual: 11100, predicted: 10800, variance: 300 },
  { month: 'Sep', actual: 10700, predicted: 10900, variance: -200 },
  { month: 'Oct', actual: 11500, predicted: 11300, variance: 200 },
  { month: 'Nov', actual: 12200, predicted: 12000, variance: 200 },
  { month: 'Dec', actual: 11800, predicted: 12100, variance: -300 }
];

const predictiveUseCases = [
  { 
    icon: TrendingUp, 
    title: "Real-time revenue recognition optimization across 50+ subsidiaries",
    description: "Automated ASC 606 compliance with multi-entity consolidation",
    benefit: "Reduces close time by 12 days"
  },
  { 
    icon: Database, 
    title: "Predictive customer churn analysis with 95% accuracy",
    description: "AI-powered retention strategies based on payment patterns",
    benefit: "Prevents $2.4M annual revenue loss"
  },
  { 
    icon: Zap, 
    title: "Dynamic pricing optimization based on market elasticity",
    description: "Real-time price adjustments across product lines",
    benefit: "Increases margin by 18%"
  },
  { 
    icon: Check, 
    title: "Multi-currency revenue consolidation with hedge recommendations",
    description: "Automated FX risk management and hedging strategies",
    benefit: "Reduces FX exposure by 60%"
  }
];

const advancedUseCases = [
  { 
    title: "Scenario-based cash flow modeling (1000+ variables)",
    description: "Monte Carlo simulations with market condition integration",
    benefit: "95% forecast accuracy"
  },
  { 
    title: "Predictive audit trail generation for SOX compliance",
    description: "Automated documentation with blockchain verification",
    benefit: "Reduces audit prep by 80%"
  },
  { 
    title: "Cross-entity tax optimization across global jurisdictions",
    description: "Transfer pricing automation with regulatory compliance",
    benefit: "Optimizes tax efficiency by 15%"
  },
  { 
    title: "Real-time stakeholder sentiment analysis from earnings calls",
    description: "NLP analysis of investor and analyst communications",
    benefit: "Improves investor relations ROI"
  }
];

const strategicUseCases = [
  { 
    title: "Customer lifetime value prediction with retention strategies",
    description: "AI-driven customer segmentation and targeted interventions",
    benefit: "Increases CLV by 32%"
  },
  { 
    title: "Revenue stream diversification risk assessment",
    description: "Portfolio analysis with market condition stress testing",
    benefit: "Reduces revenue concentration risk"
  },
  { 
    title: "Acquisition target valuation with synergy modeling",
    description: "Due diligence automation with integration planning",
    benefit: "Accelerates M&A process by 50%"
  },
  { 
    title: "Working capital optimization with supplier payment timing",
    description: "Cash flow optimization across the supply chain",
    benefit: "Releases $12.4M in working capital"
  }
];

export const RevenueIntelligence = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showStrategic, setShowStrategic] = useState(false);
  const [annualRevenue, setAnnualRevenue] = useState(5000);
  const [entities, setEntities] = useState(25);

  const calculateROI = () => {
    const timeSavings = (annualRevenue * 0.025) / 1000; // Convert to millions
    const complianceSavings = (annualRevenue * 0.015) / 1000;
    const operationalSavings = entities * 0.5; // $500K per entity
    
    return {
      annual: Math.round((timeSavings + complianceSavings + operationalSavings) * 100) / 100,
      monthly: Math.round(((timeSavings + complianceSavings + operationalSavings) / 12) * 100) / 100
    };
  };

  const roi = calculateROI();

  return (
    <section id="revenue" className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Revenue Intelligence Hub</h2>
          <p className="text-slate-300 text-lg">Transform complex revenue streams into autonomous AI-driven insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Interactive Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">12-Month Cash Flow Predictions</h3>
              <div className="flex space-x-2">
                <span className="text-sm text-green-400">↗ 94.2% accuracy</span>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="actual" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="Actual Revenue ($M)"
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
                  name="AI Predicted ($M)"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">$126.4M</div>
                <div className="text-sm text-slate-400">YTD Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">94.2%</div>
                <div className="text-sm text-slate-400">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">3.2 days</div>
                <div className="text-sm text-slate-400">Average Close Time</div>
              </div>
            </div>
          </div>

          {/* ROI Calculator */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <div className="flex items-center mb-6">
              <Calculator className="w-6 h-6 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">Revenue Intelligence ROI</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm text-slate-400 mb-2">Annual Revenue ($M)</label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  value={annualRevenue}
                  onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                  className="w-full accent-blue-500"
                />
                <div className="text-center mt-1 text-blue-400 font-semibold">${annualRevenue}M</div>
              </div>

              <div>
                <label className="block text-sm text-slate-400 mb-2">Global Entities</label>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={entities}
                  onChange={(e) => setEntities(Number(e.target.value))}
                  className="w-full accent-emerald-500"
                />
                <div className="text-center mt-1 text-emerald-400 font-semibold">{entities}</div>
              </div>

              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 border border-green-500/30">
                <div className="flex items-center mb-2">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-green-400 font-semibold text-sm">Annual Revenue Impact</span>
                </div>
                <div className="text-2xl font-bold text-white">${roi.annual}M</div>
                <div className="text-slate-300 text-sm">${roi.monthly}M monthly savings</div>
              </div>
            </div>
          </div>
        </div>

        {/* Predictive Revenue Management Use Cases */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6">Predictive Revenue Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {predictiveUseCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start space-x-4 p-6 rounded-lg bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 group cursor-pointer border border-slate-600/30 hover:border-blue-500/50"
                >
                  <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">{useCase.title}</h4>
                    <p className="text-slate-300 text-sm mb-2">{useCase.description}</p>
                    <div className="text-green-400 text-sm font-semibold">{useCase.benefit}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Advanced Forecasting Use Cases */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Advanced Forecasting</h3>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="mr-2">{showAdvanced ? 'Show Less' : 'Show More'}</span>
              {showAdvanced ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ${
            showAdvanced ? 'opacity-100 max-h-none' : 'opacity-60 max-h-64 overflow-hidden'
          }`}>
            {advancedUseCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-slate-800/20 hover:bg-slate-700/20 transition-all duration-300 border border-slate-600/20"
              >
                <h4 className="font-semibold text-white mb-2 text-sm">{useCase.title}</h4>
                <p className="text-slate-300 text-xs mb-2">{useCase.description}</p>
                <div className="text-emerald-400 text-xs font-semibold">{useCase.benefit}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Revenue Analytics */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-white">Strategic Revenue Analytics</h3>
            <button
              onClick={() => setShowStrategic(!showStrategic)}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span className="mr-2">{showStrategic ? 'Show Less' : 'Show More'}</span>
              {showStrategic ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-300 ${
            showStrategic ? 'opacity-100 max-h-none' : 'opacity-60 max-h-64 overflow-hidden'
          }`}>
            {strategicUseCases.map((useCase, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg bg-slate-800/20 hover:bg-slate-700/20 transition-all duration-300 border border-slate-600/20"
              >
                <h4 className="font-semibold text-white mb-2 text-sm">{useCase.title}</h4>
                <p className="text-slate-300 text-xs mb-2">{useCase.description}</p>
                <div className="text-blue-400 text-xs font-semibold">{useCase.benefit}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
