
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Check, Zap, Database } from 'lucide-react';

const cashFlowData = [
  { month: 'Jan', actual: 8500, predicted: 8200, variance: 300 },
  { month: 'Feb', actual: 9200, predicted: 9100, variance: 100 },
  { month: 'Mar', actual: 8800, predicted: 9000, variance: -200 },
  { month: 'Apr', actual: 9800, predicted: 9600, variance: 200 },
  { month: 'May', actual: 10200, predicted: 10100, variance: 100 },
  { month: 'Jun', actual: 9600, predicted: 9800, variance: -200 }
];

export const RevenueIntelligence = () => {
  const [isComparisonVisible, setIsComparisonVisible] = useState(false);

  const features = [
    { icon: Zap, title: "Predictive Audit Trail Generation", description: "AI-generated documentation for all revenue transactions" },
    { icon: Database, title: "Cross-Entity Tax Optimization", description: "Automated transfer pricing and tax allocation" },
    { icon: TrendingUp, title: "Real-time Revenue Recognition", description: "ASC 606 compliance with 99.8% accuracy" },
    { icon: Check, title: "Automated Journal Entries", description: "Reduce manual entries by 90%" }
  ];

  return (
    <section id="revenue" className="py-20 px-6 bg-gradient-to-r from-slate-900/50 to-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Revenue Intelligence Hub</h2>
          <p className="text-slate-300 text-lg">Transform complex revenue streams into actionable insights</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-white">Cash Flow Predictions</h3>
              <div className="flex space-x-2">
                <span className="text-sm text-green-400">↗ 12% variance improvement</span>
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
                  name="Actual"
                />
                <Line 
                  type="monotone" 
                  dataKey="predicted" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
                  name="AI Predicted"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">$58.1M</div>
                <div className="text-sm text-slate-400">YTD Revenue</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">94.2%</div>
                <div className="text-sm text-slate-400">Prediction Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-400">7.2 days</div>
                <div className="text-sm text-slate-400">Average Close Time</div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-slate-800/30 hover:bg-slate-700/30 transition-all duration-300 group cursor-pointer"
                    onMouseEnter={() => index === 0 && setIsComparisonVisible(true)}
                    onMouseLeave={() => setIsComparisonVisible(false)}
                  >
                    <div className="p-2 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">{feature.title}</h4>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                      {index === 0 && (
                        <div className={`mt-3 transition-all duration-300 ${isComparisonVisible ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}>
                          <div className="bg-gradient-to-r from-red-600/20 to-green-600/20 rounded-lg p-3 border border-amber-500/30">
                            <div className="grid grid-cols-2 gap-4 text-xs">
                              <div>
                                <div className="text-red-400 font-semibold">Traditional:</div>
                                <div className="text-slate-300">Manual documentation<br />3-5 days per audit</div>
                              </div>
                              <div>
                                <div className="text-green-400 font-semibold">AI-Enhanced:</div>
                                <div className="text-slate-300">Auto-generated trails<br />Real-time compliance</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600/10 to-amber-600/10 rounded-xl border border-blue-500/30">
              <h4 className="font-semibold text-white mb-2">ROI Calculator</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-400">Time Savings:</span>
                  <span className="text-green-400 font-semibold ml-2">75% reduction</span>
                </div>
                <div>
                  <span className="text-slate-400">Annual Value:</span>
                  <span className="text-blue-400 font-semibold ml-2">$2.4M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
