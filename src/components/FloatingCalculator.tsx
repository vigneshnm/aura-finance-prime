
import React, { useState } from 'react';
import { Calculator, X, DollarSign } from 'lucide-react';

export const FloatingCalculator = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [annualRevenue, setAnnualRevenue] = useState(100);
  const [employees, setEmployees] = useState(1000);

  const calculateROI = () => {
    const timeSavings = annualRevenue * 0.025; // 2.5% time savings
    const complianceSavings = annualRevenue * 0.015; // 1.5% compliance cost reduction
    const operationalSavings = employees * 2.5; // $2.5K per employee
    
    return {
      annual: Math.round((timeSavings + complianceSavings + operationalSavings) * 1000) / 1000,
      monthly: Math.round(((timeSavings + complianceSavings + operationalSavings) / 12) * 1000) / 1000
    };
  };

  const roi = calculateROI();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 flex items-center space-x-2"
        >
          <Calculator className="w-6 h-6" />
          <span className="hidden sm:block font-semibold">ROI Calculator</span>
        </button>
      ) : (
        <div className="bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-xl p-6 w-80 shadow-2xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-white">Quick ROI Calculator</h3>
            <button
              onClick={() => setIsExpanded(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-slate-400 mb-2">Annual Revenue ($M)</label>
              <input
                type="range"
                min="50"
                max="1000"
                value={annualRevenue}
                onChange={(e) => setAnnualRevenue(Number(e.target.value))}
                className="w-full accent-blue-500"
              />
              <div className="text-center mt-1 text-blue-400 font-semibold">${annualRevenue}M</div>
            </div>

            <div>
              <label className="block text-sm text-slate-400 mb-2">Finance Team Size</label>
              <input
                type="range"
                min="100"
                max="5000"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-center mt-1 text-purple-400 font-semibold">{employees.toLocaleString()}</div>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-lg p-4 border border-green-500/30">
              <div className="flex items-center mb-2">
                <DollarSign className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-400 font-semibold text-sm">Estimated Annual Savings</span>
              </div>
              <div className="text-2xl font-bold text-white">${roi.annual}M</div>
              <div className="text-slate-300 text-sm">${roi.monthly}M monthly</div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
              Get Detailed Analysis
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
