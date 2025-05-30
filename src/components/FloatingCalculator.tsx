
import React, { useState } from 'react';
import { Calculator, X, DollarSign, TrendingUp } from 'lucide-react';

export const FloatingCalculator = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [annualRevenue, setAnnualRevenue] = useState(5000);
  const [employees, setEmployees] = useState(5000);
  const [industry, setIndustry] = useState('financial-services');

  const industryMultipliers = {
    'financial-services': 1.2,
    'manufacturing': 1.0,
    'healthcare': 1.1,
    'technology': 0.9,
    'energy': 1.3,
    'retail': 0.8
  };

  const calculateROI = () => {
    const multiplier = industryMultipliers[industry as keyof typeof industryMultipliers];
    const timeSavings = (annualRevenue * 0.035 * multiplier) / 1000; // Convert to millions
    const complianceSavings = (annualRevenue * 0.022 * multiplier) / 1000;
    const operationalSavings = (employees * 3.2 * multiplier) / 1000; // $3.2K per employee
    
    return {
      annual: Math.round((timeSavings + complianceSavings + operationalSavings) * 100) / 100,
      monthly: Math.round(((timeSavings + complianceSavings + operationalSavings) / 12) * 100) / 100
    };
  };

  const roi = calculateROI();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 flex items-center space-x-2"
        >
          <Calculator className="w-6 h-6" />
          <span className="hidden sm:block font-semibold">Enterprise ROI Calculator</span>
        </button>
      ) : (
        <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 w-96 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Apex Finance AI ROI</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm"
              >
                <option value="financial-services">Financial Services</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="healthcare">Healthcare</option>
                <option value="technology">Technology</option>
                <option value="energy">Energy</option>
                <option value="retail">Retail</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Annual Revenue ($M)</label>
              <input
                type="range"
                min="1000"
                max="100000"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <div className="text-center mt-1 text-blue-400 font-semibold">${annualRevenue.toLocaleString()}M</div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Finance Team Size</label>
              <input
                type="range"
                min="500"
                max="25000"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="text-center mt-1 text-emerald-400 font-semibold">{employees.toLocaleString()}</div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 border border-green-500/30">
              <div className="flex items-center mb-2">
                <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold text-sm">Estimated Annual Value</span>
              </div>
              <div className="text-2xl font-bold text-white">${roi.annual}M</div>
              <div className="text-slate-300 text-sm">${roi.monthly}M monthly impact</div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="text-blue-400 font-semibold">Close Time Reduction</div>
                <div className="text-white">75% faster</div>
              </div>
              <div className="bg-slate-700/30 p-3 rounded-lg">
                <div className="text-emerald-400 font-semibold">Compliance Automation</div>
                <div className="text-white">99.7% accuracy</div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <DollarSign className="w-4 h-4" />
              <span>Get Detailed Business Case</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
