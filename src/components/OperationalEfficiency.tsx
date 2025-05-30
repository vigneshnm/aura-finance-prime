
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Clock, DollarSign, TrendingDown, Zap } from 'lucide-react';

const processData = [
  { process: 'Month End Close', traditional: 12, aiEnhanced: 3, savings: 75 },
  { process: 'Revenue Recognition', traditional: 8, aiEnhanced: 2, savings: 75 },
  { process: 'Expense Management', traditional: 6, aiEnhanced: 1, savings: 83 },
  { process: 'Cash Reconciliation', traditional: 4, aiEnhanced: 0.5, savings: 87 }
];

const workingCapitalData = [
  { month: 'Jan', traditional: 45, optimized: 38 },
  { month: 'Feb', traditional: 47, optimized: 36 },
  { month: 'Mar', traditional: 44, optimized: 35 },
  { month: 'Apr', traditional: 46, optimized: 34 },
  { month: 'May', traditional: 48, optimized: 33 },
  { month: 'Jun', traditional: 45, optimized: 32 },
  { month: 'Jul', traditional: 47, optimized: 31 },
  { month: 'Aug', traditional: 49, optimized: 30 },
  { month: 'Sep', traditional: 46, optimized: 29 },
  { month: 'Oct', traditional: 48, optimized: 28 },
  { month: 'Nov', traditional: 50, optimized: 27 },
  { month: 'Dec', traditional: 47, optimized: 26 }
];

const expenseAnomalies = [
  { category: 'Travel & Entertainment', flagged: 23, reviewed: 19, savings: '$45K' },
  { category: 'Consulting Services', flagged: 12, reviewed: 8, savings: '$78K' },
  { category: 'Technology Licenses', flagged: 8, reviewed: 6, savings: '$32K' },
  { category: 'Office Supplies', flagged: 15, reviewed: 12, savings: '$12K' }
];

export const OperationalEfficiency = () => {
  const [selectedProcess, setSelectedProcess] = useState(0);
  const [showAnomalyDetails, setShowAnomalyDetails] = useState<number | null>(null);

  return (
    <section id="operations" className="py-20 px-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Operational Efficiency</h2>
          <p className="text-slate-300 text-lg">Streamline processes with intelligent automation and predictive analytics</p>
        </div>

        {/* Process Flow Diagrams */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <h3 className="text-xl font-semibold text-white mb-6">Process Time Optimization</h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={processData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="process" 
                  stroke="#9CA3AF" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                  fontSize={12}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="traditional" fill="#EF4444" name="Traditional (days)" />
                <Bar dataKey="aiEnhanced" fill="#10B981" name="AI-Enhanced (days)" />
              </BarChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="text-center p-4 bg-red-600/10 rounded-lg border border-red-500/30">
                <div className="text-2xl font-bold text-red-400">30 days</div>
                <div className="text-sm text-slate-400">Traditional Total</div>
              </div>
              <div className="text-center p-4 bg-green-600/10 rounded-lg border border-green-500/30">
                <div className="text-2xl font-bold text-green-400">6.5 days</div>
                <div className="text-sm text-slate-400">AI-Enhanced Total</div>
              </div>
            </div>
          </div>

          {/* Working Capital Chart */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/50">
            <h3 className="text-xl font-semibold text-white mb-6">Working Capital Optimization</h3>
            
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={workingCapitalData}>
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
                  dataKey="traditional" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Traditional"
                />
                <Line 
                  type="monotone" 
                  dataKey="optimized" 
                  stroke="#10B981" 
                  strokeWidth={3}
                  name="AI-Optimized"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-400">$12.4M</div>
                <div className="text-xs text-slate-400">Cash Released</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-400">45%</div>
                <div className="text-xs text-slate-400">Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-amber-400">18.2%</div>
                <div className="text-xs text-slate-400">Annual ROI</div>
              </div>
            </div>
          </div>
        </div>

        {/* Expense Anomaly Detection */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 mb-12">
          <h3 className="text-2xl font-semibold text-white mb-6 text-center">Expense Anomaly Detection Interface</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expenseAnomalies.map((anomaly, index) => (
              <div
                key={index}
                className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-600/30 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setShowAnomalyDetails(index)}
                onMouseLeave={() => setShowAnomalyDetails(null)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-white text-sm">{anomaly.category}</h4>
                  <TrendingDown className="w-4 h-4 text-red-400" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Flagged:</span>
                    <span className="text-red-400 font-semibold">{anomaly.flagged}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Reviewed:</span>
                    <span className="text-blue-400 font-semibold">{anomaly.reviewed}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Savings:</span>
                    <span className="text-green-400 font-semibold">{anomaly.savings}</span>
                  </div>
                </div>

                {showAnomalyDetails === index && (
                  <div className="mt-3 p-3 bg-gradient-to-r from-amber-600/20 to-red-600/20 rounded-lg border border-amber-500/30">
                    <div className="text-xs text-slate-300">
                      <div className="mb-1">Detection Rate: <span className="text-amber-400">94%</span></div>
                      <div>Avg. Response: <span className="text-green-400">2.3 hours</span></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-lg border border-blue-500/30">
              <Zap className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">300+</div>
              <div className="text-sm text-slate-400">Hours Saved Monthly</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-green-600/10 to-blue-600/10 rounded-lg border border-green-500/30">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">$167K</div>
              <div className="text-sm text-slate-400">Cost Savings Identified</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-r from-amber-600/10 to-red-600/10 rounded-lg border border-amber-500/30">
              <Clock className="w-8 h-8 text-amber-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">80%</div>
              <div className="text-sm text-slate-400">Process Automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
